import * as React from 'react';
import type { ReactChild, ReactFragment, ReactPortal } from 'react';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import { borderRadius } from '@mui/system';

const KayoCard = (props: any) => {
	let borderRadius = 8;
	let bcolor = "";
	let tcolor = "";
	if (typeof props.borderRadius != 'undefined')
		borderRadius= props.borderRadius
	if (typeof props.backgroundColor != 'undefined')
		bcolor= props.backgroundColor
	if (typeof props.fontColor != 'undefined')
		tcolor= props.fontColor
	return <Card style={{ borderRadius: borderRadius, backgroundColor: bcolor , color: tcolor}} variant="outlined" sx={{display: 'flex',flexDirection: 'column',alignItems: 'center', boxShadow: 20}}>
	{props.children}
	</Card>
}

const KayoCardContent = (props: any) => {
	return <CardContent>{props.children}</CardContent>
}

const KayoCardTitle = (props: any) => {
	return <h1 style={{fontWeight: 700, font: "Inter", color: "#979797", flex: 3}}>
		{props.children}
	</h1>
}

export default KayoCard;
export {KayoCardTitle, KayoCardContent};