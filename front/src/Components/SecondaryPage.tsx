import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid/Grid';
import Button from '@mui/material/Button/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const SecondaryPage = (props: any) => (
	<>
	<Grid container alignItems="left" justifyContent="left" style={{ paddingLeft: 30, paddingTop: 30 }}>
		<Link to="/"> 
			<Button variant="contained" startIcon={<ArrowBackIosIcon />} color="primary">
  				Home
			</Button>
		</Link>
	</Grid>
	{props.children}
	</>
)

export default SecondaryPage;