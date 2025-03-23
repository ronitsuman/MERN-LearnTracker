import express from "express";

export const Route = express.Router();

Route.get('/health',(req,res)=>{
    res.status(200).json({message:"server is working "})
})

