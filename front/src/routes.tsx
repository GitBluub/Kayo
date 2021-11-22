import React from 'react';
import App from './App';
import Home from "./Scenes/Home";
import Login from "./Scenes/Login";
import SignUp from "./Scenes/Signup";
import Services from "./Scenes/Services";
import ManageWidgets from "./Scenes/ManageWidgets";


const routes = (isLoggedIn: boolean) => {
	const ifLogged = ((ifLogged: any, ifNotLogged:any = <Login/>) => isLoggedIn ? ifLogged : ifNotLogged)

	return [
	{ 	path: '/',
		element: <App/>,
		children: [
		  	{ path: '/', element: ifLogged(<Home />, <SignUp/>) },
		  	{ path: 'login', element: ifLogged(<Home />) },
		  	{ path: 'signup', element: ifLogged(<Home />, <SignUp/>) },
		  	{ path: 'services', element: ifLogged(<Services />) },
		  	{ path: 'widgets/manage', element: ifLogged(<ManageWidgets />) },
		]
	}
]};

export default routes;