import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from './routes';
import store from './Store/store';
import { useSelector, Provider } from 'react-redux';

function Router() {
  const jwtToken = useSelector((state: any) => state.jwtToken.value);
  return (
    <BrowserRouter>
      { routes(jwtToken != null) }
    </BrowserRouter>
    )
}

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
