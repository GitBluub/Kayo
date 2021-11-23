import * as React from 'react';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import Grid from '@mui/material/Grid/Grid';
import ParameterCard from '../Components/ParameterCard/ParameterCard';
import ParameterCardGroup from '../Components/ParameterCard/ParameterCardGroup';
import ParameterCardButton from '../Components/ParameterCard/ParameterCardButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ServiceCard from '../Components/ServiceCard';

const Services = () => {
	return <Grid container alignItems="center" justifyContent="center" direction="column">
			<ParameterCardTitle>Available Services</ParameterCardTitle>
			<ParameterCardGroup title="Connected Services">
				<ServiceCard serviceName="Spotify" actionType="delete" action={() => {}}/>
				<ServiceCard serviceName="Weather" actionType="none" action={() => {}}/>
			</ParameterCardGroup>
			<ParameterCardGroup title="Other Services">
				<ServiceCard serviceName="Spotify" actionType="add" action={() => {}}/>
			</ParameterCardGroup>
		</Grid>
}

export default Services;