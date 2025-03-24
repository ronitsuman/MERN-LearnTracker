import jwt from "jsonwebtoken"
import ErrorHandler from "../utils/ErrorHandler.js";
import { User } from "../models/User.model.js";

export const authenticateUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return next(new ErrorHandler("Unauthorized! Token required", 401));
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        

        req.user = await User.findById(decoded.id);

        if (!req.user) {
            return next(new ErrorHandler("User not found", 404));
        }

        next();
    } catch (error) {
        next(new ErrorHandler("Invalid or expired Token", 403));
    }
};

//Authorizzation middleware 
export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Access denied for role: ${req.user.role}`, 403));
        }
        next();
    };
};
