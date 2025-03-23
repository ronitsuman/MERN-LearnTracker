import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,

        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            enum:["Frontend","Backend","Database"],
            required:true,
        }
    }
    ,{timestamp:true});

    //jo v data ka structure aur processing hi wo schema me ho 

    //pasword hashing before saving  using pre methods
    userSchema.pre("save",async function (next){
        //agar password modify ni hua to hashing skip karo
        if(!this.isModified("password"))return next();
        //salt ek random string generate krta hai (10 rounds standard)
        const salt = await bcrypt.genSalt(10);
        //pasword ko hash kro
        this.password = await bcrypt.hash(this.password,salt);
        next(); //next middleware ya save function call hoga 
    });

    //method to compare password when login
    userSchema.methods.matchPassword = async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password)
        
    }
    const User = mongoose.model("User",userSchema);

    export default User; 