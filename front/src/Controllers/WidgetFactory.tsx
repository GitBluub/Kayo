import React, { useEffect, useState } from 'react';
import type { WidgetParam } from '../Models/Widget';
import ErrorWidget from '../Views/Components/Widgets/ErrorWidget';
import KayoAPI from './KayoAPI';
import type { GithubWidgetData } from './WidgetFactories/GithubWidgetFactory';
import GithubWidgetFactory from './WidgetFactories/GithubWidgetFactory';
import SpotifyWidgetFactory, { SpotifyWidgetData } from './WidgetFactories/SpotifyWidgetFactory';
import StockMarketWidgetFactory, { StockMarketWidgetData } from './WidgetFactories/StockMarketWidgetFactory';
import WeatherWidgetFactory, { WeatherWidgetData } from './WidgetFactories/WeatherWidgetFactory';

interface WidgetFactoryProps {
	serviceName: string, widgetName: string, widgetid?: number, widgetParams: WidgetParam[];
}

interface ServiceWidgetFactoryProps {
	widgetName: string,
	widgetParams: WidgetParam[],
	widgetData: StockMarketWidgetData | SpotifyWidgetData | WeatherWidgetData | GithubWidgetData | null;
}

const WidgetFactory = ({ serviceName, widgetName, widgetid, widgetParams}: WidgetFactoryProps) => {

	const [widgetData, setWidgetData] = useState(null)

	useEffect(() => {
		KayoAPI.getWidgetData(widgetid as number).then(res => setWidgetData(res))
	}, [])
	if (widgetData === null)
		return <></>
	else {
		switch (serviceName) {
			case 'github':
				return <GithubWidgetFactory widgetName={widgetName} widgetParams={widgetParams} widgetData={widgetData}/>
			case 'spotify':
				return <SpotifyWidgetFactory widgetName={widgetName} widgetParams={widgetParams} widgetData={widgetData}/>
			case 'stocks':
				return <StockMarketWidgetFactory widgetName={widgetName} widgetParams={widgetParams} widgetData={widgetData}/>
			case 'weather':
				return <WeatherWidgetFactory widgetName={widgetName} widgetParams={widgetParams} widgetData={widgetData}/>
		}
		return <ErrorWidget serviceName={serviceName} widgetName={widgetName} widgetParams={widgetParams} widgetid={widgetid}/>
	}
}	

export default WidgetFactory
export { ServiceWidgetFactoryProps, WidgetFactoryProps }