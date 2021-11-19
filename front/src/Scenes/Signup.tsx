import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import Grid from '@mui/material/Grid/Grid';
import { Link } from "react-router-dom";
import { useFormManager } from "react-simple-form-manager";


interface SignUpFormState {
  username: string;
  password: string;
  confirmPassword: string;
}

const passwordValidator = (password: string) => {
  return !password;
}
const passwordErrorMessage = "Password must not be empty";

const confirmPasswordValidator = (confirmPassword: string, formState?: SignUpFormState) => {
  return !confirmPassword || confirmPassword != formState!.password;
}
const confirPasswordErrorMessage = "Passwords don't match";

const usernameValidator = (username: string)  => {
  return !username;
}
const usernameErrorMessage = "Username must not be empty";

const SignUp = (props: any) => {

  const handleSubmit = (formState: SignUpFormState) => {
    console.log("Saved form state: ", formState);
  };
  const formManager = useFormManager<SignUpFormState>({
    validators: {
      username: usernameValidator,
      password: passwordValidator,
      confirmPassword: confirmPasswordValidator
    },
    onSubmit: handleSubmit,
    initialState: {
      username: "",
      password: "hello",
      confirmPassword: "hello",
    }
  });

  return (
    <Grid container alignItems="center" direction="column">
      <ParameterCardTitle>Welcome to Kayo</ParameterCardTitle>
      <form onSubmit={formManager.handleSubmit}>
        <Grid item>
          <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus
            value={formManager.formState.username} onChange={(a) => formManager.updateAndValidateState({ username: a.target.value })}/>
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"
            value={formManager.formState.password}  onChange={(a) => formManager.updateAndValidateState({ password: a.target.value })}/>
          <TextField margin="normal" required fullWidth name="confirm" label="Confirm" type="password" id="confirm-password"
            value={formManager.formState.confirmPassword} onChange={(a) => formManager.updateAndValidateState({ confirmPassword: a.target.value })}/>
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
