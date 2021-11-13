import { Route, Routes, Link } from "react-router-dom";
import * as React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./Signup";



const App = () => {
	return <Routes>
      <Route path="/" element={<Home />}/>
		<Route path="/login" element={<Login />}/>
		<Route path="/signup" element={<SignUp />}>
      </Route>
    </Routes>
}

export default App;
