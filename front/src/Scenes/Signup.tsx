import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import Grid from '@mui/material/Grid/Grid';
import { Link } from "react-router-dom";
import { useFormManager } from "react-simple-form-manager";

const minimumFieldLength = 8;

interface SignUpFormState {
  username: string;
  password: string;
}

const passwordValidator = (password: string) => {
  return password.length < 8;
}
const passwordErrorMessage = "Password must be at least 8 characters long";

const usernameValidator = passwordValidator;
const usernameErrorMessage = "Username must be at least 8 characters long";

const fieldHasError = (fieldValue: string) => {
  if (!fieldValue)
    return false;
  return passwordValidator(fieldValue);
}

const SignUp = (props: any) => {

  const handleSubmit = (formState: SignUpFormState) => {
    console.log("Saved form state: ", formState);
  };
  const formManager = useFormManager<SignUpFormState>({
    validators: {
      username: usernameValidator,
      password: passwordValidator
    },
    onSubmit: handleSubmit,
    initialState: {
      username: "",
      password: "",
    }
  });
  return (
    <Grid container alignItems="center" direction="column">
      <ParameterCardTitle>Welcome to Kayo</ParameterCardTitle>
      <form onSubmit={formManager.handleSubmit}>
        <Grid item>
          <TextField margin="normal" error={fieldHasError(formManager.formState.username) && formManager.hasErrors} helperText={usernameErrorMessage} required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus
            value={formManager.formState.username} onChange={(a) => formManager.updateAndValidateState({ username: a.target.value })}/>
          <TextField margin="normal" error={fieldHasError(formManager.formState.password)} helperText={passwordErrorMessage} required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"
            value={formManager.formState.password}  onChange={(a) => formManager.updateAndValidateState({ password: a.target.value })}/>
        </Grid>
        <Grid item>
          <Button type="submit" fullWidth variant="contained" color="info" sx={{ my: 1 }} >Sign Up</Button>
        </Grid>
      </form>
      <Grid item>
        <Link to="/login" style={{ fontWeight: "bold" }}>Already have an account? Log in</Link>
      </Grid>
    </Grid>
  )
}

export default SignUp;
