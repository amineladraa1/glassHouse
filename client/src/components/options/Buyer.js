import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import buyer from '../../assets/buyer.jpg'
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    margin: '50px',
    
    background: 'rgba(0,0,0,0.5)',
    color : 'white',
    
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

function Buyer({ checked }) {
    const classes = useStyles();
    
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {buyer}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className = {classes.title} gutterBottom variant="h5" component="h2">
            Buyer
          </Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
            sign in and check a variaty of paintings from thousands of inspiring artists and hit there line if you are interested in any of there
            art and sign in for events near you and  we facilitate your transactions
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Collapse>
  );
}

export default Buyer
