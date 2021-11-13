import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import KayoCard, { KayoCardTitle, KayoCardContent } from './Components/Card';
import Grid from '@mui/material/Grid/Grid';
import Link from '@mui/material/Link/Link';


const Login = () => (
  <Grid container alignItems="center" justifyContent="center">
    <KayoCard>
      <KayoCardTitle>Welcome to Kayo</KayoCardTitle>
      <KayoCardContent>
        <Grid container alignItems="center" justifyContent="center">
          <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
          <Button fullWidth variant="contained" color="success" sx={{ my: 1 }} >Log In</Button>
          <Link href="#" underline="hover" style={{fontWeight: "bold" }} sx={{ my: 3 }}>New to Kayo? Create an account</Link>
        </Grid>
      </KayoCardContent>
    </KayoCard>
  </Grid>
)

export default Login;
