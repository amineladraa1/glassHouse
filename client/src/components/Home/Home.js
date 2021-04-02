import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Header from '../header/Header'
import Options from '../options/Options';



const useStyles = makeStyles((theme) => ({
     root : {
       minHeight : '100vh',
       backgroundImage : `url(${process.env.PUBLIC_URL+'/assets/background.jpg'})`,
       backgroundRepeat : 'no-repeat',
       backgroundSize : 'cover',     
     },
     
}));

function Home() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
             
            <CssBaseline />
             <Header />
             <Options/>
            
        </div>
    )
}

export default Home
