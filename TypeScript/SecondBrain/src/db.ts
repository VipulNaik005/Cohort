import mongoose, { Document, ObjectId, Schema, model } from "mongoose";

const ObjectId = Schema.ObjectId;

// Connect to MongoDB
export const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); 
    }
};

export enum LinkType {
  VIDEO = "video",
  ARTICLE = "article",
  TAGS = "tags"
}

// 2. IUser interface extending Document
export interface IUser extends Document {
  username: string;
  password: string;
}

// 3. IContent interface extending Document
export interface IContent extends Document {
  link: string;
  type: LinkType;
  title:String;
  tags:ObjectId[];
  userId:ObjectId;
}

//
export interface ITags extends Document {
    title:String;
}

//
export interface ILink extends Document {
    hash:String;
    userId:ObjectId;
}

// 4. Create the User schema
const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true ,unique:true},
  password: { type: String, required: true }
});

// 5. Create the Content schema 
const ContentSchema: Schema<IContent> = new Schema({
  link: { type: String, required: true },
  type: {
    type: String,
    enum: Object.values(LinkType), // Enforce enum values
    required: true
  },
  title:String,
  tags:[{
    type:ObjectId,
    ref:"Tag"
  }],
  userId:{
    type:ObjectId,
    ref:"User"
  }
});

//  Tag schema
const TagSchema: Schema<ITags> = new Schema({
  title: { type: String, required: true },
});

//Link Schema
const LinkSchema: Schema<ILink> = new Schema({
    hash:String,
    userId:{
        type:ObjectId,
        ref:"User"
    }
})

// 6. Create and export the models
export const UserModel = model<IUser>("User", UserSchema);
export const ContentModel = model<IContent>("Content", ContentSchema);
export const TagModel = model<ITags>("Tag", TagSchema);
export const LinkModel = model<ILink>("Link", LinkSchema);