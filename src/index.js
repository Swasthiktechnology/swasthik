import React from 'react';
import ReactDOM from 'react-dom/client';

import './assest/css/index.css';
import './assest/css/responsive.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* bootstrap version 4.0.0  command=  npm install bootstrap@4.0.0*/
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
