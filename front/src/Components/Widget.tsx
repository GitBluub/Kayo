import * as React from 'react';
import KayoCard, { KayoCardContent } from './Card';
import Service from './Service';

export default function Widget(props: any)  {
		let service = props.service;
		console.log(JSON.stringify(service));
		return <KayoCard borderRadius={30} backgroundColor={service.backgroundColor} fontColor={service.fontColor}>
			<h1>Hello</h1>
		</KayoCard>
}