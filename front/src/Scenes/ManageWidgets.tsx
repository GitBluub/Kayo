import * as React from 'react';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import Grid from '@mui/material/Grid/Grid';
import ParameterCard from '../Components/ParameterCard/ParameterCard';
import ParameterCardGroup from '../Components/ParameterCard/ParameterCardGroup';
import ParameterCardButton from '../Components/ParameterCard/ParameterCardButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from '@mui/material/TextField/TextField';
import SecondaryPage from '../Components/SecondaryPage';
import { useState, useEffect } from 'react';
import API from '../Controllers/API';
import type { WidgetInterface, WidgetParam } from '../Components/Widget';

const WidgetGroup = (widgetGroup: any) => {
	console.log(widgetGroup);
	return (
		<ParameterCardGroup key={widgetGroup.name} title={widgetGroup.name.toUpperCase()}>
			{ 
				widgetGroup.widgets.map((widget: WidgetInterface) =>
					<ParameterCard key={widget.name} name={widget.name}>
						{
							widget.params.map(
								(value: WidgetParam, _, __) => <TextField key={value.name} id="filled-basic" label={value.name} variant="filled" value={value.value}/>)
						}
						<ParameterCardButton onClick={() => API.deleteWidget(widget.id)} href="/widgets/manage">
							<DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/>
						</ParameterCardButton>
					</ParameterCard>
				)
			}
		</ParameterCardGroup>
	)
}


const ManageWidgets = () => {
	const [ widgetsGroups, setWidgetsGroups ] = useState<Object[]>([])

	useEffect(() => {
		API.getMyWidgets().then((widgetsLists: Object[]) => { setWidgetsGroups(widgetsLists) })
	}, [])
	return <SecondaryPage>
		<Grid container alignItems="center" justifyContent="center" direction="column">
			<ParameterCardTitle>Manage Widgets</ParameterCardTitle>
			{ widgetsGroups.map((widgerGroup: any) => WidgetGroup(widgerGroup)) }
		</Grid>
	</SecondaryPage>
}

export default ManageWidgets;