import * as React from 'react';
import CardTitle from './Components/Title';
import Grid from '@mui/material/Grid/Grid';
import { KayoCard, KayoCardGroup, KayoCardButton } from './Components/Card';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Services = () => {
	return <Grid container alignItems="center" justifyContent="center" direction="column">
			<CardTitle>Available Services</CardTitle>
			<KayoCardGroup title="Connected Services">
				<KayoCard name="Spotify">
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
				<KayoCard name="Weather"/>
			</KayoCardGroup>
			<KayoCardGroup title="Other Services">
				<KayoCard name="Spotify">
				<KayoCardButton>
					<AddCircleIcon sx={{ color: "green", fontSize: 35}}/>
				</KayoCardButton>
				</KayoCard>
			</KayoCardGroup>
		</Grid>
}

export default Services;