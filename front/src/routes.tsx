import React from 'react';
import App from './App';
import Home from "./Scenes/Home";
import Login from "./Scenes/Login";
import SignUp from "./Scenes/Signup";
import Services from "./Scenes/Services";
import ManageWidgets from "./Scenes/ManageWidgets";
import { Navigate } from 'react-router';


const routes = (isLoggedIn: boolean) => {
	const ifLogged = ((ifLogged: any, ifNotLogged:any = <Login />) => isLoggedIn ? ifLogged :ifNotLogged);
	return [
	// { 	path: '/',
	// 	element: <App/>,
	// 	children: [
	// 	  	{ path: '/', element: ifLogged(<Home />, <Login />) },
	// 	  	{ path: '/login', element: ifLogged(<Home />) },
	// 	  	{ path: '/signup', element: ifLogged(<Home />, <SignUp />) },
	// 	  	{ path: '/services', element: ifLogged(<Services />) },
	// 	  	{ path: '/widgets/manage', element: ifLogged(<ManageWidgets />) },
	// 	]
	// }
	{
		path: 'login', element: <App>{ifLogged(<Home />)}</App>,
	},
	{
		path: '/signup', element: <App>{ifLogged(<Home />, <SignUp/>)}</App>,
	},
	{
		path: '/services', element: <App>{ifLogged(<Services />)}</App>,
	},
	{
		path: '/widgets/manage', element: <App>{ifLogged(<ManageWidgets />)}</App>,
	},
	{
		path: '/', element: <App>{ifLogged(<Home />)}</App>,
	},
]};

export default routes;