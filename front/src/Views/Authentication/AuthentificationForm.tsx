import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Title from '../Components/Title';
import Grid from '@mui/material/Grid/Grid';
import { Link } from "react-router-dom";
import { useFormManager } from "react-simple-form-manager";

interface AuthentificationFormState {
  username: string;
  password: string;
}

const minimumPasswordLength = 8;
const minimumUsernameLengthLength = 4;

const fieldValidator = (minimumLength: number, field: string) => {
  return field.length < minimumLength;
}
const errorMessage = (length: number) => `Must be at least ${length} characters long`;


const fieldHasError = (fieldValue: string, minimumLength: number) => {
  if (!fieldValue)
    return false;
  return fieldValidator(minimumLength, fieldValue);
}

interface AuthentificationFormProps {
  debug: boolean,
  signup: boolean,
  submitNotice: string
  onSubmit: (formContent: AuthentificationFormState) => void
}

const AuthentificationForm = (props: AuthentificationFormProps) => {
  const formManager = useFormManager<AuthentificationFormState>({
    validators: {
      username: (field: any) => fieldValidator(minimumUsernameLengthLength, field),
      password: (field: any) => fieldValidator(minimumPasswordLength, field),
    },
    onSubmit: (formState: AuthentificationFormState) => {
      props.onSubmit(formState);
    },
    initialState: {
      username: "",
      password: "",
    }
  });
  return (
    <Grid container alignItems="center" direction="column">
      <form onSubmit={formManager.handleSubmit}>
        <Grid item>
          <TextField margin="normal" error={fieldHasError(formManager.formState.username, minimumUsernameLengthLength)} helperText={props.signup && errorMessage(minimumUsernameLengthLength)} required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus
            value={formManager.formState.username} onChange={(a) => formManager.updateAndValidateState({ username: a.target.value })}/>
          <TextField margin="normal" error={fieldHasError(formManager.formState.password, minimumPasswordLength)} helperText={props.signup && errorMessage(minimumPasswordLength)} required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"
            value={formManager.formState.password}  onChange={(a) => formManager.updateAndValidateState({ password: a.target.value })}/>
        </Grid>
        <Grid item justifyContent="center">
          <Button type="submit" fullWidth variant="contained" color="info" sx={{ my: 1 }} >{ props.signup ? "Sign Up" : "Log in" }</Button>
        </Grid>
      </form>
      <Grid item justifyContent="center">
         <h5>{props.submitNotice}</h5>
      </Grid>
      <Grid item>
        <Link to={props.signup ? "/login" : "/signup"} style={{ fontWeight: "bold" }}>
          {props.signup ? "Already have an account? Log in?" : "Don't have an account? Sign up!"}
        </Link>
      </Grid>
    </Grid>
  )
}

export default AuthentificationForm;
export { AuthentificationFormState }