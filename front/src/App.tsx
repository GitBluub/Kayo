import { Route, Routes, Link } from "react-router-dom";
import * as React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./Signup";
import { ThemeProvider } from "@emotion/react";
import { grey } from '@mui/material/colors';

const App = () => {

	return <ThemeProvider theme={{}}><Routes>
      	<Route path="/" element={<Home />}/>
		<Route path="/login" element={<Login />}/>
		<Route path="/signup" element={<SignUp />}/>
    </Routes>
	</ThemeProvider>
}

export default App;
