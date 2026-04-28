import express from "express"

const router = express.Router()


//Obtener todas las notas
router.get('/', () => {
    console.log("Enviando las notas")
})


//Obterner una nota por ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(req.params)
    console.log(id)
    console.log("Enviando una nota por ID")
})


//Crear una nueva nota
router.post('/', (req, res) => {
    const {title, description} = req.body
    console.log(req.body) 
    console.log(title, description)
})


//Eliminar una nota
router.delete('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    console.log('Eliminar una nota por ID')
})


//Editar una nota por ID
router.put('/:id', (req, res) => {
    const id = req.params.id
    const updateData = req.body
    console.log(id)
    console.log(updateData)
    console.log("Editar una nota por ID")
})


export default router
