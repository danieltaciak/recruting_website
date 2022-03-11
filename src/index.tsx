import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './DynamicsLogo.png'

ReactDOM.render(
  <React.StrictMode>
    <link rel="shortcut icon" href={logo} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);