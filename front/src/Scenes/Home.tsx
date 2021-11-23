import { Link, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import ParameterCardTitle from "../Components/ParameterCard/ParameterCardTitle";
import Grid from "@mui/material/Grid/Grid";
import Widget from "../Components/Widget";
import Login from "./Login";
import AvailableServices from "../Components/Service";
import { StockMarketWidget } from "../Components/Widgets/Stocks/StockMarketWidget";
import { DailyNewInfectionWidget } from "../Components/Widgets/COVID/DailyNewInfectionWidget";
import { DailyNewHospitalizationWidget } from "../Components/Widgets/COVID/DailyNewHospitalizationWidget";
import { WeeklyNewVaccinations } from "../Components/Widgets/COVID/WeeklyNewVaccinations";
import { FavoriteArtistWidget } from "../Components/Widgets/Spotify/FavoriteArtistWidget";
import { FavoriteAlbumWidget } from "../Components/Widgets/Spotify/FavoriteAlbumWidget";
import { FavoriteTrackWidget } from "../Components/Widgets/Spotify/FavoriteTrackWidget";
import { TemperatureWidget } from "../Components/Widgets/Weather/TemperatureWidget";
import { WeatherWidget, Weather } from "../Components/Widgets/Weather/WeatherWidget";
const Home = () => (
	<Grid container alignItems="center" justifyContent="center" direction="column">
		{/* <Link to="/login">Login</Link>
		<Link to="/signup">Sign up</Link> */}
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
			<FavoriteArtistWidget illustration="https://i.scdn.co/image/ab67618600001016f6e93dd30ed67c0a07c234ad" artistName="Adele"/>
			<FavoriteAlbumWidget illustration="https://i.scdn.co/image/ab67616d0000b273c6b577e4c4a6d326354a89f7" artistName="Adele" albumName="30" playCount={129}/>
			<FavoriteTrackWidget illustration="https://i.scdn.co/image/ab67616d0000b273cb5f30b072c99d6e450c688a" artistName="Adele" playCount={129} track="Rolling in the deep"/>
			<TemperatureWidget city="Blou" country="France" temperature={30}/>
			<WeatherWidget city="Blou" country="France" weather={Weather.Mist}/>
		</Grid>
	</Grid>
)

export default Home;
