import {Grid} from '@mui/material'
import CardNote from '../components/CardNote'
import axios from 'axios'
import { useEffect, useState } from 'react'
import formatDate from '../utils/formatDate'

const apiURL = import.meta.env.VITE_API_URL;

const HomePage = () => {

  const [notes, setNotes] = useState([])
  const [loadind, setLoading] = useState(true)

  useEffect(() =>{
    const fetchData = async() => {
      try {
        const response = await axios.get(`${apiURL}/app/notes`)
        setNotes(response.data) 
        setLoading(false)
        console.log(response)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, []);

if(loadind) 
  return <span>Cargando...</span>

  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} 
      sx={{ 
      justifyContent: 'center', 
      minHeight: '100vh',
      backgroundColor:'#eff2f1',
      paddingTop:'4em',
      paddingX:'0.5em'
    }}
    >

      {notes.map(note => (
        <CardNote
          key={note._id}
          title={note.title}
          description={note.description}
          id={note._id}
          date={formatDate(note.createdAt)}
        />
      ))}

    </Grid>
    
  )
}

export default HomePage
