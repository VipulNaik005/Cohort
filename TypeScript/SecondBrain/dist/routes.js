"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("./zod");
const db_1 = require("./db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const middlewares_1 = require("./middlewares");
const router = (0, express_1.Router)();
const saltRounds = 10;
const JWTSecret = "SECRET";
router.post("/signup", async (req, res) => {
    const result = zod_1.signupSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(411).json({
            message: "Invalid input",
            errors: result.error.errors, // 
        });
    }
    try {
        const hashPass = await bcrypt_1.default.hash(result.data.password, saltRounds);
        const userExists = await db_1.UserModel.find({ username: result.data.username });
        console.log(userExists);
        if (userExists) {
            res.status(403).json({
                message: "User already exists ..."
            });
        }
        const user = await db_1.UserModel.create({
            username: result.data.username,
            password: hashPass
        });
        return res.status(201).json({
            message: "User created successfully",
            user,
        });
    }
    catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
});
router.post("/signin", async (req, res) => {
    const result = zod_1.signupSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(411).json({
            message: "Invalid input",
            errors: result.error.errors, // 
        });
    }
    try {
        const { username, password } = result.data;
        const userExists = await db_1.UserModel.findOne({ username: username });
        if (!userExists) {
            res.status(403).json({
                message: "User doesn't exists"
            });
        }
        else {
            const match = await bcrypt_1.default.compare(password, userExists.password);
            if (match) {
                const token = jsonwebtoken_1.default.sign({ username: username }, JWTSecret);
                res.status(200).json({
                    message: "user signed",
                    token: token
                });
            }
            else {
                return res.status(411).json({
                    message: "Invalid password" // 
                });
            }
        }
    }
    catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
});
router.get("/content", middlewares_1.UserAuth, async (req, res) => {
    const user = await db_1.UserModel.findOne({ username: req.user?.username });
    if (!user) {
        return res.status(401).json({ message: "User not found" });
    }
    const contents = await db_1.ContentModel.find({
        userId: user._id
    });
    res.status(200).json({
        contents
    });
});
router.post("/content", middlewares_1.UserAuth, async (req, res) => {
    const result = zod_1.contentSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(411).json({
            message: "Invalid input",
            errors: result.error.errors, // 
        });
    }
    try {
        const user = await db_1.UserModel.findOne({ username: req.user?.username });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        const { link, type, title, tags } = result.data;
        let tagIds = [];
        for (let tag of tags) {
            const temp1 = await db_1.TagModel.findOne({ title: tag });
            if (temp1) {
                tagIds.push(temp1._id);
            }
            else {
                const temp2 = await db_1.TagModel.create({ title: tag });
                tagIds.push(temp2._id);
            }
        }
        const content = await db_1.ContentModel.create({
            link,
            type,
            title,
            tags: tagIds,
            userId: user._id,
        });
        return res.status(201).json({
            message: "Content created successfully",
            content,
        });
    }
    catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
});
router.delete("/content/:contentId", middlewares_1.UserAuth, async (req, res) => {
    const contentId = req.params.contentId;
    try {
        const deleted = await db_1.ContentModel.findByIdAndDelete(contentId);
        if (!deleted) {
            return res.status(404).json({ message: "Content not found" });
        }
        res.status(200).json({
            message: "Content deleted successfully"
        });
    }
    catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
});
router.post("/brain/share", async (req, res) => {
});
router.get("/brain/:sharelink", async (req, res) => {
});
exports.default = router;
