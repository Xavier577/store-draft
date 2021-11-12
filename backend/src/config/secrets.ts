import dotenv from "dotenv";

process.env.NODE_ENV !== "production" ? dotenv.config() : null;

export const DATABASE_URI = process.env.DATABASE_URI as string;
