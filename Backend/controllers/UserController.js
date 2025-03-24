import { User } from "../models/User.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";

//get user profile
export const getUserProfile = async (req,res,next)=>{
    try {
        const user = await User.findById(req.user.id).select("-password");
        
        if(!user){
            return next(new ErrorHandler("user not found",404));
        }

        res.status(200).json({success:true,user})
        
    } catch (error) {
        next(new ErrorHandler(error.message,500));
        
    }
}
//update user profile
export const updateUserProfile = async(req ,res ,next)=>{
    try {
        const {name,category}=req.body;

        const updatedUser = await User.findByIdAndUpdate(req.user.id,{name,category},{new:true,runValidator:true });

        res.status(200).json({success:true,message:"profile updated",updatedUser})
    } catch (error) {
        next(new ErrorHandler(error.message,500))
        
    }
}


//only admin (get all user )
export const getAllUsers = async (req,res,next)=>{
    try {
        const users = await User.find().select('-password');
        res.status(200).json({success:true,users})
    } catch (error) {
        next(new ErrorHandler(error.message,500));
        
    }
}

//Delte User (only admin)
export const deleteUser = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id);

        if(!user){
            return next(new ErrorHandler("user not found",404))
    
        
        }
        await user.deleteOne();
        res.status(200).json({success:true , message:"deleted succesfully "})
    
        
    } catch (error) {
        next(new ErrorHandler(error.message,500))
        
    }

   
}