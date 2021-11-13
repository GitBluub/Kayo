import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import KayoCard, { KayoCardTitle } from './Components/Card';
import { fontWeight } from '@mui/system';


const Login = () => (
  <Container>
    <KayoCard>
      <KayoCardTitle>Welcome to Kayo</KayoCardTitle>
      <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus />
      <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
      <Button variant="contained">Log In</Button>
    </KayoCard>
  </Container>
)

export default Login;
