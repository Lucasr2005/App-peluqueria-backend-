import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export function dbConect() {
    mongoose.set("strictQuery", false)
    console.log("Conecting...")
    mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Conected")).catch((error) => { console.log(error) })
}