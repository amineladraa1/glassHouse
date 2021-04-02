import {
  Box,
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { TextField } from "mui-rff";
import React, { useState } from "react";
import { Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  Paper: {
    maxWidth: "500px",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  title: {
    textAlign: "center",
    fontFamily: "Dancing Script",
  },
}));

const validate = (values) => {
  const errors = {};
  const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!mailFormat.test(values.email)) {
    errors.email = "email is invalid";
  }

  if (!values.password) {
    errors.password = "Required";
  }
  if (values.password.length < 8) {
    errors.password = "password must contain 8 characters or more";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  }
  return errors;
};
function ArtistForm({ handleNext }) {
  const classes = useStyles();
  const data = useSelector((state) => state.formData);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch({ type: "ARTISTFIRSTFORM", payload: values });
    handleNext();
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.Paper} style={{ padding: 16 }} elevation={4}>
        <h2 className={classes.title}>Tell us more about you</h2>
        <Divider />
        <Form
          onSubmit={onSubmit}
          validate={validate}
          initialValues={{
            firstName: data?.firstName,
            lastName: data?.lastName,
            email: data?.email,
            password: data?.password,
            confirmPassword: data?.confirmPassword,
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    margin="none"
                    required={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    margin="none"
                    required={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    name="email"
                    margin="none"
                    required={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    name="password"
                    margin="none"
                    type={showPassword ? "text" : "password"}
                    required={true}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    margin="none"
                    type="password"
                    required={true}
                  />
                </Grid>
              </Grid>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                pt={4}
              >
                <Button disabled>Back</Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
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
