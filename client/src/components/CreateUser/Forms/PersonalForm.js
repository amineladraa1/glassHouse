import DateFnsUtils from '@date-io/date-fns';
import {
  Box,
  Button,
  Divider,
  Fab,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import 'date-fns';
import { DatePicker, Select, TextField } from 'mui-rff';
import React, { useState } from 'react';
import FileInputComponent from 'react-file-input-previews-base64';
import { Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  Paper: {
    maxWidth: '500px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Dancing Script',
  },
}));

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = 'Required';
  }
  if (!values.bio) {
    errors.bio = 'Required';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  }
  if (!values.date) {
    errors.date = 'Required';
  }
  if (!values.city) {
    errors.city = 'Required';
  }
  return errors;
};

function ArtistForm({ handleNext, handleBack }) {
  const classes = useStyles();
  const data = useSelector((state) => state.formData);
  const [file, setFile] = useState('');
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    const personalData = { ...values, ...file };
    dispatch({ type: 'ARTISTPERSONALFORM', payload: personalData });
    handleNext();
  };

  console.log(file);
  return (
    <div className={classes.root}>
      <Paper className={classes.Paper} style={{ padding: 16 }} elevation={4}>
        <h2 className={classes.title}>Tell us more about you</h2>
        <Divider />
        <Form
          onSubmit={onSubmit}
          validate={validate}
          initialValues={{
            userName: data?.userName,
            bio: data?.bio,
            phoneNumber: data?.phoneNumber,
            date: new Date(data?.date),
            city: data?.city,
          }}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container alignItems='flex-start' spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label='User Name'
                    name='userName'
                    margin='none'
                    required={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Bio'
                    name='bio'
                    margin='none'
                    required={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Phone Number'
                    name='phoneNumber'
                    margin='none'
                    required={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <DatePicker
                    label='Birth date'
                    name='date'
                    required={true}
                    dateFunsUtils={DateFnsUtils}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Select
                    name='city'
                    label='Select a City'
                    formControlProps={{ margin: 'normal' }}
                  >
                    <MenuItem value='Casablanca'>Casablanca</MenuItem>
                    <MenuItem value='Rabat'>Rabat</MenuItem>
                    <MenuItem value='Marrakech'>Marrakech</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <FileInputComponent
                    labelText='Select a profile picture'
                    labelStyle={{ fontSize: 14 }}
                    multiple={false}
                    buttonComponent={
                      <Fab
                        color='secondary'
                        size='small'
                        component='span'
                        aria-label='add'
                        variant='extended'
                        elevation={1}
                      >
                        <AddIcon />
                      </Fab>
                    }
                    callbackFunction={({ base64 }) => {
                      setFile({ profilePic: base64 });
                    }}
                    accept='.png ,.jpeg'
                  />
                </Grid>
              </Grid>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                pt={4}
              >
                <Button onClick={handleBack}>Back</Button>
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  disable={submitting}
                >
                  Next
                </Button>
              </Box>
            </form>
          )}
        />
      </Paper>
    </div>
  );
}

export default ArtistForm;
