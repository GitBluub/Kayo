import * as React from 'react';
import Title from './Components/Title';
import Grid from '@mui/material/Grid/Grid';
import ParameterCardGroup from './Components/ParameterCard/ParameterCardGroup';
import ServiceCard from './Components/ServiceCard';
import { useState, useEffect } from 'react';
import KayoAPI from '../Controllers/KayoAPI';
import AvailableServices, { Service } from '../Models/Service';
import SecondaryPage from './Components/SecondaryPage';


const Services = () => {
	const [ connectedServices, setConnectedServices ] = useState<string[]>([])
	const [ otherServices, setOtherServices ] = useState<string[]>([])

	useEffect(() => {
		KayoAPI.getSubscribedServices().then((names: string[]) => { setConnectedServices(names) })
		KayoAPI.getOtherServices().then((names: string[]) => { setOtherServices(names) })
	}, [])
	return <SecondaryPage>
		<Grid container alignItems="center" justifyContent="center" direction="column">
			<Title>Available Services</Title>
			<ParameterCardGroup title="Connected Services">
				{ connectedServices.map((name: string) => <ServiceCard key={name} href='#' serviceName={name.toUpperCase()} actionType="delete" action={() => {
					KayoAPI.unsubscribe(name)
					setConnectedServices((connectedState) => connectedState.filter((iname: string, _, __) => iname !== name))
					setOtherServices((connectedState) => {
						connectedState.push(name);
						return connectedState
					})
				}}/>) }
			</ParameterCardGroup>
			<ParameterCardGroup title="Other Services">
				{ otherServices.map((name: string) => <ServiceCard key={name} serviceName={name.toUpperCase()} actionType="add" 
				href={ AvailableServices[name].urlToSubscribe } action={() => {
					setOtherServices((state) => state.filter((iname: string, _, __) => iname !== name))
					setConnectedServices((state) => {
						state.push(name);
						return state
					})

				}}/>) }
			</ParameterCardGroup>
		</Grid>
	</SecondaryPage>
}

export default Services;