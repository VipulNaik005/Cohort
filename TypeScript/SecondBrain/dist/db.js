"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModel = exports.TagModel = exports.ContentModel = exports.UserModel = exports.LinkType = exports.connectToDatabase = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const ObjectId = mongoose_1.Schema.ObjectId;
// Connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose_1.default.connect("mongodb://localhost:27017");
        console.log("Database connected");
    }
    catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};
exports.connectToDatabase = connectToDatabase;
var LinkType;
(function (LinkType) {
    LinkType["VIDEO"] = "video";
    LinkType["ARTICLE"] = "article";
    LinkType["TAGS"] = "tags";
})(LinkType || (exports.LinkType = LinkType = {}));
// 4. Create the User schema
const UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
// 5. Create the Content schema 
const ContentSchema = new mongoose_1.Schema({
    link: { type: String, required: true },
    type: {
        type: String,
        enum: Object.values(LinkType), // Enforce enum values
        required: true
    },
    title: String,
    tags: [{
            type: ObjectId,
            ref: "Tag"
        }],
    userId: {
        type: ObjectId,
        ref: "User"
    }
});
//  Tag schema
const TagSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
});
//Link Schema
const LinkSchema = new mongoose_1.Schema({
    hash: String,
    userId: {
        type: ObjectId,
        ref: "User"
    }
});
// 6. Create and export the models
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
exports.ContentModel = (0, mongoose_1.model)("Content", ContentSchema);
exports.TagModel = (0, mongoose_1.model)("Tag", TagSchema);
exports.LinkModel = (0, mongoose_1.model)("Link", LinkSchema);
