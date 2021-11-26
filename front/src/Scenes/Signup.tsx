import React, { useState } from 'react';
import AuthentificationForm, { AuthentificationFormState } from '../Components/AuthentificationForm';
import Alert from '@mui/material/Alert/Alert';
import AlertTitle from '@mui/material/AlertTitle/AlertTitle';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import { Navigate } from 'react-router';
import KayoAPI from '../Controllers/API/KayoAPI';

const SignUp = () => {
  const [registered, setRegisteredState] = useState(null as boolean | null);
  const onSubmit = (response: AuthentificationFormState) => {
      KayoAPI.register(response.username, response.password)
      .then(
        (result) => {
          setRegisteredState(true as boolean | null);
        },
        (error) => {
          setRegisteredState(false as boolean | null);
        }
      )
  }

  let submitAlert = <></>
  if (registered == true)
    return <Navigate replace to="/login" />
  else if (registered == false) {
    submitAlert = <Alert severity="error">
      <AlertTitle>Oops</AlertTitle>
      An error occured, try again...
    </Alert> 
  }
  return (
    <>
      <ParameterCardTitle>Sign up to Kayo</ParameterCardTitle>
      { submitAlert }
      <AuthentificationForm signup={true} debug={false} onSubmit={onSubmit} submitNotice="Once your account is created, you'll be redirected to login page!"/>
    </>
  )
}

export default SignUp;
