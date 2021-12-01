import * as React from 'react';
import Widget from '../Widget';
import AvailableServices from '../../../Models/Service';
import Grid from '@mui/material/Grid/Grid';
import type { WidgetFactoryProps } from '../../Controllers/WidgetFactory';

const ErrorWidget = (props: WidgetFactoryProps) => (
	<Widget service={AvailableServices['error']}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<h2>Invalid Widget</h2>
			</Grid>
		</Grid>
		<Grid item>
			<h1>Service name: {props.serviceName}</h1>
			<h1>Widget name: {props.widgetName}</h1>
			<h1>Widget id: {props.widgetid}</h1>
		</Grid>
	</Widget>
)

export default ErrorWidget