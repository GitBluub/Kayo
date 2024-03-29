import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Title from '../Components/Title';
import Grid from '@mui/material/Grid/Grid';
import { Link } from "react-router-dom";
import { useFormManager } from "react-simple-form-manager";

/**
 * Props for authentication form
 */
interface AuthentificationFormState {
  username: string;
  password: string;
}
/**
 * Rule for password length
 */
const minimumPasswordLength = 8;
/**
 * Rule for username length
 */
const minimumUsernameLengthLength = 4;
/**
 * Field validator
 * @param minimumLength 
 * @param field 
 * @returns 
 */
const fieldValidator = (minimumLength: number, field: string) => {
  return field.length < minimumLength;
}
/**
 * Error message
 * @param length 
 * @returns 
 */
const errorMessage = (length: number) => `Must be at least ${length} characters long`;

/**
 * Check is field has error
 * @param fieldValue 
 * @param minimumLength 
 * @returns 
 */
const fieldHasError = (fieldValue: string, minimumLength: number) => {
  if (!fieldValue)
    return false;
  return fieldValidator(minimumLength, fieldValue);
}

/**
 * Authentication for props
 */
interface AuthentificationFormProps {
  debug: boolean,
  signup: boolean,
  submitNotice: string
  onSubmit: (formContent: AuthentificationFormState) => void
}

/**
 * Authentication form component
 * @param props 
 * @returns 
 */
const AuthentificationForm = (props: AuthentificationFormProps) => {
  const host = import.meta.env.SNOWPACK_PUBLIC_BACK_END_HOST
  const port = import.meta.env.SNOWPACK_PUBLIC_BACK_END_PORT
  const formManager = useFormManager<AuthentificationFormState>({
    validators: {
      username: (field: string) => fieldValidator(minimumUsernameLengthLength, field),
      password: (field: string) => fieldValidator(minimumPasswordLength, field),
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
      <a href={`http://${host}:${port}/auth/google`}>
        <img src="https://i.stack.imgur.com/QPLoG.png"/>
      </a>
    </Grid>
  )
}

export default AuthentificationForm;
export { AuthentificationFormState }