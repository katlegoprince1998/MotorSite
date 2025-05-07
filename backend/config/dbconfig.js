import mongoose  from "mongoose";

import dotenv from 'dotenv';

dotenv.config()

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
        console.log("MongoDB connected: " + conn.connection.host);
    }catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}