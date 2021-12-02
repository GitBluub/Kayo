import React, { useState } from 'react';
import AuthentificationForm, { AuthentificationFormState } from './AuthentificationForm';
import Title from '../Components/Title';
import Alert from '@mui/material/Alert/Alert';
import AlertTitle from '@mui/material/AlertTitle/AlertTitle';
import { Navigate } from 'react-router';
import KayoAPI from '../../Controllers/KayoAPI';
import { setToken } from '../../Store/jwtToken/jwtTokenSlice';
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch();
    const [loggedIn, setLoggedState] = useState(null as boolean | null);
    const onSubmit = (response: AuthentificationFormState) => {
        KayoAPI.login(response.username, response.password)
            .then(
                (result: any) => {
                    dispatch(setToken(result.access_token))
                },
                (error) => {
                    setLoggedState(false as boolean | null);
                }
            )
    }

    let submitAlert = <></>
    if (loggedIn == false) {
        submitAlert = <Alert severity="error">
            <AlertTitle>Oops</AlertTitle>
            An error occured, probably wrong password, try again...
        </Alert>
    } else {
        submitAlert = <></>
    }
    return <>
        <Title>Welcome to Kayo</Title>
        {submitAlert}
        <AuthentificationForm signup={false} debug={false} onSubmit={onSubmit} submitNotice='' />
    </>
}

export default Login;
