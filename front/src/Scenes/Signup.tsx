import React, { useState } from 'react';
import AuthentificationForm, { AuthentificationFormState } from '../Components/AuthentificationForm';
import Alert from '@mui/material/Alert/Alert';
import AlertTitle from '@mui/material/AlertTitle/AlertTitle';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import { Navigate, useNavigate } from 'react-router';

const SignUp = () => {
  const [submit, setSubmitState] = useState(false);
  const onSubmit = (response: AuthentificationFormState) => {
    console.log(response);
    setSubmitState(true);
  }

  const submitAlert = submit ?
    <Alert severity="success">
      <AlertTitle>Hooray:</AlertTitle>
      the form has been submitted!
    </Alert> : <></>
  return (
    <>
      <ParameterCardTitle>Sign up to Kayo</ParameterCardTitle>
      { submitAlert }
      <AuthentificationForm signup={true} debug={false} onSubmit={onSubmit}/>
    </>
  )
}

export default SignUp;
