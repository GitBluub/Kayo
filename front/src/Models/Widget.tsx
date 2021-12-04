import * as React from 'react';
import Card from "@mui/material/Card/Card";
import Grid from '@mui/material/Grid/Grid';

interface WidgetParam {
	name: string;
	value: string;
}

interface WidgetInterface {
	id: number;
	name: string;
	description: string;
	index: number;
	serviceName: string;
	params: WidgetParam[];
}

export { WidgetInterface, WidgetParam }
