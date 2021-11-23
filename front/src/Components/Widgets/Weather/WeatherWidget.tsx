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


enum Weather {
	Sunny,
	Mist,
	Rain,
	Snow,
	Cloudy,
	Night
}

interface WeatherWidgetInterface {
	city: string,
	country: string,
	weather: Weather,
}

const getWeatherIcon = (weather: Weather) => {
	var style = {fontSize: 40}
	switch (weather) {
		case Weather.Sunny:
			return <WbSunnyRoundedIcon style={style}/>;
		case Weather.Mist:
			return <WavesIcon style={style}/>;
		case Weather.Rain:
			return <ShowerIcon style={style}/>;
		case Weather.Snow:
			return <AcUnitRoundedIcon style={style}/>;
		case Weather.Cloudy:
			return <CloudRoundedIcon style={style}/>;
		case Weather.Night:
			return <NightsStayIcon style={style}/>;
	}
	return <SentimentVeryDissatisfiedIcon style={style}/>;
}

const WeatherWidget = (props: WeatherWidgetInterface) => (
	<Widget service={AvailableServices.WEATHER}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<h2>{props.city}</h2>
				<h3 style={{ color: "#DDD", padding: 12 }}>{"in " + props.country}</h3>
			</Grid>
		</Grid>
		<Grid item>
			<Grid container direction="row" alignItems="center">
				<Grid item style={{textAlign: 'right'}}>
					<h4>{ Weather[props.weather] }</h4>
				</Grid>
				<Grid item style={{ padding: 3, paddingLeft: 30 }}>
					{ getWeatherIcon(props.weather) }
				</Grid>
			</Grid>
		</Grid>
	</Widget>
)

export {WeatherWidget, WeatherWidgetInterface, Weather}