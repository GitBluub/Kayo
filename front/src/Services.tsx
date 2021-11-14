import * as React from 'react';
import CardTitle from './Components/Title';
import Grid from '@mui/material/Grid/Grid';
import { ServiceCard } from './Components/Service';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';

const Services = () => {
	return <Grid container alignItems="center" justifyContent="center" direction="column">
			<CardTitle>Available Services</CardTitle>
			<ServiceCard name="Spotify">
				<IconButton color="primary" aria-label="upload picture" component="span">
					<DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/>
				</IconButton>
			</ServiceCard>
		</Grid>
}

export default Services;