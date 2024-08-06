import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log('Failed to connect', error);
    }
}
export default connectDB;