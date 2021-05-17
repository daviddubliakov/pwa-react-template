import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Users from './Pages/Users';

const Router = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/users">
      <Users />
    </Route>
  </Switch>
);

export default Router;
