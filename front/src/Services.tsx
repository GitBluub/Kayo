import * as React from 'react';
import CardTitle from './Components/Title';
import Grid from '@mui/material/Grid/Grid';
import { ServiceCard, ServiceCardGroup } from './Components/Service';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Services = () => {
	return <Grid container alignItems="center" justifyContent="center" direction="column">
			<CardTitle>Available Services</CardTitle>
			<ServiceCardGroup title="Connected Services">
				<ServiceCard name="Spotify">
					<IconButton color="primary" aria-label="upload picture" component="span">
						<DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/>
					</IconButton>
				</ServiceCard>
				<ServiceCard name="Weather"/>
			</ServiceCardGroup>
			<ServiceCardGroup title="Other Services">
				<ServiceCard name="Spotify">
					<IconButton color="primary" aria-label="upload picture" component="span">
						<AddCircleIcon sx={{ color: "green", fontSize: 35}}/>
					</IconButton>
				</ServiceCard>
			</ServiceCardGroup>
		</Grid>
}

export default Services;