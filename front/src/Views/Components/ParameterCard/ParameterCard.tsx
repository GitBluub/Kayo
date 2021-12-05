import * as React from 'react';
import Card from '@mui/material/Card/Card';
import Grid from '@mui/material/Grid/Grid';
import type KayoComponentProps from '../KayoComponent';

interface ParameterCardProps extends KayoComponentProps {
	name: string;
}
/**
 * Card for parameters
 * @param props 
 * @returns 
 */
const ParameterCard = (props: ParameterCardProps) => {
	return <Card style={{ borderRadius: 20, width: "80%", marginBottom: 3, backgroundColor: "#F0F0F0", border: "none", boxShadow: "none"}}>
		<Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{marginLeft: 5, paddingRight: 8}}>
			<h1 style={{  fontWeight: "normal"}}>{props.name.toUpperCase().replaceAll('-', ' ').replaceAll('_', ' ')}</h1>
			<Grid item>
			{props.children}
			</Grid>
		</Grid>
	</Card>
}

export default ParameterCard;