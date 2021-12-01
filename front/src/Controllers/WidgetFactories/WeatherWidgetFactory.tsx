import React, { useEffect, useState } from 'react';
import { TemperatureWidget } from '../../Views/Components/Widgets/Weather/TemperatureWidget';
import { WeatherWidget } from '../../Views/Components/Widgets/Weather/WeatherWidget';
import ErrorWidget from '../../Views/Components/Widgets/ErrorWidget';
import WeatherAPI from '../API/WeatherAPI';
import type { ServiceWidgetFactoryProps } from '../WidgetFactory';
import { HumidityWidget } from '../../Views/Components/Widgets/Weather/HumidityWidget';

interface WeatherWidgetData {
	city: string,
	temperature: number | undefined,
	illustrationUrl: string | undefined,
	humidity: number | undefined,
	condition: string | undefined,
}

const WeatherWidgetFactory = ({ widgetName, widgetParams }: ServiceWidgetFactoryProps) => {
	const [widget, setWidget] = React.useState(<></>);

	useEffect(() => {
		setWidget((widget) => {
		if (widgetParams.length != 1)
			return <ErrorWidget serviceName="Weather" widgetName={widgetName} widgetParams={widgetParams}/>
		switch (widgetName) {
			case "temperature":
				WeatherAPI.getCityTemperature(widgetParams[0].value).then(temp => {
					return (<TemperatureWidget city={widgetParams[0].value} temperature={temp} />)
				})
				break;
			case "weather":
				WeatherAPI.getCityWeather(widgetParams[0].value).then(condition => {
					return (<WeatherWidget city={widgetParams[0].value} illustrationUrl={condition.icon.slice(2)} condition={condition.text} />)
				})
				break;
			case "humidity":
				WeatherAPI.getCityHumidity(widgetParams[0].value).then(rate => {
					return (<HumidityWidget city={widgetParams[0].value} humidity={rate} />)
				})
				break;
			default:
				return (<ErrorWidget serviceName="Weather" widgetName={widgetName} widgetParams={widgetParams}/>)
		}
		return widget
	}
	)}, [])
	return widget;
}

export default WeatherWidgetFactory;
export { WeatherWidgetData }