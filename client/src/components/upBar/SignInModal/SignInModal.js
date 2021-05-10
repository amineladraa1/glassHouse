import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useState } from 'react';
import { useStyles } from './Style';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../../Actions/userActions';
import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Alert from '@material-ui/lab/Alert';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function SignInModal({ handleCloseModel, openModel }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({});
  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAction(form, history));
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={openModel}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseModel}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <Container component='main' maxWidth='xs' className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>Sign In</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container>
              <Grid xs={12} sm={12}>
                <TextField
                  name='email'
                  label='email'
                  type='email'
                  fullWidth
                  variant='outlined'
                  autoFocus
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                />
              </Grid>

              <Grid xs={12} sm={12}>
                <Box pt={2}>
                  <TextField
                    name='password'
                    label='password'
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    variant='outlined'
                    onChange={(e) =>
                      setForm({ ...form, [e.target.name]: e.target.value })
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
              className={classes.submit}
            >
              log in
            </Button>
          </form>
        </Container>
      </Dialog>
    </div>
  );
}

export default SignInModal;
