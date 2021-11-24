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
import { SpotifyAuth, SpotifyAuthListener, Scopes } from 'react-spotify-auth'
import OauthPopup from 'react-oauth-popup'

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
        	redirectUri='http://localhost:3435/services/'
        	clientID="1f12a2f8a7a94a7c8b15d90a242cf9a6"
        	scopes={[]} // either style will work
        	onAccessToken={(token: any) => window.close()}
			noLogo={true}
			/>
			<OauthPopup
    		  url="https://accounts.spotify.com/en/authorize?response_type=token&client_id=1f12a2f8a7a94a7c8b15d90a242cf9a6&scope=&redirect_uri=http:%2F%2Flocalhost:3435%2Fservices%2F&show_dialog=false"
    		  onCode={(token: any) => window.close()}
    		  onClose={() => null}
    		>
      <div>Click me to open a Popup</div>
    </OauthPopup>
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