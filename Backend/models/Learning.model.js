import mongoose from "mongoose";

const learningSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Ye user ka reference store karega
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
    },
    output: {
      type: String,
    },
    notes: {
      type: String,
    },
    keyPoints: {
      type: [String], // Array of strings for key points
    },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "Database"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Learning = mongoose.model("Learning", learningSchema);
