import * as React from 'react';
import SecondaryPage from '../Components/SecondaryPage';
import Grid from '@mui/material/Grid/Grid';
import Title from '../Components/Title';
import { useState, useEffect } from 'react';
import API from '../../Controllers/API/KayoAPI';
import { WidgetFormsGroup } from '../Components/WidgetForm';
import type { WidgetInterface } from 'src/Models/Widget';

const AddWidgets = () => {
	const [widgetsGroups, setWidgetsGroups] = useState<WidgetInterface[]>([])

	useEffect(() => {
		API.getAvailableWidgets().then((widgetsLists: WidgetInterface[]) => { console.log(widgetsLists); setWidgetsGroups(widgetsLists) })
	}, [])
	return (
	<SecondaryPage>
		<Grid container alignItems="center" justifyContent="center" direction="column">
			<Title>Add new Widgets</Title>
			{widgetsGroups.map((widgetGroup: any) => WidgetFormsGroup(widgetGroup))}
		</Grid>
	</SecondaryPage>
	)
}
export default AddWidgets;