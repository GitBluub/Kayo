import * as React from 'react';
import SecondaryPage from '../Components/SecondaryPage';
import Grid from '@mui/material/Grid/Grid';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';

const AddWidgets = () => {
	return (
	<SecondaryPage>
		<Grid container alignItems="center" justifyContent="center" direction="column">
			<ParameterCardTitle>Add new Widgets</ParameterCardTitle>
			
		</Grid>
	</SecondaryPage>
	)
}
export default AddWidgets;