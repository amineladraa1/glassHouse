import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import artist from '../../assets/artist.jpg'
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    background: 'rgba(0,0,0,0.5)',
    color : 'white',
    margin: '50px',
    // height : '500px' 
    
  },
  media: {
    height: 240,
    minWidth: '400px',
  },
  title: {
    fontFamily: 'Dancing Script',
    fontWeight: 'bold',
    fontSize: '2rem',
    textAlign:'center',
    
  },
  description: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
});

function Student({ checked }) {
    const classes = useStyles();
   
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {artist}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className = {classes.title} gutterBottom variant="h5" component="h2">
            Artist
          </Typography>
          <Typography className={classes.description} variant="body2"  component="p">
              are you an artisit looking to display your art for thousands of potential buyers and for a chance to collaborate with other artists 
              and sign in for events near you
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Collapse>
  );
}

export default Student
