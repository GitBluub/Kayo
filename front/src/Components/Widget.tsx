import * as React from 'react';
import Card from '@mui/material/Card/Card';
import Grid from '@mui/material/Grid/Grid';
import Service from './Components/Service.tsx';


const WidgetCard = (props: any) => {
	let borderRadius = 8;
	let bcolor = "";
	let tcolor = "";
	if (typeof props.borderRadius != 'undefined')
		borderRadius= props.borderRadius
	if (typeof props.backgroundColor != 'undefined')
		bcolor= props.backgroundColor
	if (typeof props.fontColor != 'undefined')
		tcolor= props.fontColor
	return <Card style={{ borderRadius: borderRadius, backgroundColor: bcolor , color: tcolor, width: "80%"}} sx={{marginBottom: 1, display: 'flex',flexDirection: 'column',alignItems: 'center', boxShadow: 10}}>
	{props.children}
	</Card>
}

class Widget extends React.Component {
	service: Service;
	constructor(props: any)
	{
		super(props);
		this.service = props.service;
	}

	render() {
		return (
		<WidgetCard borderRadius={30} backgroundColor={this.service.backgroundColor} fontColor={this.service.fontColor}>
			<Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{marginLeft: 8, paddingRight: 8}}>
				<h1>{this.service.name}</h1>
				{this.props.children}
			</Grid>
		</WidgetCard>);
	}
}

export default Widget;
