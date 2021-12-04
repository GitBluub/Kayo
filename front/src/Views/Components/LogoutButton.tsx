import React from 'react';
import { unsetToken } from '../../Store/jwtToken/jwtTokenSlice';
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button/Button';

const LogoutButton = () => {
	const dispatch = useDispatch();

	return (
		<Button variant="text" color="error" size="large" onClick={() => {
			dispatch(unsetToken())
		}}>
			Logout
		</Button>
	)
}


export default LogoutButton;
