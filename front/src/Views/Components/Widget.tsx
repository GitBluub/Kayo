import React, { useState } from 'react';
import Card from "@mui/material/Card/Card";
import Grid from '@mui/material/Grid/Grid';
import ParameterCardGroup from './ParameterCard/ParameterCardGroup';
import WidgetFactory from '../../Controllers/WidgetFactory';
import type { WidgetInterface } from '../../Models/Widget';
import type KayoComponentProps from './KayoComponent';
import type { Service } from 'src/Models/Service';

interface WidgetProps extends KayoComponentProps {
	service: Service
}

/**
 * Wrapper for Widget content
 * @param props 
 * @returns 
 */
const Widget = (props: WidgetProps) => {
	let service = props.service;
	return (
		<Card style={{ borderRadius: 30, backgroundColor: service.widget.backgroundColor , color: service.widget.fontColor, width: "100%"}} sx={{marginBottom: 1, display: 'flex',flexDirection: 'column',alignItems: 'center', boxShadow: 10}}>
			<Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{marginLeft: 8, paddingRight: 8}}>
				{props.children}
			</Grid>
		</Card>
	);
}

/**
 * Interface for group of widgets
 */
interface WidgetGroupInterface {
	// Name of the service the widgets are from
	serviceName: string,
	// widgets (duh..)
	widgets: WidgetInterface[];
	// Callback for action button on widget list
	onValidate?: () => void
}

/**
 * Wrapper for widgets of the same group
 * @param param0 
 * @returns 
 */
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