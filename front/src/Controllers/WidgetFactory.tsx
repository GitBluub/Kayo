import React, { useEffect, useState } from 'react';
import type { WidgetParam } from '../Models/Widget';
import ErrorWidget from '../Views/Components/Widgets/ErrorWidget';
import KayoAPI from './API/KayoAPI';
import SpotifyWidgetFactory, { SpotifyWidgetData } from './WidgetFactories/SpotifyWidgetFactory';
import StockMarketWidgetFactory, { StockMarketWidgetData } from './WidgetFactories/StockMarketWidgetFactory';
import WeatherWidgetFactory, { WeatherWidgetData } from './WidgetFactories/WeatherWidgetFactory';

interface WidgetFactoryProps {
	serviceName: string, widgetName: string, widgetid: number, widgetParams: WidgetParam[];
}

interface ServiceWidgetFactoryProps {
	widgetName: string,
	widgetParams: WidgetParam[],
	widgetData: StockMarketWidgetData | SpotifyWidgetData | WeatherWidgetData;
}

const WidgetFactory = ({ serviceName, widgetName, widgetid, widgetParams}: WidgetFactoryProps) => {

	const [widgetData, setWidgetData] = useState<StockMarketWidgetData | SpotifyWidgetData | WeatherWidgetData>({})

	useEffect(() => {
		KayoAPI.getWidgetData(widgetid).then(res => setWidgetData(res))
	}, [])
	if (widgetData == {})
		return <></>
	switch (serviceName) {
		case 'spotify':
			return <SpotifyWidgetFactory widgetName={widgetName} widgetParams={widgetParams} widgetData={widgetData}/>
		case 'stocks':
			return <StockMarketWidgetFactory widgetName={widgetName} widgetParams={widgetParams} widgetData={widgetData}/>
		case 'weather':
			return <WeatherWidgetFactory widgetName={widgetName} widgetParams={widgetParams} widgetData={widgetData}/>
	}
	return <ErrorWidget serviceName={serviceName} widgetName={widgetName} widgetParams={widgetParams} widgetid={widgetid}/>
}

export default WidgetFactory
export { ServiceWidgetFactoryProps, WidgetFactoryProps }