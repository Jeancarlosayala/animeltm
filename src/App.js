import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';


import Nav from './Components/Nav.component';
import Home from './Pages/Home.pages';

function App() {
  return (
    <Fragment>
      <Router>
        <Nav />

        <Switch>

        <Route exatc path="/" component={Home} />

        </Switch>

      </Router>
    </Fragment>
  );
}

export default App;
