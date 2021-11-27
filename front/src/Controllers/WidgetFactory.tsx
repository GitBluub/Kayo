import * as React from 'react';
import type { WidgetParam } from 'src/Components/Widget';
import ErrorWidget from '../Components/Widgets/ErrorWidget';
import SpotifyWidgetFactory from './WidgetFactories/SpotifyWidgetFactory';

const WidgetFactory = (serviceName: string, widgetName: string, widgetParams: WidgetParam[]) => {
	switch (serviceName) {
		case 'spotify':
			return <SpotifyWidgetFactory widgetName={widgetName} widgetParams={widgetParams}/>
		case 'stocks':
		
			break;
		case 'weather':
	
			break;
		case 'covid':

			break;
		default:
			return <ErrorWidget serviceName={serviceName} widgetName={widgetName} widgetParams={widgetParams}/>
	}
}

export default WidgetFactory