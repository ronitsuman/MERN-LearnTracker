import mongoose from "mongoose";
import bcrypt from "bcrypt";

// User Schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            select: false  // Password ko by default query me hide karenge
        },
        category: {
            type: String,
            enum: ["Frontend", "Backend", "Database"],
            required: true
        },
        role: {
            type: String,
            default: 'user'
        },
        refreshToken: {
            type: String,
            select: false  // Token ko hidden rakhenge taaki query se na aaye
        }
    },
    { timestamps: true }  // Correct syntax for timestamps
);

// **Pre Save Hook**: Password Hashing
userSchema.pre("save", async function (next) {
    // Agar password modify nahi hua, to hashing skip karein
    if (!this.isModified("password")) return next();

    // Generate Salt (10 rounds recommended)
    const salt = await bcrypt.genSalt(10);
    
    // Password Hash
    this.password = await bcrypt.hash(this.password, salt);
    
    next();
});

// **Instance Method**: Password Match Check
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model("User", userSchema);
