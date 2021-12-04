import * as React from 'react';
import Title from '../Components/Title';
import Grid from '@mui/material/Grid/Grid';
import SecondaryPage from '../Components/SecondaryPage';
import { useState, useEffect } from 'react';
import API from '../../Controllers/KayoAPI';
import { WidgetSettingsGroup } from '../Components/WidgetSettings';
import type { WidgetGroupInterface } from '../Components/Widget';
import { Subtitle } from '../Components/Title';
import { Link } from 'react-router-dom';
import type { WidgetInterface } from '../../Models/Widget';

const ManageWidgets = () => {
	const [widgetsGroups, setWidgetsGroups] = useState<WidgetGroupInterface[]>([])

	useEffect(() => {
		API.getMyWidgets().then((widgetsList: WidgetInterface[]) => { 
			let groups = [] as WidgetGroupInterface[]
			widgetsList.forEach((widget: WidgetInterface) => {
				let groupIndex = groups.findIndex((group) => group.serviceName == widget.serviceName)

				if (groupIndex == -1) {
					groupIndex = groups.push({serviceName: widget.serviceName, widgets: []}) - 1
				}
				groups[groupIndex].widgets.push(widget)
			})
			setWidgetsGroups(groups)
		})
	}, [])
	return (
		<SecondaryPage>
			<Grid container alignItems="center" justifyContent="center" direction="column">
				<Title>Manage Widgets</Title>
				{ widgetsGroups.length === 0 ?
					<><Subtitle >No widget available, please consider one of the following options:</Subtitle>
						<Subtitle><Link to="/widgets/add">Add a widget</Link></Subtitle>
						<Subtitle><Link to="/services">Subscribe to a service</Link></Subtitle>
					</> : widgetsGroups.map((widgerGroup: WidgetGroupInterface) => <WidgetSettingsGroup key={widgerGroup.serviceName} serviceName={widgerGroup.serviceName} widgets={widgerGroup.widgets} setState={setWidgetsGroups} groups={JSON.parse(JSON.stringify(widgetsGroups))}/>)}
			</Grid>
		</SecondaryPage>
	)
}

export default ManageWidgets;