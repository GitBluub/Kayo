import * as React from 'react';
import { TemperatureWidget } from '../../Views/Components/Widgets/Weather/TemperatureWidget';
import { WeatherWidget } from '../../Views/Components/Widgets/Weather/WeatherWidget';
import ErrorWidget from '../../Views/Components/Widgets/ErrorWidget';
import WeatherAPI from '../API/WeatherAPI';
import type { WidgetFactoryProps } from '../WidgetFactory';
import { HumidityWidget } from '../../Views/Components/Widgets/Weather/HumidityWidget';

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
		case "weather":
			WeatherAPI.getCityHumidity(widgetParams[0].value).then(rate => {
				setWidget(<HumidityWidget city={widgetParams[0].value} humidity={rate} />)
			})
			break;
	
		default:
			return <ErrorWidget serviceName="Weather" widgetName={widgetName} widgetParams={widgetParams}/>
	} 
	return widget;
}

export default WeatherWidgetFactory;