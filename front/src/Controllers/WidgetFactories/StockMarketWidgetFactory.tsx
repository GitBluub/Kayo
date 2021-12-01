import React, { useEffect, useState } from 'react';
import ErrorWidget from '../../Views/Components/Widgets/ErrorWidget';
import type { ServiceWidgetFactoryProps } from '../WidgetFactory';
import StockMarketAPI from '../API/StockMarketAPI';
import { StockMarketWidget } from '../../Views/Components/Widgets/Stocks/StockMarketWidget';
import type { WidgetInterface } from 'src/Models/Widget';

interface StockMarketWidgetData {
	symbol: string,
	total: number,
	open: number,
}

const StockMarketWidgetFactory = ({ widgetName, widgetData, widgetParams }: ServiceWidgetFactoryProps) => {
	const data = widgetData as StockMarketWidgetData
	if (widgetParams.length != 1 || widgetName !== 'stock_market')
		return <ErrorWidget widgetName={widgetName} serviceName="Stocks" widgetParams={widgetParams}/>
	return (<StockMarketWidget shortName={widgetParams[0].value} total={data.total} variation={(data.total - data.open) / data.open}/>)
}

export default StockMarketWidgetFactory;
export { StockMarketWidgetData }