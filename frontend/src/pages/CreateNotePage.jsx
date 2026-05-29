import React from 'react'
import NoteForm from '../components/NoteForm'
import { Box, Container } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom'

const apiURL = import.meta.env.VITE_API_URL;

const CreateNotePage = () => {

  const navigate = useNavigate()

  const handleCreate = async(note) => {
    try {
      const res = await axios
      .post(`${apiURL}/app/notes`, note)
        
      if(res.status !== 201){
        throw new Error("Error al crear una nota")
      }
      toast.success("Nota creada con éxito!", {
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

  return (
    <Box sx={{ py: 4, backgroundColor:'#eff2f1', minHeight: '100vh',}}>
      <Container maxWidth="sm">
        <NoteForm onSubmit={handleCreate} initialDate={{title:'', description:''}} />
      </Container>
    </Box>
  )
}

export default CreateNotePage
