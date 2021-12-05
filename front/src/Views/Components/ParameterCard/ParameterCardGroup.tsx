import Grid from '@mui/material/Grid/Grid';
import * as React from 'react';
import type KayoComponentProps from '../KayoComponent';

interface ParameterCardGroupProps extends KayoComponentProps {
	title: string
}

/**
 * Group of parameter cards
 * @param props 
 * @returns 
 */
const ParameterCardGroup = (props: ParameterCardGroupProps) => {
	return <Grid container justifyContent="center" alignItems="center" style={{ width: "100%" }} direction="column">	
		<Grid container justifyContent="flex-start" alignItems="left" style={{ width: "80%" }} direction="column">	
			<h3 style={{ marginBottom: 2, color: "#979797"}}>{props.title}</h3>
		</Grid>
		{props.children}
	</Grid>
}

export default ParameterCardGroup;