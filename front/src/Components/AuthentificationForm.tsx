import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ParameterCardTitle from './ParameterCard/ParameterCardTitle';
import Grid from '@mui/material/Grid/Grid';
import { Link } from "react-router-dom";
import { useFormManager } from "react-simple-form-manager";

interface AuthentificationFormState {
  username: string;
  password: string;
}

const minimumFieldLength = 8;

const fieldValidator = (field: string) => {
  return field.length < minimumFieldLength;
}
const errorMessage = "Must be at least 8 characters long";


const fieldHasError = (fieldValue: string) => {
  if (!fieldValue)
    return false;
  return fieldValidator(fieldValue);
}

const AuthentificationForm = (props: any) => {
  const formManager = useFormManager<AuthentificationFormState>({
    validators: {
      username: fieldValidator,
      password: fieldValidator
    },
    onSubmit: (formState: AuthentificationFormState) => {
      props.onSubmit(formState);
      if (props.debug) {
        console.log("Saved form state: ", formState);
      }
    },
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
          <TextField margin="normal" error={fieldHasError(formManager.formState.username)} helperText={props.signup && errorMessage} required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus
            value={formManager.formState.username} onChange={(a) => formManager.updateAndValidateState({ username: a.target.value })}/>
          <TextField margin="normal" error={fieldHasError(formManager.formState.password)} helperText={props.signup && errorMessage} required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"
            value={formManager.formState.password}  onChange={(a) => formManager.updateAndValidateState({ password: a.target.value })}/>
        </Grid>
        <Grid item>
          <Button type="submit" fullWidth variant="contained" color="info" sx={{ my: 1 }} >Sign Up</Button>
        </Grid>
      </form>
      <Grid item>
        <Link to={props.signup ? "/login" : "/signup"} style={{ fontWeight: "bold" }}>
          {props.signup ? "Already have an account? Log in?" : "Don't have n account? Sign up!"}
        </Link>
      </Grid>
    </Grid>
  )
}

export default AuthentificationForm;