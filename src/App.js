import React from 'react';
import { BrowserRouter as RouterWrap } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Router from './Router.js';

import './assets/styles/App.sass';

const App = () => (
  <RouterWrap>
    <Navbar />
    <Router />
  </RouterWrap>
);

export default App;
