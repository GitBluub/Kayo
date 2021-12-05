import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import type KayoComponentProps from '../KayoComponent';

interface ParameterCardButtonProps extends KayoComponentProps {
	onClick: () => void,
	href?: string
}

/**
 * Button on parameter card
 * @param props 
 * @returns 
 */
const ParameterCardButton = (props: ParameterCardButtonProps) => {
	if (props.href)
		return <IconButton color="primary" aria-label="upload picture" onClick={props.onClick} href={props.href}>
			{props.children}
		</IconButton>
	return <IconButton color="primary" aria-label="upload picture" onClick={props.onClick}>
		{props.children}
	</IconButton>
}

export default ParameterCardButton;