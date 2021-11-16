import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import Grid from '@mui/material/Grid/Grid';
import { Link } from "react-router-dom";


const SignUp = () => (
  <Grid container alignItems="center" direction="column">
    <ParameterCardTitle>Welcome to Kayo</ParameterCardTitle>
    <Grid item>
      <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus />
      <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
      <TextField margin="normal" required fullWidth name="confirm" label="Confirm" type="password" id="confirm-password" />
    </Grid>
    <Grid item>
      <Button fullWidth variant="contained" color="info" sx={{ my: 1 }} >Sign Up</Button>
    </Grid>
    <Grid item>
      <Link to="/login" style={{ fontWeight: "bold" }}>Already have an account? Log in</Link>
    </Grid>
  </Grid>
)

export default SignUp;
