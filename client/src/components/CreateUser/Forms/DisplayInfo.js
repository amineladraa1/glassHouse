import React from 'react'
import {Button, Paper ,ListItem ,ListItemText, Grid, makeStyles, Divider ,Box} from '@material-ui/core'
import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
      paper : {
          width : '600px',
          alignItems: 'center',
          padding: theme.spacing(2),
      },
      title : {
        textAlign :'center',
        fontFamily: 'Dancing Script',
       },
}));

const ArtistInfoArray = ["First Name","Last Name" , "Email" , "User name " , "Biographie" , "Phone Number" , "Birth date","City"]

function DisplayInfo({handleBack}) {
  const data = useSelector((state) => state.formData)
  const classes = useStyles()
  const Entries = Object.entries(data).filter(([key]) => key !== "password" && key !== "confirmPassword" && key !== "profilePic");
  // Entries.forEach((entrie , i) => console.log(ArtistInfoArray[i]))
  
  // console.log(Entries)
    return (
        <div>   
                  <Paper className= {classes.paper}  >
                  <h2 className={classes.title}>
                   Confirm Info and submit
                  </h2>
                  <Divider />
                  {Entries.map((entrie , i) => (
                   
                                                <div id={entrie[0]}>   
                                                 <ListItem>
                                                <Grid container>
                                                  <Grid item sm={6}>
                                                   <ListItemText
                                                     primary={ArtistInfoArray[i]}
                                                   />
                                                   </Grid>
                                                  
                                                   <Grid item sm={6}>
                                                   <ListItemText
                                                     primary={ entrie[1]}
                                                   />
                                                   </Grid>
                                                 </Grid>
                                                 </ListItem>
                                                 <Divider />
                                                </div>
                                                
                                                )
                                                )} 
                  <Box  display="flex" 
                         alignItems="center"
                         justifyContent="center"
                         pt={4}
                           >
            <Button onClick={handleBack} 
            // className={classes.button}
            >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                // onClick={handleNext}
                // className={classes.button}
              >
                Submit
              </Button>
              </Box>
              </Paper>
        </div>
    )
}

export default DisplayInfo
