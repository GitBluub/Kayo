import * as React from 'react';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import Grid from '@mui/material/Grid/Grid';
import ParameterCard from '../Components/ParameterCard/ParameterCard';
import ParameterCardGroup from '../Components/ParameterCard/ParameterCardGroup';
import ServiceCard from '../Components/ServiceCard';
import { useState, useEffect } from 'react';
import API from '../Controllers/API';
import { SpotifyAuth, SpotifyAuthListener, Scopes } from 'react-spotify-auth'
import { Navigate, useParams } from 'react-router';

const ServiceSubscribe = () => {
	const { handle } = useParams();
	console.log(handle);
	return <></>
}

const Services = () => {
	var [ connectedServices, setConnectedServices] = useState([] as any[])
	var [ otherServices, setOtherServices ] = useState([] as any[])

	useEffect(() => {
		API.getSubscribedServices().then((names: string[]) => { setConnectedServices(names) })
		API.getOtherServices().then((names: string[]) => { setOtherServices(names) })
	}, [])
	return <Grid container alignItems="center" justifyContent="center" direction="column">
			<ParameterCardTitle>Available Services</ParameterCardTitle>
			<SpotifyAuthListener />
			<SpotifyAuth
        	redirectUri='http://localhost:3435/services/spotify/'
        	clientID="1f12a2f8a7a94a7c8b15d90a242cf9a6"
        	scopes={[]} // either style will work
        	onAccessToken={(token: any) => window.close()}
			noLogo={true}
			/>
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
				{ otherServices.map((name: string) => <ServiceCard key={name} serviceName={name.toUpperCase()} actionType="add" action={() => {
					API.subscribe(name, "")
					setOtherServices((state) => state.filter((iname: string, _, __) => iname !== name))
					setConnectedServices((state) => {
						state.push(name);
						return state
					})
				}}/>) }
			</ParameterCardGroup>
		</Grid>
}

export default Services;
export { ServiceSubscribe };