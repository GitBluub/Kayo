import * as React from 'react';
import { Navigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import API from './API';

const ServiceSubscribe = (props: any) => {
	const [searchParams, setter] = useSearchParams();
	const { serviceID } = useParams();
	switch (serviceID) {
		case 'spotify':
			API.subscribe("spotify", searchParams.get('code') as string)
			break;
		default:
			API.subscribe(serviceID as string, "")
			break;
	}
	return <Navigate to="/services" />
}

export default ServiceSubscribe;