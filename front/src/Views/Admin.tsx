import Grid from '@mui/material/Grid/Grid';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import KayoAPI from '../Controllers/KayoAPI';
import type User from '../Models/User';
import ParameterCard from './Components/ParameterCard/ParameterCard';
import ParameterCardButton from './Components/ParameterCard/ParameterCardButton';
import ParameterCardGroup from './Components/ParameterCard/ParameterCardGroup';
import SecondaryPage from './Components/SecondaryPage';
import Title from './Components/Title';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Admin = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [ isAdmin, setAllowed ] = useState(true);

	useEffect(() => {
		KayoAPI.getUsers().then(res => {
			setUsers(res)
		}).catch(_ => setAllowed(false))
	}, []);

	if (!isAdmin) {
		return <Navigate replace to="/"/>
	}
	return <SecondaryPage>
		<Grid container alignItems="center" justifyContent="center" direction="column">
			<Title>Administration Section</Title>
			<ParameterCardGroup title="">
				{ users.map((user: User, index, _) => (
				<ParameterCard name={user.username} key={user.id}>
					<ParameterCardButton onClick={() => {
						KayoAPI.deleteUser(user.id);
						setUsers(users => users.filter(i => user.id != i.id))
					}}>
						<DeleteOutlineIcon sx={{ color: "red", fontSize: 35 }} />
					</ParameterCardButton>
				</ParameterCard>
				))}
			</ParameterCardGroup>
		</Grid>
	</SecondaryPage>
}

export default Admin;