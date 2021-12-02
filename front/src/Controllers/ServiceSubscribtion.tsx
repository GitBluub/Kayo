import * as React from 'react';
import { Navigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import SpotifyAPI from './API/SpotifyAPI';
import KayoAPI from './KayoAPI';

const SpotifySubscribe = (searchParams: any) => {
	const [ accessToken, setAccessToken ] = React.useState(null);

	React.useEffect(() => {
		SpotifyAPI.getAccessToken(searchParams.get('code') as string).then(res => setAccessToken(res.access_token))
	}, [])
	if (accessToken !== null) {
		KayoAPI.subscribe("spotify", accessToken)
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
			KayoAPI.subscribe(serviceID as string, "")
			break;
	}
	return <Navigate to="/services" />
}

export default ServiceSubscribe;