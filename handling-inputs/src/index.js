import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ControlledInputs from './ControlledInputs';
import UnControlledInputs from './UnControlledInputs';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ControlledInputs />
    <UnControlledInputs />
  </React.StrictMode>
);

