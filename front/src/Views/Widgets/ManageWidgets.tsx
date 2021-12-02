import * as React from 'react';
import Title from '../Components/Title';
import Grid from '@mui/material/Grid/Grid';
import SecondaryPage from '../Components/SecondaryPage';
import { useState, useEffect } from 'react';
import API from '../../Controllers/API/KayoAPI';
import { WidgetSettingsGroup } from '../Components/WidgetSettings';
import { Subtitle } from '../Components/Title';
import { Link } from 'react-router-dom';

const ManageWidgets = () => {
	const [widgetsGroups, setWidgetsGroups] = useState<Object[]>([])

	useEffect(() => {
		API.getMyWidgets().then((widgetsLists: Object[]) => { setWidgetsGroups(widgetsLists) })
	}, [])
	return (
		<SecondaryPage>
			<Grid container alignItems="center" justifyContent="center" direction="column">
				<Title>Manage Widgets</Title>
				{widgetsGroups.length == 0 ?
					<><Subtitle >No widget available, please consider one of the following options:</Subtitle>
						<Subtitle><Link to="/widgets/add">Add a widget</Link></Subtitle>
						<Subtitle><Link to="/services">Subscribe to a service</Link></Subtitle>
					</> : widgetsGroups.map((widgerGroup: any) => WidgetSettingsGroup(widgerGroup))}
			</Grid>
		</SecondaryPage>
	)
}

export default ManageWidgets;