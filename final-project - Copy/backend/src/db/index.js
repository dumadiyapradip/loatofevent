import dotenv from 'dotenv'
import mongoose from "mongoose";
import { User } from "../models/user.models.js"



dotenv.config()

// async function ensurePhoneNumberIndexDropped() {
//     try {
//         const indexes = await User.collection.indexes();
//         const phoneNumberIndex = indexes.find(index => index.name === "PhoneNumber");

//         if (phoneNumberIndex) {
//             await User.collection.dropIndex("PhoneNumber_1");
//             console.log("Dropped unique index on PhoneNumber");
//         }
//     } catch (error) {
//         console.error("Error checking or dropping index:", error);
//     }
// }

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://pradip123:pradip123@cluster0.jgtbhok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
      
        
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}



export default connectDB
