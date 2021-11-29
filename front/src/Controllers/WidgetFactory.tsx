import * as React from 'react';
import type { WidgetParam } from '../Models/Widget';
import ErrorWidget from '../Views/Components/Widgets/ErrorWidget';
import SpotifyWidgetFactory from './WidgetFactories/SpotifyWidgetFactory';
import StockMarketWidgetFactory from './WidgetFactories/StockMarketWidgetFactory';
import WeatherWidgetFactory from './WidgetFactories/WeatherWidgetFactory';

interface WidgetFactoryProps {
	serviceName: string, widgetName: string, widgetParams: WidgetParam[];
}

interface ServiceWidgetFactoryProps {
	widgetName: string, widgetParams: WidgetParam[];
}

const WidgetFactory = ({ serviceName, widgetName, widgetParams}: WidgetFactoryProps) => {
	switch (serviceName) {
		case 'spotify':
			return <SpotifyWidgetFactory widgetName={widgetName} widgetParams={widgetParams}/>
		case 'stocks':
			return <StockMarketWidgetFactory widgetName={widgetName} widgetParams={widgetParams}/>
		case 'weather':
			return <WeatherWidgetFactory widgetName={widgetName} widgetParams={widgetParams}/>
	}
	return <ErrorWidget serviceName={serviceName} widgetName={widgetName} widgetParams={widgetParams}/>
}

export default WidgetFactory
export { ServiceWidgetFactoryProps, WidgetFactoryProps }