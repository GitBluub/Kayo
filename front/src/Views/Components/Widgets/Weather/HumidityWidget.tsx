import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../../../Models/Service';
import Grid from '@mui/material/Grid/Grid';

interface HumidityWidgetInterface {
	city: string,
	humidity: number
}
/**
 * Weather - Humidity widget
 * @param props 
 * @returns 
 */
const HumidityWidget = (props: HumidityWidgetInterface) => (
	<Widget service={AvailableServices['weather']}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<h2>{props.city}</h2>
			</Grid>
		</Grid>
		<Grid item>
			<h1>{props.humidity + "%"} Humidity</h1>
		</Grid>
	</Widget>
)

export {HumidityWidget, HumidityWidgetInterface}