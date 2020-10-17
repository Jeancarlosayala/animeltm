import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';


import Nav from './Components/Nav.component';
import Home from './Pages/Home.pages';

//Sections
import KNY from './Sections/KNY';

function App() {
  return (
    <Fragment>
      <Router>
        <Nav />

        <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/kimetsunoyaiba" component={KNY} />

        </Switch>

      </Router>
    </Fragment>
  );
}

export default App;
