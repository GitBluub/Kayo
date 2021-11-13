import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import KayoCard, { KayoCardTitle, KayoCardContent } from './Components/Card';
import Grid from '@mui/material/Grid/Grid';
import Container from '@mui/material/Container/Container';


const Login = () => (
  <Grid container alignItems="center" justifyContent="center">
    <KayoCard>
      <KayoCardTitle>Welcome to Kayo</KayoCardTitle>
      <KayoCardContent>
        <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus />
        <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
        <Button fullWidth variant="contained" color="success">Log In</Button>
      </KayoCardContent>
    </KayoCard>
  </Grid>
)

export default Login;
