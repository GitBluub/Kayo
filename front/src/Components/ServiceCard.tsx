import * as React from 'react';
import ParameterCard from '../Components/ParameterCard/ParameterCard';
import ParameterCardGroup from '../Components/ParameterCard/ParameterCardGroup';
import ParameterCardButton from '../Components/ParameterCard/ParameterCardButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface ServiceCardInterface {
	serviceName: string,
	actionType: "add" | "delete" | "none",
	action: () => void,
	href: string,
}

const ServiceCard = (props: ServiceCardInterface) => {

	var actionButton = <></>;

	if (props.actionType == 'delete') {
		actionButton = <DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/>
	} else if (props.actionType == 'add') {
		actionButton = <AddCircleIcon sx={{ color: "green", fontSize: 35}}/>
	}
	
	return <ParameterCard name={props.serviceName}>
	<ParameterCardButton onClick={props.action} href={props.href}>
		{actionButton}
	</ParameterCardButton>
	</ParameterCard>
}

export default ServiceCard;