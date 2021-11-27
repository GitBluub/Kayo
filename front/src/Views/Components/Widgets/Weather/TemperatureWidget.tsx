import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../../../Models/Service';
import Grid from '@mui/material/Grid/Grid';

interface TemperatureWidgetInterface {
	city: string,
	temperature: number
}

const TemperatureWidget = (props: TemperatureWidgetInterface) => (
	<Widget service={AvailableServices['weather']}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<h2>{props.city}</h2>
			</Grid>
		</Grid>
		<Grid item>
			<h1>{props.temperature + "°C"}</h1>
		</Grid>
	</Widget>
)

export {TemperatureWidget, TemperatureWidgetInterface}