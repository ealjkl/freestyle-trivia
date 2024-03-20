import mongoose, { Schema } from "mongoose";

const questionsSchema = new Schema(
  {
    content: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Question = mongoose.model("Question", questionsSchema);
