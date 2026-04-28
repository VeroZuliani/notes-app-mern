import express from "express"
import notesRouter from "./routes/notesRouter.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(express.json())

app.use("/app/notes", notesRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto http://localhost:${PORT}`)
})


