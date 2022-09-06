import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Room from './Room'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Room />
  </React.StrictMode>
);

reportWebVitals();
