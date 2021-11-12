import express from "express";
import { connectDB } from "./config/database";

const app = express();

connectDB();

app.get("/", (_req, res) => res.send("you are connected to the server"));

export default app;
