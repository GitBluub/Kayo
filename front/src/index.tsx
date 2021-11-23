import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes, Route, useRoutes
} from "react-router-dom";
import routes from './routes';
import store from './Store/store';
import { useSelector, Provider } from 'react-redux';
import API from './Controllers/API';

function Router() {
  const jwtToken = useSelector((state: any) => state.jwtToken.value);
  return useRoutes(routes(jwtToken != null));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
       <Router/>
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
