import * as React from 'react';
import { TemperatureWidget } from 'src/Components/Widgets/Weather/TemperatureWidget';
import { WeatherWidget } from 'src/Components/Widgets/Weather/WeatherWidget';
import ErrorWidget from '../../Components/Widgets/ErrorWidget';
import { FavoriteArtistWidget } from '../../Components/Widgets/Spotify/FavoriteArtistWidget';
import { FavoriteTrackWidget } from '../../Components/Widgets/Spotify/FavoriteTrackWidget';
import KayoAPI from '../API/KayoAPI';
import SpotifyAPI from '../API/SpotifyAPI';
import WeatherAPI from '../API/WeatherAPI';
import type { WidgetFactoryProps } from '../WidgetFactory';

const WeatherWidgetFactory = ({ widgetName, widgetParams }: WidgetFactoryProps) => {
	const [widget, setWidget] = React.useState(<></>);
	if (widgetParams.length != 1)
		return <ErrorWidget serviceName="Weather" widgetName={widgetName} widgetParams={widgetParams}/>
	switch (widgetName) {
		case "temperature":
			WeatherAPI.getCityTemperature(widgetParams[0].value).then(temp => {
				setWidget(<TemperatureWidget city={widgetParams[0].value} temperature={temp} />)
			})
			break;
		case "weather":
			WeatherAPI.getCityWeather(widgetParams[0].value).then(condition => {
				setWidget(<WeatherWidget city={widgetParams[0].value} illustrationUrl={condition.icon.slice(2)} condition={condition.text} />)
			})
			break;
	
		default:
			return <ErrorWidget serviceName="Weather" widgetName={widgetName} widgetParams={widgetParams}/>
	} 
	return widget;
}

export default WeatherWidgetFactory;