import * as React from 'react';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import Grid from '@mui/material/Grid/Grid';
import ParameterCard from '../Components/ParameterCard/ParameterCard';
import ParameterCardGroup from '../Components/ParameterCard/ParameterCardGroup';
import ParameterCardButton from '../Components/ParameterCard/ParameterCardButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ServiceCard from '../Components/ServiceCard';
import { useState, useEffect } from 'react';
import API from '../Controllers/API';

const Services = () => {
	var [ connectedServices, setConnectedServices] = useState([] as any[])
	var [ otherServices, setOtherServices ] = useState([] as any[])

	useEffect(() => {
		API.getSubscribedServices().then((names: string[]) => {
			var jsxArray = names.map((name: string) => (<ServiceCard serviceName={name.toUpperCase()} actionType="delete" action={() => {}}/>))
			setConnectedServices(jsxArray)
		})
		API.getOtherServices().then((names: string[]) => {
			var jsxArray = names.map((name: string) => (<ServiceCard serviceName={name.toUpperCase()} actionType="add" action={() => {}}/>))
			setOtherServices(jsxArray)
		})
	}, [])
	return <Grid container alignItems="center" justifyContent="center" direction="column">
			<ParameterCardTitle>Available Services</ParameterCardTitle>
			<ParameterCardGroup title="Connected Services">
				{ connectedServices }
			</ParameterCardGroup>
			<ParameterCardGroup title="Other Services">
				{ otherServices }
			</ParameterCardGroup>
		</Grid>
}

export default Services;