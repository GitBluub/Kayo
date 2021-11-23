import React, { useState } from 'react';
import AuthentificationForm, { AuthentificationFormState } from '../Components/AuthentificationForm';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import Alert from '@mui/material/Alert/Alert';
import AlertTitle from '@mui/material/AlertTitle/AlertTitle';
import { Navigate } from 'react-router';

const Login = () => {
  const [loggedIn, setLoggedState] = useState(null as boolean | null);
  const onSubmit = (response: AuthentificationFormState) => {
    fetch("https://api.example.com/auth/login")
      .then(res => res.json())
      .then(
        (result) => {
          setLoggedState(true as boolean | null);
        },
        (error) => {
          setLoggedState(false as boolean | null);
        }
      )
  }

  let submitAlert = <></>
  if (loggedIn == true)
    return <Navigate replace to="/" />
  else if (loggedIn == false) {
    submitAlert = <Alert severity="error">
      <AlertTitle>Oops</AlertTitle>
      An error occured, probably wrong password, try again...
    </Alert>
  }
  return <>
    <ParameterCardTitle>Welcome to Kayo</ParameterCardTitle>
    { submitAlert }
    <AuthentificationForm signup={false} debug={false} onSubmit={onSubmit} submitNotice=''/>
  </>
}

export default Login;
