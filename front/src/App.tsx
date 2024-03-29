import { Outlet } from "react-router-dom";
import * as React from 'react';
import { ThemeProvider } from "@emotion/react";
import Grid from '@mui/material/Grid/Grid';
import Card from "@mui/material/Card/Card";


/**
 * Scaffold for every Kayo Page
 * @returns 
 */
const App = () => {
	return <ThemeProvider theme={{}}>
		<Grid container alignItems="center" justifyContent="center" sx={{marginTop: 8}}>
    	<Card style={{ borderRadius: 8, width: "80%"}} variant="outlined" sx={{paddingBottom:3, display: 'flex',flexDirection: 'column',alignItems: 'center', boxShadow: 20}}>
			<Outlet/>
		</Card>
		</Grid>
	</ThemeProvider>
}

export default App;
