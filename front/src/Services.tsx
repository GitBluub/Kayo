import * as React from 'react';
import CardTitle from './Components/Title';
import Grid from '@mui/material/Grid/Grid';
import { ServiceCard, ServiceCardGroup, ServiceCardButton } from './Components/Service';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Services = () => {
	return <Grid container alignItems="center" justifyContent="center" direction="column">
			<CardTitle>Available Services</CardTitle>
			<ServiceCardGroup title="Connected Services">
				<ServiceCard name="Spotify">
					<ServiceCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></ServiceCardButton>
				</ServiceCard>
				<ServiceCard name="Weather"/>
			</ServiceCardGroup>
			<ServiceCardGroup title="Other Services">
				<ServiceCard name="Spotify">
				<ServiceCardButton>
					<AddCircleIcon sx={{ color: "green", fontSize: 35}}/>
				</ServiceCardButton>
				</ServiceCard>
			</ServiceCardGroup>
		</Grid>
}

export default Services;