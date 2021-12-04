import React from 'react';
import App from './App';
import Home from "./Views/Home";
import Login from "./Views/Authentication/Login";
import SignUp from "./Views/Authentication/Signup";
import Services from "./Views/Services";
import ServiceSubscribe from './Controllers/ServiceSubscribtion';
import ManageWidgets from "./Views/Widgets/ManageWidgets";
import { Navigate } from 'react-router';
import AddWidgets from './Views/Widgets/AddWidgets';
import {
	BrowserRouter,
	Routes, Route, useRoutes
  } from "react-router-dom";
import Admin from './Views/Admin';


const routes = (isLoggedIn: boolean) => {
	const ifLogged = ((ifLog: JSX.Element, ifNotLog:JSX.Element = <Login />) => isLoggedIn ? ifLog :ifNotLog);
	return  (
		<Routes>
    	    <Route path="/" element={<App/>}>
				<Route index element={ifLogged(<Home />)}/>
				<Route path="login" element={ifLogged(<Navigate replace to="/"/>)}/>
				<Route path="signup" element={ifLogged(<Navigate replace to="/"/>, <SignUp />)}/>
				<Route path="admin" element={ifLogged(<Admin/>)}/>
    	      	<Route path="services">
    	      	  	<Route index element={ifLogged(<Services/>)}/>
    	      	  	<Route path="subscribe/:serviceID" element={ifLogged(<ServiceSubscribe/>)}/>
    	      	</Route>
				<Route path="widgets/manage" element={ifLogged(<ManageWidgets />)}/>
				<Route path="widgets/add" element={ifLogged(<AddWidgets />)}/>
    	    </Route>
    	</Routes>
	)
}

export default routes;