import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { UserModel } from "./db";

interface JwtPayload {
  username: string;
}

export interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

const JWTSecret = "SECRET"

export async function UserAuth(req: AuthenticatedRequest,res: Response,next: NextFunction): Promise<any> {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Access Denied" });
    }

    try {
        const decoded = jwt.verify(token, JWTSecret) as JwtPayload;
        const userExists = await UserModel.findOne({username:decoded.username});
        if(!userExists){
            res.status(400).json({ message: "User doesn't exists" });
        }
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
}