import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { signupSchema } from './zod';
import { connectToDatabase, UserModel } from './db';
import routes from "./routes";


let app = express();
app.use(express.json());


app.use("/app/v1",routes)

app.listen(3000,()=>{
    console.log("listening at 3000")
    connectToDatabase();
})