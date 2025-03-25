import{ User }from '../models/User.model.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from 'dotenv'
import ErrorHandler from '../utils/ErrorHandler.js'
import { sendEmail } from '../utils/nodemailer.js';

dotenv.config();
// User Signup
export const userSignup = async (req, res,next ) => {
    try {
        const { name, email, password, category } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(new ErrorHandler("User already exists", 400));
        }

        // Create new user
        const newUser = new User({ name, email, password, category });

        // Save in DB
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        next(new ErrorHandler(error.message,500));
    }
};

// JWT Token Generator Function used in user login
const generateToken = (userId) => {
    return jwt.sign(
        { id: userId },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );
};



//genrate refresh token
const generateRefreshToken = (userId)=>{
    return jwt.sign(
    {id:userId},
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn:process.env.REFRESH_TOKEN_EXPIRES_IN}
)}


// User Login
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists & select password
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // Generate Tokens
        const accessToken = generateToken(user._id);
        const refreshToken = generateRefreshToken(user._id);

        // 🔹 Securely Store Refresh Token in HTTP-only Cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,  // JavaScript cannot access this cookie (More Secure)
            secure: process.env.NODE_ENV === "production", // Only HTTPS in production
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 Days
        });

        res.status(200).json({
            message: "Login Successful",
            accessToken,
            user: {
                id: user._id,
                email: user.email,
                category: user.category
            }
        });

        console.log("Access Token:", accessToken);
        console.log("Refresh Token:", refreshToken);

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};



//user logout
export const userLogout = async (req, res) => {
    try {
        // Get refresh token from cookies
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(400).json({ message: "No refresh token found" });
        }

        // Find user with the refresh token
        const user = await User.findOne({ refreshToken });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Remove refresh token from DB
        user.refreshToken = null;
        await user.save();

        // Clear refresh token cookie
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });

        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


//refresg token
export const refreshTokenHandler = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json({ message: "Refresh Token missing" });
        }

        // Find user with this refresh token
        const user = await User.findOne({ refreshToken });
        if (!user) {
            return res.status(403).json({ message: "Invalid Refresh Token" });
        }

        // Verify Refresh Token
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Invalid or expired Refresh Token" });
            }

            // Generate new Access Token
            const newAccessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
            });

            res.status(200).json({ accessToken: newAccessToken });
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

//forgot password

 
export const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;

        //  1. Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorHandler("User not found", 404));
        }

        //  2. Generate Reset Token
        const resetToken = user.generatePasswordResetToken();
        await user.save({ validateBeforeSave: false }); // Validation skip karega

        //  3. Create Reset URL
        const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

        //  4. Email Content
        const message = `
            <h3>Password Reset Request</h3>
            <p>Click on the link below to reset your password:</p>
            <a href="${resetUrl}" target="_blank">Reset Password</a>
            <p>This link is valid for <strong>10 minutes</strong>.</p>
        `;

        // 📌 5. Send Email
        await sendEmail(user.email, "Password Reset Request", message);

        res.status(200).json({
            success: true,
            message: "Reset password link sent to your email.",
        });

    } catch (error) {
        next(new ErrorHandler(error.message, 500));
    }
};

//  (2) Reset Password API
export const resetPassword = async (req, res, next) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;

        //  1. Hash the token & Find User
        const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

        const user = await User.findOne({
            passwordResetToken: hashedToken,
            passwordResetExpires: { $gt: Date.now() }, // Token expiry check
        });

        if (!user) {
            return next(new ErrorHandler("Invalid or expired token", 400));
        }

        //  2. Update Password
        user.password = newPassword;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Password reset successful. You can now log in with your new password.",
        });

    } catch (error) {
        next(new ErrorHandler(error.message, 500));
    }
};

