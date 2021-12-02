import * as React from 'react';
import Title from '../Components/Title';
import Grid from '@mui/material/Grid/Grid';
import SecondaryPage from '../Components/SecondaryPage';
import { useState, useEffect } from 'react';
import API from '../../Controllers/KayoAPI';
import { WidgetSettingsGroup } from '../Components/WidgetSettings';
import type { WidgetGroupInterface } from '../Components/Widget';

const ManageWidgets = () => {
	const [widgetsGroups, setWidgetsGroups] = useState<WidgetGroupInterface[]>([])

	useEffect(() => {
		API.getMyWidgets().then((widgetsLists: WidgetGroupInterface[]) => { setWidgetsGroups(widgetsLists) })
	}, [])
	return (
		<SecondaryPage>
			<Grid container alignItems="center" justifyContent="center" direction="column">
				<Title>Manage Widgets</Title>
				{widgetsGroups.map((widgerGroup: WidgetGroupInterface) =>
					<WidgetSettingsGroup key={widgerGroup.serviceName} serviceName={widgerGroup.serviceName} widgets={widgerGroup.widgets}/>
				)}
			</Grid>
		</SecondaryPage>
	)
}

export default ManageWidgets;