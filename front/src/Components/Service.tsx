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

const ServiceCardGroup = (props: any) => {
	return <Grid container  justifyContent="center" alignItems="center" style={{ width: "100%" }} direction="column">	
		<Grid container justifyContent="flex-start" alignItems="left" style={{ width: "80%" }} direction="column">	
			<h3 style={{ marginBottom: 2, color: "#979797"}}>{props.title}</h3>
		</Grid>
		{props.children}
	</Grid>
}

const ServiceCardButton = (props: any) => {
	return <IconButton color="primary" aria-label="upload picture" component="span">
		{props.children}
	</IconButton>
}

const ServiceCard  = (props: any) => {
	return <Card style={{ borderRadius: 20, width: "80%", marginBottom: 3, backgroundColor: "#F0F0F0", border: "none", boxShadow: "none"}}>
		<Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{marginLeft: 5, paddingRight: 8}}>
			<h1 style={{  fontWeight: "normal"}}>{props.name}</h1>
			<Grid item>
			{props.children}
			</Grid>
		</Grid>
	</Card>
}

export default AvailableServices;
export { AvailableServices, Service, ServiceCard, ServiceCardGroup, ServiceCardButton };