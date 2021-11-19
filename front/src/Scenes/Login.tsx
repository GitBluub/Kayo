import React, { useState } from 'react';
import AuthentificationForm from '../Components/AuthentificationForm';

const Login = () => (
  <AuthentificationForm signup={false} debug={false} onSubmit={() => "pl"}/>
)

export default Login;
