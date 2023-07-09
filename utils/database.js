import mongoose from "mongoose";

let isConnected = false; // track the connection status 

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("mongodb is already connected");
        return true;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("mongodb connected");
        return true;
    } catch (error) {
        console.log(error);
        return false;
        
    }
}