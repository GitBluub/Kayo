import { Route, Routes, Link } from "react-router-dom";
import * as React from 'react';
import ReactDOM from 'react-dom';
import KayoCard, { KayoCardTitle } from "./Components/Card";
import Grid from "@mui/material/Grid/Grid";
import Widget from "./Components/Widget";
import AvailableServices from "./Components/Service";



const Home = () => {
	return <Grid container alignItems="center" justifyContent="center" sx={{marginTop: 8}}>
		<KayoCard>
			<Link to="/login">Login</Link>
			<Link to="/signup">Sign up</Link>
			<KayoCardTitle>KAYO</KayoCardTitle>
			<Grid container alignItems="center" justifyContent="center" direction="column">
				<Widget service={AvailableServices.SPOTIFY}>HEYLOOokkkkkkkkkoW</Widget>
			</Grid>
		</KayoCard>
		</Grid>
}

export default Home;
