import * as React from 'react';
import ErrorWidget from '../../Views/Components/Widgets/ErrorWidget';
import type { ServiceWidgetFactoryProps } from '../WidgetFactory';
import StockMarketAPI from '../API/StockMarketAPI';
import { StockMarketWidget } from '../../Views/Components/Widgets/Stocks/StockMarketWidget';
import type { WidgetInterface } from 'src/Models/Widget';

const StockMarketWidgetFactory = ({ name, params }: WidgetInterface) => {
	const [widget, setWidget] = React.useState(<></>);

	if (params.length != 1 || name !== 'stock_market')
		return <ErrorWidget widgetName={name} serviceName="Stocks" widgetParams={params}/>
	const symbol = params[0].value
	StockMarketAPI.getSummary(symbol).then(summary => {
		const quotes = summary['Time Series (5min)']
		const keys = quotes.keys()
		const total = quotes[keys[0]]['2. high']
		const open = quotes[keys.slice(-1)]['2. high']
		
		setWidget(<StockMarketWidget shortName={params[0].value} total={total} variation={(total - open) / open}/>)
	})
	return widget;
}

export default StockMarketWidgetFactory;