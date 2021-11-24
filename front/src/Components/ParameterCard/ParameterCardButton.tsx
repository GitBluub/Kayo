import * as React from 'react';
import IconButton from '@mui/material/IconButton';

const ParameterCardButton = (props: any) => {
	return <IconButton color="primary" aria-label="upload picture" component="span" onClick={props.onClick}>
		{props.children}
	</IconButton>
}

export default ParameterCardButton;