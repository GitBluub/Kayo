import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes, Route, useRoutes
} from "react-router-dom";
import App from './App';
import Home from "./Scenes/Home";
import Login from "./Scenes/Login";
import SignUp from "./Scenes/Signup";
import Services from "./Scenes/Services";
import ManageWidgets from "./Scenes/ManageWidgets";

function Router() {
  let router = useRoutes([
    { path: '/', element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'services', element: <Services /> },
      { path: 'widgets/manage', element: <ManageWidgets /> },
    ]
  
  }]);
  return router;
}


ReactDOM.render(
  <BrowserRouter>
   <Router/>
  </BrowserRouter>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
