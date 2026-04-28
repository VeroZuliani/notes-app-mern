import express from "express"
import notesRouter from "./routes/notesRouter.js"
import dotenv from "dotenv"
dotenv.config()
import { connectDB } from "./config/db.js"

const app = express()

app.use(express.json())

app.use("/app/notes", notesRouter)

const PORT = process.env.PORT || 3001

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor levantado en puerto http://localhost:${PORT}`)
    })
})




