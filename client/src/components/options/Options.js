import React from 'react'
import {makeStyles } from '@material-ui/core'
import Buyer from './Buyer';
import Student from './Student';
import useWindowPosition from '../../Hooks/WindowPosition';




const useStyles = makeStyles((theme) => ({
     root : {
         height : '100vh',
         display : 'flex',
         alignItems : 'center',
         justifyContent : 'center',
         
     },
    
}));
function Options() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="authentification">
            <Buyer checked={checked} />      
            <Student checked={checked} />
        </div>
    )
}

export default Options
