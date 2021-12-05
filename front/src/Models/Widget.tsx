import * as React from 'react';
import Card from "@mui/material/Card/Card";
import Grid from '@mui/material/Grid/Grid';

/**
 * Widget parameter
 */
interface WidgetParam {
	name: string;
	value: string;
	type?: string;
}

/**
 * Widget class
 */
interface WidgetInterface {
	id: number;
	name: string;
	description: string;
	index: number;
	serviceName: string;
	params: WidgetParam[];
}

export { WidgetInterface, WidgetParam }
