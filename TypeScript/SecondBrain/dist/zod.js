"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentSchema = exports.signupSchema = void 0;
const zod_1 = require("zod");
exports.signupSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
exports.contentSchema = zod_1.z.object({
    link: zod_1.z.string(),
    type: zod_1.z.enum(["video", "article", "tags"]),
    title: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string())
});
