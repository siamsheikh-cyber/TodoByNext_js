import mongoose from "mongoose";

export const ConnectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("Connect MongoDB");

    } catch (error) {
        console.log(error);

    }
}