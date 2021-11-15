import Grid from '@mui/material/Grid/Grid';
import Card from '@mui/material/Card/Card';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';


const KayoCardGroup = (props: any) => {
	return <Grid container  justifyContent="center" alignItems="center" style={{ width: "100%" }} direction="column">	
		<Grid container justifyContent="flex-start" alignItems="left" style={{ width: "80%" }} direction="column">	
			<h3 style={{ marginBottom: 2, color: "#979797"}}>{props.title}</h3>
		</Grid>
		{props.children}
	</Grid>
}

const KayoCardButton = (props: any) => {
	return <IconButton color="primary" aria-label="upload picture" component="span">
		{props.children}
	</IconButton>
}

const KayoCard  = (props: any) => {
	return <Card style={{ borderRadius: 20, width: "80%", marginBottom: 3, backgroundColor: "#F0F0F0", border: "none", boxShadow: "none"}}>
		<Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{marginLeft: 5, paddingRight: 8}}>
			<h1 style={{  fontWeight: "normal"}}>{props.name}</h1>
			<Grid item>
			{props.children}
			</Grid>
		</Grid>
	</Card>
}

export default KayoCard;
export { KayoCard, KayoCardGroup, KayoCardButton };