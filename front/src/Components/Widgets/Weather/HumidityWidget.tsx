import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../Service';
import Grid from '@mui/material/Grid/Grid';

interface HumidityWidgetInterface {
	city: string,
	humidity: number
}

const HumidityWidget = (props: HumidityWidgetInterface) => (
	<Widget service={AvailableServices['weather']}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<h2>{props.city}</h2>
			</Grid>
		</Grid>
		<Grid item>
			<h1>{props.humidity + "%"}</h1>
		</Grid>
	</Widget>
)

export {HumidityWidget, HumidityWidgetInterface}