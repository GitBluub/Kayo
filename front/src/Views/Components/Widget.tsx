import React, { useState } from 'react';
import Card from "@mui/material/Card/Card";
import Grid from '@mui/material/Grid/Grid';
import ParameterCardGroup from './ParameterCard/ParameterCardGroup';
import WidgetFactory from '../../Controllers/WidgetFactory';
import type { WidgetInterface } from '../../Models/Widget';


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

interface WidgetGroupInterface {
	serviceName: string,
	widgets: WidgetInterface[];
	setWidgetGroupState?: (value : (group: WidgetGroupInterface[]) => WidgetGroupInterface[]) => void;
}

const WidgetGroup = ({ serviceName, widgets }: WidgetGroupInterface) => {
	if (widgets.length == 0)
		return <></>
	return (<ParameterCardGroup key={serviceName} title={serviceName.toUpperCase()}>
		{
			widgets.map((widget: WidgetInterface) => <WidgetFactory key={widget.id} widgetid={widget.id} widgetName={widget.name} serviceName={ serviceName } widgetParams={ widget.params } />)
		}
	</ParameterCardGroup>)
}
export default Widget;
export { WidgetGroup, WidgetGroupInterface }