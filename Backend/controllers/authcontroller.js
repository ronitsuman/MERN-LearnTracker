import User  from '../models/User.model.js';
 
export  const userSignup = async(req,res)=>{
    try {
        const {name,email,password,category}= req.body
        //checking if user already exist 
        const existingUser = await User.findOne({email});
        if (existingUser){
            return res.status(400).json({message:"User already exists"})
        }
        //new user create 
        const newUser = new User({name,email,password,category});

        //save in db
        await newUser.save()
        res.status(201).json({message:"user registerd succesfully"})


        
    } catch (error) {
        res.status(500).json({message:'server error',error:error.message})
    }
}

