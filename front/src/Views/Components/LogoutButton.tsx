import React from 'react';
import { unsetToken } from '../../Store/jwtToken/jwtTokenSlice';
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button/Button';

/**
 * Logout button, remove cookies, and dispatch status
 * @returns 
 */
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
