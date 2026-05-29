import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, IconButton, Box} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import {format}  from 'date-fns';
import axios from 'axios';
import { toast } from 'react-toastify';

const apiURL = import.meta.env.VITE_API_URL;

const CardNote = ({title, description, id, date, onDelete}) => {
  
  const handleDelete = async() => {
    try {
      const res = await axios
      .delete(`${apiURL}/app/notes/${id}`)
      
      if(res.status !== 200){
        throw new Error("Error al eliminar una nota")
      }
      toast.success("Nota eliminada con éxito!", {
        position:"bottom-center",
        autoClose:300,
        theme:"colored"
      })

      if(onDelete){
        onDelete(id)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
      <Grid>
        <Card sx={{ maxWidth: 320, borderRadius: 4, backgroundColor:'#fdfdfd' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </CardContent>
          <Box  sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <time dateTime="{date}">{date}</time>
            </Typography>
            <CardActions>
              <IconButton aria-label="edit">
                <EditSquareIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={handleDelete}>
                <DeleteIcon sx={{ color: 'red'}}/>
              </IconButton>
            </CardActions>
          </Box>
        </Card>
      </Grid>
  
  )
}

export default CardNote
