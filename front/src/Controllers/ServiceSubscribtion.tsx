import * as React from 'react';
import { Navigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import KayoAPI from './KayoAPI';

const ServiceSubscribe = () => {
	const [searchParams, setter] = useSearchParams();
	const { serviceID } = useParams();
	switch (serviceID) {
		case 'spotify':
			KayoAPI.subscribe("spotify", searchParams.get('code') as string)
			break;
		default:
			KayoAPI.subscribe(serviceID as string, "")
			break;
	}
	return <Navigate to="/services" />
}

export default ServiceSubscribe;