import React ,{useEffect , useState} from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Grow from '@material-ui/core/Grow';
import {  IconButton } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import { Link as Scroll } from 'react-scroll';




const useStyles = makeStyles((theme) => ({
    titleDiv : {
        display :'flex',
        justifyContent : 'center',
        alignItems : 'center',
        height : '100vh',
        flexDirection : 'column',
      },
      title : {
            
            color : '#fff',
            fontFamily: 'Dancing Script',
            
      },
      paragraph : {
            
            color : '#fff',
            fontFamily: 'Dancing Script',
            marginTop : '0',
            fontSize: '1.3rem',
            
      },
      colorText :{
           color :'#00FFFF',
      },
      icon : {
        color : '#00FFFF',
        fontSize: '4rem',
      },
}));
function Header() {
    const [checked, setChecked] = useState(false);
    const classes = useStyles();

   useEffect(() => {
     setChecked(true);
   }, []);

    return (
        <div id="header">
            <Grow in={checked}
                {...(checked ? { timeout: 1500 } : {})}              
                >
                <div className={classes.titleDiv}>
                 <h1 className={classes.title}>
                   The glass <span className={classes.colorText}>house</span> 
                 </h1>
                 <p className={classes.paragraph}>
                   welcome to the platform where artists share there work to the world 
                 </p>
                 <Scroll to="authentification" smooth={true}>
                      <IconButton>
                       <KeyboardArrowDownIcon className={classes.icon}/>
                      </IconButton>
                 </Scroll>
                 </div>
             </Grow>
        </div>
    )
}

export default Header
