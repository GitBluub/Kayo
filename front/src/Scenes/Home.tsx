import { Link, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import ParameterCardTitle from "../Components/ParameterCard/ParameterCardTitle";
import Grid from "@mui/material/Grid/Grid";
import Widget from "../Components/Widget";
import Login from "./Login";
import AvailableServices from "../Components/Service";
import { StockMarketWidget } from "../Components/Widgets/Stocks/StockMarketWidget";

const Home = () => {
	return <Grid container alignItems="center" justifyContent="center" direction="column">
		<Link to="/login">Login</Link>
		<Link to="/signup">Sign up</Link>
		<Link to="/services">Services</Link>
		<Link to="/widgets/manage">Manage widgets</Link>
		<ParameterCardTitle>KAYO</ParameterCardTitle>
		<Grid container alignItems="center" justifyContent="center" direction="column">
			<StockMarketWidget shortName="AAPL" fullName="Apple Incorporation" total={1000000000.36} variation={+0.56}/>
			<StockMarketWidget shortName="GOOG" fullName="Google Incorporation" total={2.36} variation={-3.14}/>
		</Grid>
	</Grid>
}

export default Home;
