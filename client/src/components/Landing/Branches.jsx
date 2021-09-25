import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Branches = () => {
    return (
        <Card sx={{ maxWidth: 245 }} style={{backgroundColor:'#3f51b5',marginRight:'20px'}}>
        <CardMedia
          component="img"
          height="140"
          image="https://www.kigalitoday.com/IMG/jpg/gare-ya-huye-iri-mu-za-mbere-nziza-mu-rwanda.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{color:'white'}}>
            South
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:'white'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="secondary">Share</Button>
          <Button size="small" variant="contained" color="secondary">Learn More</Button>
        </CardActions>
      </Card>
    )
}

export default Branches
