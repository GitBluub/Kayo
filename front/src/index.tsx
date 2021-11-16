import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useSelector } from 'react-redux'
import {
  BrowserRouter,
  Routes, Route, useRoutes
} from "react-router-dom";
import routes from './routes';

function Router() {
  const { isLogged } = useSelector((state: any) => state.auth);
  return useRoutes(routes(isLogged));
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
