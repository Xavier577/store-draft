import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/");
    console.log("connected to mongodb!");
  } catch (err) {
    console.error(err);
  }
};
