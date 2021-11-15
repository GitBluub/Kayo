import Grid from '@mui/material/Grid/Grid';
import Card from '@mui/material/Card/Card';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';


class Service {
	backgroundColor: string;
	fontColor: string;
	name: string;

	constructor(backgroundColor: string, fontColor: string, name: string) {
		this.backgroundColor = backgroundColor;
		this.fontColor = fontColor;
		this.name = name;
	}
}
const AvailableServices = {
	SPOTIFY: new Service("#69C66D", "#FFFFFF", "Spotify"),
	COVID: new Service("#ABABAB", "#FFFFFF", "Covid"),
	STOCK_MARKET: new Service("#263238", "#FFFFFF", "Stock Market"),
	WEATHER: new Service("#44A8AE", "#FFFFFF", "Weather"),
}


export default AvailableServices;