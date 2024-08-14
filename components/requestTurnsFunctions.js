import { Turns } from "../models/turns.js";
export const getTurns = (req, res) => {
    const body = req.query
    console.log(body)
    Turns.find(body).then(response => {
        res.send(response)
    }).catch((error) => res.status(400).json({ error }))
}
export const newTurn = (req, res) => {
    const { client, date, hour, barber } = req.body
    if (!client || !date || !hour || !barber) {
        return res.status(400).json({ error: "Datos incompletos" })
    }
    Turns.find({ date, hour, barber }).then(response => {
        if (response.length > 0) {
            return res.status(400).json({ error: "Ese turno ya está ocupado" })
        }
        const turn = new Turns({ client, date, hour, barber })
        turn.save().then(response => {
            return res.send(response)
        }).catch((error) => {
            return res.status(400).json({ error })
        })
    }).catch((error) => {
        return res.status(400).json({ error })
    })
}

export const getMonthTurns = (req, res) => {
    console.log(req.body)
    const { date, barber, days = 30 } = req.body
    const startDate = new Date(Number(date))
    const endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + days);

    Turns.find({
        date: { $gte: startDate, $lte: endDate },
        barber
    }).then(response => {
        res.send(response)
    }).catch((error) => res.status(400).json({ error }))
}