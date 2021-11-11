import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {

  return <Container>
    <Box sx={{marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
      <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus />
      <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
      <Button variant="contained">Log In</Button>
    </Box>
  </Container>;
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
