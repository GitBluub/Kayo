import * as React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './Login';


const App = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
      </Routes>
    </Router>
)

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
