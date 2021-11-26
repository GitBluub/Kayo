import React from 'react';
import App from './App';
import Home from "./Scenes/Home";
import Login from "./Scenes/Login";
import SignUp from "./Scenes/Signup";
import Services from "./Scenes/Services";
import ServiceSubscribe from './Controllers/ServiceSubscribtion';
import ManageWidgets from "./Scenes/ManageWidgets";
import { Navigate } from 'react-router';
import AddWidgets from './Scenes/AddWidgets';
import {
	BrowserRouter,
	Routes, Route, useRoutes
  } from "react-router-dom";


const routes = (isLoggedIn: boolean) => {
	const ifLogged = ((ifLogged: any, ifNotLogged:any = <Login />) => isLoggedIn ? ifLogged :ifNotLogged);
	return  (
		<Routes>
    	    <Route path="/" element={<App/>}>
				<Route index element={ifLogged(<Home />)}/>
				<Route path="login" element={ifLogged(<Navigate replace to="/"/>)}/>
				<Route path="signup" element={ifLogged(<Navigate replace to="/"/>, <SignUp />)}/>
    	      	<Route path="services">
    	      	  	<Route index element={<Services/>}/>
    	      	  	<Route path="subscribe/:serviceID" element={<ServiceSubscribe/>}/>
    	      	</Route>
				<Route path="widgets/manage" element={ifLogged(<ManageWidgets />)}/>
				<Route path="widgets/add" element={ifLogged(<AddWidgets />)}/>
    	    </Route>
    	</Routes>
	)
}

export default routes;