import Grid from '@mui/material/Grid/Grid';
import * as React from 'react';


const ParameterCardGroup = (props: any) => {
	return <Grid container  justifyContent="center" alignItems="center" style={{ width: "100%" }} direction="column">	
		<Grid container justifyContent="flex-start" alignItems="left" style={{ width: "80%" }} direction="column">	
			<h3 style={{ marginBottom: 2, color: "#979797"}}>{props.title}</h3>
		</Grid>
		{props.children}
	</Grid>
}

export default ParameterCardGroup;