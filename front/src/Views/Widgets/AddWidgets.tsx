import * as React from 'react';
import SecondaryPage from '../Components/SecondaryPage';
import Grid from '@mui/material/Grid/Grid';
import Title from '../Components/Title';
import { useState, useEffect } from 'react';
import API from '../../Controllers/KayoAPI';
import { WidgetFormsGroup } from '../Components/WidgetForm';
import type { WidgetInterface } from 'src/Models/Widget';
import { Link, Navigate } from "react-router-dom";
import { Subtitle } from '../Components/Title';
import type { WidgetGroupInterface } from '../Components/Widget';
import Alert from '@mui/material/Alert/Alert';

const AddWidgets = () => {
	const [widgetsGroups, setWidgetsGroups] = useState<WidgetGroupInterface[]>([])
	const [ added, setAddStatus] = useState<boolean>(false)

	useEffect(() => {
		API.getAvailableWidgets().then((widgetsLists: WidgetGroupInterface[]) => { setWidgetsGroups(widgetsLists) })
	}, [])
	console.log(widgetsGroups)
	return (
		<SecondaryPage>
			<Grid container alignItems="center" justifyContent="center" direction="column">
				<Title>Add new Widgets</Title>
				{ added ? <Alert severity="success">Widget added! - <Link replace to="/">check it out</Link></Alert> : <></>}
				{ widgetsGroups.length == 0 ?
					<><Subtitle >No widget, please consider going to this page:</Subtitle>
						<Subtitle><Link to="/services">Subscribe to a service</Link></Subtitle>
					</> : widgetsGroups.map((widgerGroup: WidgetGroupInterface) => {
						
						return <WidgetFormsGroup serviceName={widgerGroup.serviceName} widgets={widgerGroup.widgets} onValidate={() => setAddStatus(true)}/>
					})}
			</Grid>
		</SecondaryPage>
	)
}
export default AddWidgets;