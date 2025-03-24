import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import errorMiddleware from './middleware/errorMiddleware.js'
import dbConnect from "./config/DbConfig.js";
import {  router as authRoutes } from "./routes/authRoutes.js";
import {router as userRoutes} from "./routes/User.Route.js "
import morgan from "morgan"; //debug
import helmet from 'helmet';
import cookieParser from "cookie-parser";
import {router as learningRoutes} from './routes/learningRoutes.js'


//load env
dotenv.config();

// initializing express
const app = express();
const PORT = process.env.PORT || 5000 ;

//db connection (IifE function)
(async()=>{
    try {
        await dbConnect();
        app.listen(PORT , ()=>{
            console.log(`server is running on port :${PORT}`)
            
        })
        
    } catch (error) {
        console.error("eror :",error.message)
        
    }
   
})();
// middleware
app.use(express.json()) //json data handle via this
app.use(cors({
    credentials:true,
    origin:"*"
}))  // frontend reqst allow 
app.use(morgan("dev")) //loging requests
app.use(cookieParser());    // cookie parser middleware 
app.use(helmet()) // Security headers


//authentication routes
app.use("/api/auth",authRoutes)  //authentication routes 

app.use('/api/user',userRoutes);

app.use('/api/learning',learningRoutes)

//error handling middleware 
app.use(errorMiddleware)

 
