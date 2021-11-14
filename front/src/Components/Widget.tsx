import * as React from 'react';
import KayoCard from './Card';
import Service from './Service';
import Grid from '@mui/material/Grid/Grid';

export default function Widget(props: any)  {
		let service = props.service;
		return <KayoCard borderRadius={30} backgroundColor={service.backgroundColor} fontColor={service.fontColor}>
			<Grid container direction="row" justifyContent="space-between" alignItems="flex-start" sx={{marginLeft: 8, paddingRight: 8}}>
				<h1>{service.name}</h1>
				<h1>{props.children}</h1>
			</Grid>
		</KayoCard>
}