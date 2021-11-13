import * as React from 'react';
import type { ReactChild, ReactFragment, ReactPortal } from 'react';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';

const KayoCard = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
	return <Card style={{ borderRadius: 8 }} variant="outlined" sx={{marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center', boxShadow: 20}}>
	{props.children}
	</Card>
}

const KayoCardContent = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
	return <CardContent sx={{marginTop: 4, marginBottom: 4}}>{props.children}</CardContent>
}

const KayoCardTitle = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
	return <h1 style={{fontWeight: 700, font: "Inter", color: "#979797", flex: 4}}>
		{props.children}
	</h1>
}

export default KayoCard;
export {KayoCardTitle, KayoCardContent};