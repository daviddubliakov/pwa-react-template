import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import swDev from './swDev';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('container')
);

swDev();
reportWebVitals();
