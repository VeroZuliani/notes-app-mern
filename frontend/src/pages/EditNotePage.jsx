import React from 'react'
import NoteForm from '../components/NoteForm'
import { Box, Container } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

const apiURL = import.meta.env.VITE_API_URL;

const EditNotePage = () => {

  const navigate = useNavigate()
  const {id} = useParams()

  const [noteDate, setNoteDate] = useState({title: '', description: ''})
  const [loading, setLoading] = useState(true)

  //Trae los datos actuales de la nota
  useEffect(() =>{
    const fetchNote = async() => {
      try {
        const res = await axios
        .get(`${apiURL}/app/notes/${id}`)
        setNoteDate(res.data.note) 
        setLoading(false)
        console.log(res)
      }
      catch (error) {
        console.log(error)
        navigate("/")
      }
    }
    fetchNote()
  }, [id]);

  const handleUpdate = async(updatedNote) => {
    try {
      const res = await axios
      .put(`${apiURL}/app/notes/${id}`, updatedNote)
      
      if(res.status !== 200){
        throw new Error("Error al editada una nota")
      }
      toast.success("Nota editada con éxito!", {
        position:"bottom-center",
        autoClose:300,
        theme:"colored"
      })
      //Para volver a pagina de inicio al "Guardar una nota"
      navigate("/")

    } catch (error) {
      console.log(error)
    }
  }

  if (loading){
    return(
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <span>Cargando datos de la nota...</span>
      </Box>
    ) 
  } 
    
  return (
    <Box sx={{ py: 4, backgroundColor:'#eff2f1', minHeight: '100vh',}}>
      <Container maxWidth="sm">
        <NoteForm onSubmit={handleUpdate} initialDate={noteDate} />
      </Container>
    </Box>
  )
}

export default EditNotePage
