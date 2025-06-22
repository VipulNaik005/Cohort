import {string, z} from "zod"

export const signupSchema = z.object({
    username:z.string(),
    password:z.string()
})

export const contentSchema = z.object({
    link:z.string(),
    type:z.enum(["video","article","tags"]),
    title:z.string(),
    tags:z.array(z.string())
})
export type RegisterInput = z.infer<typeof signupSchema>;
export type ContentInput = z.infer<typeof contentSchema>;