import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { unsetToken } from '../../Store/jwtToken/jwtTokenSlice';
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button/Button';

const LogoutButton = ({unsetToken} : any) => {
	return (
		<Button variant="text" color="error" size="large" onClick={unsetToken}>
			Logout
		</Button>
	)
}

const Logout = () => {
	const dispatch = useDispatch();
	return (
	<LogoutButton unsetToken={() => {
		dispatch(unsetToken())
	}} />
	)
}


export default Logout;
