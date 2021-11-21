import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes, Route, useRoutes
} from "react-router-dom";
import routes from './routes';
import store from './store';
import { useSelector, Provider } from 'react-redux'

function Router() {
  const isLogged = true;
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
