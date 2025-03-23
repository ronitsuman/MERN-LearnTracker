import express from "express";
import cors from "cors";
import dbConnect from "./config/DbConfig.js";
import { Route } from "./routes/User.Route.js";
import {authRoute} from './routes/authRoutes.js'

// initializing express
const app = express();
const PORT = process.env.PORT || 5000 ;

//db connection (eifi function)
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
//inbuild middleware
app.use(express.json()) //json data handle via this
app.use(cors())  // frontend reqst allow 
//authentication routes
app.use("/api/auth",authRoute)  //authentication routes 
app.use("/api",Route)

