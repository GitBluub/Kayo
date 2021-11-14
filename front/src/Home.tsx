import { Route, Routes, Link } from "react-router-dom";
import * as React from 'react';
import CardTitle from "./Components/Title";
import Grid from "@mui/material/Grid/Grid";
import Widget from "./Components/Widget";
import AvailableServices from "./Components/Service";

const Home = () => {
	return <Grid container alignItems="center" justifyContent="center" direction="column">
		<Link to="/login">Login</Link>
		<Link to="/signup">Sign up</Link>
		<CardTitle>KAYO</CardTitle>
		<Grid container alignItems="center" justifyContent="center" direction="column">
			<Widget service={AvailableServices.SPOTIFY}>HEYLOOokkkkkkkkkoW</Widget>
			<Widget service={AvailableServices.STOCK_MARKET}>I'm about market</Widget>
			<Widget service={AvailableServices.COVID}>I'm about COVID</Widget>
		</Grid>
	</Grid>
}

export default Home;
