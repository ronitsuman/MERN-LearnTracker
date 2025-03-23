import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();
const Mongo_Connect = process.env.MONGO_CONNECT

const dbConnect = async ()=>{
    try {
        const con = await mongoose.connect(Mongo_Connect)
        console.log(`MongoDB Connected : ${con.connection.host}`)
        
    } catch (error) {
        console.error("error :", error.message)
    }
}

export default dbConnect; 
