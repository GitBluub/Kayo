import { Route, Routes, Link } from "react-router-dom";
import * as React from 'react';
import ReactDOM from 'react-dom';



const Home = () => {
	return <div>
		<h1>Hello World</h1>
		<Link to="login">Click here to log in</Link>
		<Link to="signup">Click here to sign up</Link>
	</div>
}

export default Home;
