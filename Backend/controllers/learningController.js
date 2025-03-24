import { Learning } from "../models/Learning.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// ✅ 1. Create Learning Entry
export const createLearning = async (req, res, next) => {
  try {
    const { day, code, output, notes, keyPoints, category } = req.body;

    const newLearning = new Learning({
      user: req.user.id, // Jo user logged in hai
      day,
      code,
      output,
      notes,
      keyPoints,
      category,
    });

    await newLearning.save();
    res.status(201).json({ success: true, message: "Learning saved successfully", newLearning });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

// ✅ 2. Get All Learnings for Logged-in User
export const getUserLearnings = async (req, res, next) => {
  try {
    console.log("User ID from Auth Middleware:", req.user.id);
    
    const learnings = await Learning.find({ user: req.user.id });

    console.log("Learnings Found:", learnings);

    if (!learnings.length) {
      return next(new ErrorHandler("No Learnings found for this user", 404));
    }

    res.status(200).json({ success: true, learnings });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};


// ✅ 3. Update Learning Entry
export const updateLearning = async (req, res, next) => {
  try {
    const updatedLearning = await Learning.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id }, // Only user ka data update ho
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedLearning) {
      return next(new ErrorHandler("Learning not found", 404));
    }

    res.status(200).json({ success: true, message: "Learning updated", updatedLearning });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

// ✅ 4. Delete Learning Entry
export const deleteLearning = async (req, res, next) => {
  try {
    const deletedLearning = await Learning.findOneAndDelete({ _id: req.params.id, user: req.user.id });

    if (!deletedLearning) {
      return next(new ErrorHandler("Learning not found", 404));
    }

    res.status(200).json({ success: true, message: "Learning deleted successfully" });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};
