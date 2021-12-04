import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import KayoAPI from 'src/Controllers/KayoAPI';
import User from '../Models/User';

const Admin = () => {
	const [users, setUsers] = useState<User>([]);
	const [ allowed, setAllowed ] = useState(true);

	useEffect(() => {
		KayoAPI.getUsers().then(res => {
			setUsers(res)
		}).catch(_ => setAllowed(false))
	}, []);

	if (!allowed) {
		return <Navigate replace to="/"/>
	}
	return {
		<></>
	}
}

export default Admin;