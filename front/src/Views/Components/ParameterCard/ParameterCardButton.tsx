import * as React from 'react';
import IconButton from '@mui/material/IconButton';

const ParameterCardButton = (props: any) => {
	return <IconButton color="primary" aria-label="upload picture" onClick={props.onClick} href={props.href}>
		{props.children}
	</IconButton>
}

export default ParameterCardButton;