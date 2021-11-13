import * as React from 'react';
import Card from '@mui/material/Card';
import type { ReactChild, ReactFragment, ReactPortal } from 'react';

const KayoCard = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
	return <Card variant="outlined" sx={{marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center', boxShadow: 20}}>
	{props.children}
	</Card>
}

const KayoCardTitle = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
	return <h1 style={{fontWeight: 700, font: "Inter", color: "#979797"}}>
		{props.children}
	</h1>
}

export default KayoCard;
export {KayoCardTitle};