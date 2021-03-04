import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
