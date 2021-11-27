import * as React from 'react';
import type { WidgetParam } from 'src/Views/Components/Widget';
import ErrorWidget from '../Views/Components/Widgets/ErrorWidget';
import SpotifyWidgetFactory from './WidgetFactories/SpotifyWidgetFactory';
import StockMarketWidgetFactory from './WidgetFactories/StockMarketWidgetFactory';
import WeatherWidgetFactory from './WidgetFactories/WeatherWidgetFactory';

interface WidgetFactoryProps {
	widgetName: string, widgetParams: WidgetParam[];
}

const WidgetFactory = (serviceName: string, widgetName: string, widgetParams: WidgetParam[]) => {
	switch (serviceName) {
		case 'spotify':
			return <SpotifyWidgetFactory widgetName={widgetName} widgetParams={widgetParams}/>
		case 'stocks':
			return <StockMarketWidgetFactory widgetName={widgetName} widgetParams={widgetParams}/>
			break;
		case 'weather':
			return <WeatherWidgetFactory widgetName={widgetName} widgetParams={widgetParams}/>
		case 'covid':

			break;
		default:
			return <ErrorWidget serviceName={serviceName} widgetName={widgetName} widgetParams={widgetParams}/>
	}
}

export default WidgetFactory
export { WidgetFactoryProps }