import { Request, response, Response, Router } from "express";
import { contentSchema, signupSchema } from "./zod";
import { ContentModel, TagModel, UserModel } from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest, UserAuth } from "./middlewares";
import { ObjectId } from "mongoose";


const router = Router()
const saltRounds = 10;
const JWTSecret = "SECRET"

router.post("/signup", async (req: Request, res: Response): Promise<any> => {
    const result = signupSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(411).json({
            message: "Invalid input",
            errors: result.error.errors, // 
        });
    }

    try {
        const hashPass = await bcrypt.hash(result.data.password,saltRounds);
        const userExists = await UserModel.find({username:result.data.username});
        console.log(userExists)
        if(userExists){
            res.status(403).json({
                message:"User already exists ..."
            })
        }
        const user = await UserModel.create({
            username:result.data.username,
            password:hashPass
        });
        return res.status(201).json({
            message: "User created successfully",
            user,
        });
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
})

router.post("/signin", async (req: Request, res: Response): Promise<any> => {
    const result = signupSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(411).json({
            message: "Invalid input",
            errors: result.error.errors, // 
        });
    }
    try {
        const { username, password } = result.data;
        const userExists = await UserModel.findOne({ username: username });
        if (!userExists) {
            res.status(403).json({
                message: "User doesn't exists"
            })
        }
        else {
            const match = await bcrypt.compare(password, userExists.password);
            if (match) {
                const token = jwt.sign({ username: username }, JWTSecret);
                res.status(200).json({
                    message: "user signed",
                    token: token
                })
            } else {
                return res.status(411).json({
                    message: "Invalid password" // 
                });
            }
        }


    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
})
router.get("/content",UserAuth, async (req: Request, res: Response): Promise<any> => {
    const user = await UserModel.findOne({username:(req as any).user?.username})
    if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
        const contents = await ContentModel.find({
        userId:user._id
    })
    res.status(200).json({
        contents
    })
})
router.post("/content", UserAuth, async (req: Request, res: Response): Promise<any> => {
    const result = contentSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(411).json({
            message: "Invalid input",
            errors: result.error.errors, // 
        });
    }
    try {
        const user = await UserModel.findOne({ username: (req as any).user?.username });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        
        const { link, type, title, tags } = result.data;
        let tagIds = []
        for(let tag of tags){
            const temp1 = await TagModel.findOne({title:tag})
            if(temp1){
                tagIds.push(temp1._id)
            }else{
                const temp2 = await TagModel.create({title:tag});
                tagIds.push(temp2._id);
            }
        }
        const content = await ContentModel.create({
            link,
            type,
            title,
            tags:tagIds,
            userId: user._id,
        });

        return res.status(201).json({
            message: "Content created successfully",
            content,
        });
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
})
router.delete("/content/:contentId", UserAuth, async (req: AuthenticatedRequest, res: Response): Promise<any> => {
    const contentId = req.params.contentId;

    try {
        const deleted = await ContentModel.findByIdAndDelete(contentId);

        if (!deleted) {
            return res.status(404).json({ message: "Content not found" });
        }

        res.status(200).json({
            message: "Content deleted successfully"
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
});
router.post("/brain/share", async (req: Request, res: Response): Promise<any> => {
    const {share} = req.body();
    if(share){
        res.status(200).json({
            link:""
        })
    }
})
router.get("/brain/:sharelink", async (req: Request, res: Response): Promise<any> => {

})


export default router;