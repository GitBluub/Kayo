import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import Grid from '@mui/material/Grid/Grid';
import { Link } from "react-router-dom";


const Login = () => (
  <Grid container alignItems="center" justifyContent="center" direction="column">
        <ParameterCardTitle>Welcome to Kayo</ParameterCardTitle>
        <Grid item>
          <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
        </Grid>
        <Grid item>
          <Button fullWidth variant="contained" color="info" sx={{ my: 1 }} >Log In</Button>
        </Grid>
        <Grid item alignItems="center" justifyContent="center">
          <Link to="/signup" style={{fontWeight: "bold"}}>New to Kayo? Create an account</Link>
        </Grid>
      </Grid>
)

export default Login;
