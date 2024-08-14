import mongoose from "mongoose";
const turnsSchema = new mongoose.Schema({
    "client": { type: String, required: true },
    "date": { type: Date, required: true },
    "hour": { type: String, required: true },
    "barber": { type: String, required: true },

})
export const Turns = mongoose.model("Turns", turnsSchema)