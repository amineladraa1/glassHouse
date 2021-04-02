import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import background from '../../assets/background.jpg'

export const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
      color :'white',
    },
    active: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    completed: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
    },
  })(StepConnector);

  export const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
  });
  export const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor : '#F5F5F5',
      backgroundImage : `url(${background})` ,
      backgroundRepeat :'no-repeat',
      backgroundSize :'cover',
      minHeight : '100vh'
     
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    container : {
      marginTop: '30px',
      display : 'flex',
      flexDirection :'column',
      justifyContent :'center',
      alignItems : 'center',

    },
    stepper :{
          // backgroundImage : `url(${background})` ,
          // backgroundRepeat :'no-repeat',
          // backgroundSize :'cover'
          background: 'none',
    },
  }));