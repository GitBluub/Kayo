import { Route, Routes, Link } from "react-router-dom";
import * as React from 'react';
import ReactDOM from 'react-dom';
import KayoCard, { KayoCardTitle } from "./Components/Card";
import { KayoCardContent } from "./Components/Card";
import Grid from "@mui/material/Grid/Grid";
import Widget from "./Components/Widget";
import AvailableServices from "./Components/Service";



const Home = () => {
	return <div>
		<h1>Hello World</h1>
		<Link to="login">Click here to log in</Link>
		<Link to="signup">Click here to sign up</Link>
		<Grid container alignItems="center" justifyContent="center">
		<KayoCard>
			<KayoCardTitle>KAYO</KayoCardTitle>
			<KayoCardContent>
				<Widget service={AvailableServices.SPOTIFY}/>
			</KayoCardContent>
		</KayoCard>
		</Grid>
	</div>
}

export default Home;
