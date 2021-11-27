import { Link, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import Title from "./Components/Title";
import Grid from "@mui/material/Grid/Grid";
import Widget from "./Components/Widget";
import Login from "./Authentication/Login";
import AvailableServices from "./Components/Service";
import { StockMarketWidget } from "./Components/Widgets/Stocks/StockMarketWidget";
import { DailyNewInfectionWidget } from "./Components/Widgets/COVID/DailyNewInfectionWidget";
import { DailyNewHospitalizationWidget } from "./Components/Widgets/COVID/DailyNewHospitalizationWidget";
import { WeeklyNewVaccinations } from "./Components/Widgets/COVID/WeeklyNewVaccinations";
import { FavoriteArtistWidget } from "./Components/Widgets/Spotify/FavoriteArtistWidget";
import { FavoriteTrackWidget } from "./Components/Widgets/Spotify/FavoriteTrackWidget";
import { TemperatureWidget } from "./Components/Widgets/Weather/TemperatureWidget";
import { WeatherWidget } from "./Components/Widgets/Weather/WeatherWidget";
import MainPageMenu from "./Components/MainPageMenu";
const Home = () => (
	<Grid container alignItems="center" justifyContent="center" direction="column">
		<MainPageMenu/>
		<Title>KAYO</Title>
		<Grid container alignItems="center" justifyContent="center" direction="column" style={{ paddingTop: 30}}>
			<StockMarketWidget shortName="AAPL" total={1000000000.36} variation={+0.56}/>
			<StockMarketWidget shortName="GOOG" total={2.36} variation={-3.14}/>
			<DailyNewInfectionWidget rate={-0.56} country="France"/>
			<DailyNewInfectionWidget rate={49.6} country="USA"/>
			<DailyNewHospitalizationWidget rate={-0.56} country="France"/>
			<DailyNewHospitalizationWidget rate={49.6} country="USA"/>
			<WeeklyNewVaccinations rate={0.56} country="France"/>
			<WeeklyNewVaccinations rate={49.6} country="USA"/>
			<FavoriteArtistWidget illustration="https://i.scdn.co/image/ab67618600001016f6e93dd30ed67c0a07c234ad" artistName="Adele"/>
			<FavoriteTrackWidget illustration="https://i.scdn.co/image/ab67616d0000b273cb5f30b072c99d6e450c688a" artistName="Adele" track="Rolling in the deep"/>
			<TemperatureWidget city="Blou" temperature={30}/>
			<WeatherWidget city="Blou" condition="rainy" illustrationUrl="https://cdn.weatherapi.com/weather/64x64/day/122.png"/>
		</Grid>
	</Grid>
)

export default Home;
