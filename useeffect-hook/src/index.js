import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './InputRef';
import HandleClick from './HandleClick';

const LogEffect = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    console.log('latest value', text);
  })

  return (
   <input type='text' onChange = {(e) => setText(e.target.value)} />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogEffect />
    <App />
    <HandleClick />
  </React.StrictMode>
);

