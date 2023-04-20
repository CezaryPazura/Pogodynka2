import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Pages/Home';
import Forecast from './Pages/Forecast';
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/forecast" >
          <Forecast />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
