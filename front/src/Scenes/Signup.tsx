import React, { useState } from 'react';
import AuthentificationForm from '../Components/AuthentificationForm';

const SignUp = () => (
  <AuthentificationForm signup={true} debug={true} onSubmit={() => "pl"}/>
)

export default SignUp;
