import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './utils/noise.min';
import './utils/util';
import './utils/swirl';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="content--canvas"></div>
  </React.StrictMode>,
  document.getElementById('root'),
);
