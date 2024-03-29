import * as React from 'react';
import ParameterCard from './ParameterCard/ParameterCard';
import ParameterCardGroup from './ParameterCard/ParameterCardGroup';
import ParameterCardButton from './ParameterCard/ParameterCardButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

/**
 * Props for Service Card
 */
interface ServiceCardInterface {
	// Name of the service
	serviceName: string,
	// Action of the card's button
	actionType: "add" | "delete" | "none",
	// Callback on button press
	action: () => void,
	// Link to redirect to
	href: string,
}

/**
 * Component for Service card
 * @param props 
 * @returns 
 */
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