"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuth = UserAuth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const JWTSecret = "SECRET";
async function UserAuth(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Access Denied" });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWTSecret);
        const userExists = await db_1.UserModel.findOne({ username: decoded.username });
        if (!userExists) {
            res.status(400).json({ message: "User doesn't exists" });
        }
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
}
