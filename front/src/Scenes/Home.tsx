import { Link, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import ParameterCardTitle from "../Components/ParameterCard/ParameterCardTitle";
import Grid from "@mui/material/Grid/Grid";
import { StockMarketWidget } from "../Components/Widgets/Stocks/StockMarketWidget";
import { DailyNewInfectionWidget } from "../Components/Widgets/COVID/DailyNewInfectionWidget";
import { DailyNewHospitalizationWidget } from "../Components/Widgets/COVID/DailyNewHospitalizationWidget";
import { WeeklyNewVaccinations } from "../Components/Widgets/COVID/WeeklyNewVaccinations";
import { SpotifyWidget, BestType } from "../Components/Widgets/Spotify/SpotifyWidget";

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
			<DailyNewInfectionWidget rate={-0.56} country="France"/>
			<DailyNewInfectionWidget rate={49.6} country="USA"/>
			<DailyNewHospitalizationWidget rate={-0.56} country="France"/>
			<DailyNewHospitalizationWidget rate={49.6} country="USA"/>
			<WeeklyNewVaccinations rate={0.56} country="France"/>
			<WeeklyNewVaccinations rate={49.6} country="USA"/>
			<SpotifyWidget illustration="https://i.scdn.co/image/ab67616d0000b273c6b577e4c4a6d326354a89f7" type={BestType.ARTIST} title="Adele"/>
			<SpotifyWidget illustration="https://i.scdn.co/image/ab67616d0000b273c6b577e4c4a6d326354a89f7" type={BestType.ALBUM} title="Adele"/>
		</Grid>
	</Grid>
}

export default Home;
