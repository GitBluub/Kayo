import * as React from 'react';
import { Navigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import SpotifyAPI from './API/SpotifyAPI';
import KayoAPI from './KayoAPI';

interface spotifyRes {
	access_token: string,
	token_type: string,
	scope: string,
	expires_in: number,
	refresh_token: string
}

const SpotifySubscribe = (searchParams: any) => {
	const [ res, setRes ] = React.useState<spotifyRes | null>(null);
	React.useEffect(() => {
		SpotifyAPI.getAccessToken(searchParams.get('code') as string).then(res => setRes(res))
	}, [])
	if (res !== null) {
		KayoAPI.subscribe("spotify", res.access_token, res.refresh_token)
		return <Navigate to="/services" />
	}
	return <></>
}

const ServiceSubscribe = () => {
	const [searchParams, setter] = useSearchParams();
	const { serviceID } = useParams();
	switch (serviceID) {
		case 'spotify':
			return SpotifySubscribe(searchParams)
		default:
			KayoAPI.subscribe(serviceID as string, "", null)
			break;
	}
	return <Navigate to="/services" />
}

export default ServiceSubscribe;