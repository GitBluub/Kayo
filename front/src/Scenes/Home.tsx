import { Link, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import ParameterCardTitle from "../Components/ParameterCard/ParameterCardTitle";
import Grid from "@mui/material/Grid/Grid";
import Widget from "../Components/Widget";
import Login from "./Login";
import AvailableServices from "../Components/Service";

const Home = () => (
	<Grid container alignItems="center" justifyContent="center" direction="column">
		<Link to="/login">Login</Link>
		<Link to="/signup">Sign up</Link>
		<Link to="/services">Services</Link>
		<Link to="/widgets/manage">Manage widgets</Link>
		<ParameterCardTitle>KAYO</ParameterCardTitle>
		<Grid container alignItems="center" justifyContent="center" direction="column">
			<Widget service={AvailableServices.SPOTIFY}>HEYLOOokkkkkkkkkoW</Widget>
			<Widget service={AvailableServices.STOCK_MARKET}>I'm about market</Widget>
			<Widget service={AvailableServices.COVID}>I'm about COVID</Widget>
			<Widget service={AvailableServices.WEATHER}>Blou is the best city</Widget>
		</Grid>
	</Grid>
)

export default Home;
