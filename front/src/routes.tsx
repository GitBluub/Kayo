import React from 'react';
import App from './App';
import Home from "./Views/Home";
import Login from "./Views/Authentication/Login";
import SignUp from "./Views/Authentication/Signup";
import Services from "./Views/Services";
import ServiceSubscribe from './Controllers/ServiceSubscribtion';
import ManageWidgets from "./Views/ManageWidgets";
import { Navigate } from 'react-router';
import AddWidgets from './Views/Widgets/AddWidgets';
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