import React, { useState } from 'react';
import AuthentificationForm from '../Components/AuthentificationForm';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';

const Login = () => (
  <>
  <ParameterCardTitle>Welcome to Kayo</ParameterCardTitle>
  <AuthentificationForm signup={false} debug={false} onSubmit={() => "pl"}/>
  </>
)

export default Login;
