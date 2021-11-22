import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../Service';
import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';


const COVIDWidget = ({ title, subtitle, rate, positive }) => {
	return <Widget service={AvailableServices.COVID}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<h2>{title}</h2>
				<h3 style={{ color: "#DDD", padding: 12 }}>{subtitle}</h3>
			</Grid>
		</Grid>
		<Grid item >
			<Grid item style={{ padding: 3 }}>
				<Button variant="contained" color={positive ? (rate >= 0 ? 'success' : 'error') : (rate < 0 ? 'success' : 'error') } disableElevation>
					{rate >= 0 ? "+" : ""}{rate}%
				</Button>
			</Grid>
		</Grid>
	</Widget>
}

export default COVIDWidget;