import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../Service';
import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';

interface COVIDWidgetInterface {
	title: string,
	subtitle: string,
	rate: number,
	positive: boolean
}

const COVIDWidget = (props: COVIDWidgetInterface) => {
	return <Widget service={AvailableServices.COVID}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<h2>{props.title}</h2>
				<h3 style={{ color: "#DDD", padding: 12 }}>{props.subtitle}</h3>
			</Grid>
		</Grid>
		<Grid item >
			<Grid item style={{ padding: 3 }}>
				<Button variant="contained" color={props.positive ? (props.rate >= 0 ? 'success' : 'error') : (props.rate < 0 ? 'success' : 'error') } disableElevation>
					{props.rate >= 0 ? "+" : ""}{props.rate}%
				</Button>
			</Grid>
		</Grid>
	</Widget>
}

export {COVIDWidget, COVIDWidgetInterface}