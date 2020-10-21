import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';


import Nav from './Components/Nav.component';
import Home from './Pages/Home.pages';
import Capitulos from './Pages/Capitulos.pages';
import SectionAnime from './Pages/SectionAnime.pages';
import { useLocation } from 'react-use';


function App() {
  const location = useLocation()
  console.log(location);
  return (
    <Fragment>
      <Router>
        {
          location.pathname !== '/anime' ? (<Nav />): null
        }

        <Route exact path="/" component={Home} />
        <Route exact path="/anime" component={SectionAnime} />
        <Route path="/anime/:anime" component={Capitulos} />

      </Router>
    </Fragment>
  );
}

export default App;
