import express from "express";

const app = express();


app.get("/",(req,res)=>{
    res.json({
        msg:"Hii there"
    })
})

// app.listen(3000,()=>{
//     console.log("listening")
// })