import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";  // Reset Token ke liye

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
        },
        passwordResetToken: {
            type: String,
            select: false  // Reset token ko bhi hide rakhenge
        },
        passwordResetExpires: {
            type: Date,
            select: false  // Expiry date ko bhi hide rakhenge
        }
    },
    { timestamps: true }
);

// **Pre Save Hook**: Password Hashing
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// **Instance Method**: Password Match Check
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// **Instance Method**: Generate Password Reset Token
userSchema.methods.generatePasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString("hex"); // Random token
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 mins expiry
    return resetToken; // Ye plain token email me bhejna hai
};

export const User = mongoose.model("User", userSchema);
