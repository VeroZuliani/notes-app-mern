import { Box, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';

const NoteForm = ({onSubmit, initialDate}) => {
  
  const [notes, setNotes] =  useState(initialDate)

  //Necesitamos actualizar los cambios si los datos iniciales cambian
  useEffect(() => {
    setNotes[initialDate]
  }, [initialDate])
  

  const handleChange = (e) => {
    setNotes({
      ...notes,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(notes)
  }


  const inputGrisStyle = {
    '& label.Mui-focused': { color: 'gray' },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': { borderColor: 'gray' },
    },
  };

  return (
    <Box onSubmit={handleSubmit}
      component="form" 
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '500px', height:'400px', margin: 'auto', mt: '4', borderRadius: 4, backgroundColor:'#fdfdfd', p:'2em', justifyContent:'center' }}
    >
      <TextField 
        name="title"
        label="Título" 
        variant="outlined" 
        required 
        fullWidth 
        value={notes.title}
        onChange={handleChange}
        sx={inputGrisStyle}
      />
      
      <TextField 
        name="description"
        label="Contenido de la nota" 
        variant="outlined" 
        multiline 
        rows={4} 
        fullWidth 
        value={notes.description}
        onChange={handleChange}
        sx={inputGrisStyle}
      />

      <Button variant="contained" color='success' type="submit" >
        Guardar Nota
      </Button>
    </Box>
  );
}

export default NoteForm;