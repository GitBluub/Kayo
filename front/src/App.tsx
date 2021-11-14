import { Route, Routes, Link } from "react-router-dom";
import * as React from 'react';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./Signup";
import { ThemeProvider } from "@emotion/react";
import Grid from '@mui/material/Grid/Grid';
import Card from "@mui/material/Card/Card";
import Services from "./Services";

const App = () => {
	return <ThemeProvider theme={{}}>
		<Grid container alignItems="center" justifyContent="center" sx={{marginTop: 8}}>
    	<Card style={{ borderRadius: 8, width: "80%"}} variant="outlined" sx={{paddingBottom:3, display: 'flex',flexDirection: 'column',alignItems: 'center', boxShadow: 20}}>
			<Routes>
      			<Route path="/" element={<Home />}/>
				<Route path="/login" element={<Login />}/>
				<Route path="/signup" element={<SignUp />}/>
				<Route path="/services" element={<Services />}/>
    		</Routes>
		</Card>
		</Grid>
	</ThemeProvider>
}

export default App;
