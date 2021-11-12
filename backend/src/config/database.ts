import mongoose from "mongoose";
import { DATABASE_URI } from "./secrets";

export const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("successfully connected to mongodb!");
  } catch (err) {
    console.error(err);
  }
};
