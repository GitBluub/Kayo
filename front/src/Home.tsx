import { Outlet, Link } from "react-router-dom";
import * as React from 'react';
import ReactDOM from 'react-dom';


const Home = () => {
	return <div><Link to="/login">Hello World</Link><Outlet/></div>
}

export default Home;
