import React, { useEffect, useState } from 'react';
import ErrorWidget from '../../Views/Components/Widgets/ErrorWidget';
import type { ServiceWidgetFactoryProps } from '../WidgetFactory';
import StockMarketAPI from '../API/StockMarketAPI';
import { StockMarketWidget } from '../../Views/Components/Widgets/Stocks/StockMarketWidget';
import type { WidgetInterface } from 'src/Models/Widget';

const StockMarketWidgetFactory = ({ widgetName, widgetParams }: ServiceWidgetFactoryProps) => {
	const [widget, setWidget] = React.useState(<></>);

	useEffect(() => {
		setWidget((widget) => {
			if (widgetParams.length != 1 || widgetName !== 'stock_market')
				return <ErrorWidget widgetName={widgetName} serviceName="Stocks" widgetParams={widgetParams}/>
			const symbol = widgetParams[0].value
			StockMarketAPI.getSummary(symbol).then(summary => {
				const quotes = summary['Time Series (5min)']
				const keys = quotes.keys()
				const total = quotes[keys[0]]['2. high']
				const open = quotes[keys.slice(-1)]['2. high']

				return (<StockMarketWidget shortName={widgetParams[0].value} total={total} variation={(total - open) / open}/>)
			})
			return widget;
	})}, [])
	return widget;
}

export default StockMarketWidgetFactory;