import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, IconButton, Box} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import {format}  from 'date-fns';

const CardNote = ({title, description, id, date}) => {
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
              <IconButton aria-label="delete">
                <DeleteIcon sx={{ color: 'red'}}/>
              </IconButton>
            </CardActions>
          </Box>
        </Card>
      </Grid>
  
  )
}

export default CardNote
