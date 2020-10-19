import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';


import Nav from './Components/Nav.component';
import Home from './Pages/Home.pages';
import Capitulos from './Pages/Capitulos.pages';
import SectionAnime from './Pages/SectionAnime.pages';

function App() {
  return (
    <Fragment>
      <Router>
        <Nav />

        <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/anime" component={SectionAnime} />
        <Route  path="/anime/:anime" component={Capitulos} />

        </Switch>

      </Router>
    </Fragment>
  );
}

export default App;
