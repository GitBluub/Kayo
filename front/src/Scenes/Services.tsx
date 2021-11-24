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
		API.getSubscribedServices().then((names: string[]) => { setConnectedServices(names) })
		API.getOtherServices().then((names: string[]) => { setOtherServices(names) })
	}, [])
	return <Grid container alignItems="center" justifyContent="center" direction="column">
			<ParameterCardTitle>Available Services</ParameterCardTitle>
			<ParameterCardGroup title="Connected Services">
				{ connectedServices.map((name: string) => <ServiceCard key={name} serviceName={name.toUpperCase()} actionType="delete" action={() => {
					API.unsubscribe(name)
					setConnectedServices((connectedState) => connectedState.filter((iname: string, _, __) => iname !== name))
					setOtherServices((connectedState) => {
						connectedState.push(name);
						return connectedState
					})
				}}/>) }
			</ParameterCardGroup>
			<ParameterCardGroup title="Other Services">
				{ otherServices.map((name: string) => <ServiceCard key={name} serviceName={name.toUpperCase()} actionType="add" action={() => {}}/>) }
			</ParameterCardGroup>
		</Grid>
}

export default Services;