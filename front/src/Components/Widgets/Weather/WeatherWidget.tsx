import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../Service';
import Grid from '@mui/material/Grid/Grid';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import WavesIcon from '@mui/icons-material/Waves';
import ShowerIcon from '@mui/icons-material/Shower';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


interface WeatherWidgetInterface {
	city: string,
	condition: string,
	illustrationUrl: string,
}

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
					<h4>{ condition }</h4>
				</Grid>
				<Grid item style={{ padding: 3, paddingLeft: 30 }}>
					<img src={illustrationUrl} style={{ width: '150px', paddingTop: 5 }} />
				</Grid>
			</Grid>
		</Grid>
	</Widget>
)

export {WeatherWidget, WeatherWidgetInterface}