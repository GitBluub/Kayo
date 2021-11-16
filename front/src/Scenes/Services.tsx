import * as React from 'react';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import Grid from '@mui/material/Grid/Grid';
import ParameterCard from '../Components/ParameterCard/ParameterCard';
import ParameterCardGroup from '../Components/ParameterCard/ParameterCardGroup';
import ParameterCardButton from '../Components/ParameterCard/ParameterCardButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Services = () => {
	return <Grid container alignItems="center" justifyContent="center" direction="column">
			<ParameterCardTitle>Available Services</ParameterCardTitle>
			<ParameterCardGroup title="Connected Services">
				<ParameterCard name="Spotify">
					<ParameterCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></ParameterCardButton>
				</ParameterCard>
				<ParameterCard name="Weather"/>
			</ParameterCardGroup>
			<ParameterCardGroup title="Other Services">
				<ParameterCard name="Spotify">
				<ParameterCardButton>
					<AddCircleIcon sx={{ color: "green", fontSize: 35}}/>
				</ParameterCardButton>
				</ParameterCard>
			</ParameterCardGroup>
		</Grid>
}

export default Services;