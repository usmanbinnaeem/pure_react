import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Room from './Room'
import RandomList from './RandomList';
import AudioControls from './AudioControls';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Room />
    <RandomList />
    <AudioControls />
  </React.StrictMode>
);

