import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../Service';

interface StockMarketWidgetInterface {
	shortName: string,
	fullName: string,
	total: number,
	variation: number
}

const StockMarketWidget = (props: StockMarketWidgetInterface) => {

	<Widget service={AvailableServices.STOCK_MARKET}>

	</Widget>
}

export { StockMarketWidget, StockMarketWidgetInterface }