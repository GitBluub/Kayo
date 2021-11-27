import * as React from 'react';
import Card from "@mui/material/Card/Card";
import Grid from '@mui/material/Grid/Grid';

interface WidgetParam {
	name: string;
	value: string;
}

const WidgetParameterCard = (props: any) => {
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


const Widget = (props: any) => {
	let service = props.service;
	return (
		<WidgetParameterCard borderRadius={30} backgroundColor={service.widget.backgroundColor} fontColor={service.widget.fontColor}>
			<Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{marginLeft: 8, paddingRight: 8}}>
				{props.children}
			</Grid>
		</WidgetParameterCard>
	);
}

export default Widget;
export { WidgetParam }
