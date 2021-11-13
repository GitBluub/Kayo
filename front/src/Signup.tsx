import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import KayoCard, { KayoCardTitle, KayoCardContent } from './Components/Card';
import Grid from '@mui/material/Grid/Grid';
import { Link } from "react-router-dom";


const SignUp = () => (
  <Grid container alignItems="center" justifyContent="center">
    <KayoCard>
      <KayoCardTitle>Welcome to Kayo</KayoCardTitle>
      <KayoCardContent>
        <Grid container alignItems="center" justifyContent="center">
          <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
          <TextField margin="normal" required fullWidth name="password" label="Confirm Password" type="password" id="confirm-password" autoComplete="current-password"/>
          <Button fullWidth variant="contained" color="success" sx={{ my: 1 }} >Sign Up</Button>
          <Link to="/login"  style={{fontWeight: "bold", textDecoration: 'inherit' }}>Already have an account? Log in</Link>
        </Grid>
      </KayoCardContent>
    </KayoCard>
  </Grid>
)

export default SignUp;
