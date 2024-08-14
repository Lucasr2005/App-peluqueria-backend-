import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConect } from "./mongoDB.js";
import { getTurns, newTurn, getMonthTurns } from "./components/requestTurnsFunctions.js";
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

dbConect()

app.get("/api/turnos", getTurns)
app.get("/api/barberos/turnos", getMonthTurns)
app.post("/api/turnos", newTurn)




const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
