import * as React from 'react';
import SecondaryPage from '../Components/SecondaryPage';
import Grid from '@mui/material/Grid/Grid';
import Title from '../Components/Title';
import { useState, useEffect } from 'react';
import API from '../../Controllers/API/KayoAPI';
import { WidgetFormsGroup } from '../Components/WidgetForm';
import { Link, Navigate } from "react-router-dom";
import { Subtitle } from '../Components/Title';

const AddWidgets = () => {
	const [widgetsGroups, setWidgetsGroups] = useState<Object[]>([])

	useEffect(() => {
		API.getAvailableWidgets().then((widgetsLists: Object[]) => { setWidgetsGroups(widgetsLists) })
	}, [])
	return (
		<SecondaryPage>
			<Grid container alignItems="center" justifyContent="center" direction="column">
				<Title>Add new Widgets</Title>
				{widgetsGroups.length == 0 ?
					<><Subtitle >No widget, please consider going to this page:</Subtitle>
						<Subtitle><Link to="/services">Subscribe to a service</Link></Subtitle>
					</> : widgetsGroups.map((widgerGroup: any) => WidgetFormsGroup(widgerGroup))}
			</Grid>
		</SecondaryPage>
	)
}
export default AddWidgets;