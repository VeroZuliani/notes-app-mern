import express from "express"
import Note from "../models/noteModel.js"

const router = express.Router()


//Obtener todas las notas
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.log("Error al obtener las notas", error)
        res.status(500).json({erro:"Internal server error"})   
    }
})


//Obterner una nota por ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const note = await Note.findById(id)
        if(!note) 
            return res.status(400).json({error:"Nota no encontrada"})
        res.status(200).json({note})
    } catch (error) {
        console.log("Error al obtener nota por ID")
        res.status(500).json({error: "Internal server error"})
    }
})


//Crear una nueva nota
router.post('/', async(req, res) => {
    try {
        const {title, description} = req.body
        const note = new Note({ title, description })
    
        const savedNote = await note.save()
        if(savedNote){
            res.status(201).json({message: "Note creada correctamente", note:savedNote})
        }
    } catch (error) {
        console.error("Error al crear la nota", error)
        res.status(500).json({error: "Internal server error"})
    }
})


//Eliminar una nota
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deleteNote = await Note.findByIdAndDelete(id)
        if(!deleteNote) 
            return res.status(404).json({error: "Nota no eliminada"})
        res.status(200).json({message: "Nota eliminada correctamente"})
    } catch (error) {
        console.error("Error al eliminar una nota ", error)
        res.status(500).json({error: "Internal server error"})
    }
})


//Editar una nota por ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const {title, description} = req.body
        const updateNote = await Note.findByIdAndUpdate(id, {title, description}, {new: true})
        if(!updateNote) 
            return res.status(404).json({error: "Nota no actualizada correctamente"})
        res.status(200).json({message: "Nota actualizada correctamente", note: updateNote})
    } catch (error) {
        console.error("Error al actualizar una nota ", error)
        res.status(500).json({error: "Internal server error"})
    }
})


export default router
