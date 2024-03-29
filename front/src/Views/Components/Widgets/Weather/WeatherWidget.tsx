import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../../../Models/Service';
import Grid from '@mui/material/Grid/Grid';

/**
 * Props for weather widget
 */
interface WeatherWidgetInterface {
	city: string,
	condition: string,
	illustrationUrl: string,
}

/**
 * Condition Weather widget
 * @param param0 
 * @returns 
 */
const WeatherWidget = ({ city, condition, illustrationUrl}: WeatherWidgetInterface) => (
	<Widget service={AvailableServices['weather']}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<h2>{city}</h2>
			</Grid>
		</Grid>
		<Grid item>
			<Grid container direction="row" alignItems="center">
				<Grid item style={{textAlign: 'right'}}>
					<h1>{ condition }</h1>
				</Grid>
				<Grid item style={{ padding: 3, paddingLeft: 30 }}>
					<img src={illustrationUrl} style={{ width: '50px', paddingTop: 5 }} />
				</Grid>
			</Grid>
		</Grid>
	</Widget>
)

export {WeatherWidget, WeatherWidgetInterface}