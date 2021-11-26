import * as React from 'react';
import Alert from '@mui/material/Alert/Alert';
import AlertTitle from '@mui/material/AlertTitle/AlertTitle';
import type { WidgetParam } from 'src/Components/Widget';
import ErrorWidget from 'src/Components/Widgets/ErrorWidget';

const WidgetFactory = (serviceName: string, widgetName: string, widgetParams: WidgetParam[]) => {
	switch (serviceName) {
		case 'spotify':
			
			break;
		case 'stocks':
		
			break;
		case 'weather':
	
			break;
		case 'covid':

			break;
		default:
			return <ErrorWidget serviceName={serviceName} widgetName={widgetName} widgetParams={widgetParams}
	}
}