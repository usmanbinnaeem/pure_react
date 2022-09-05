import {useState, StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const OneTimeButton = ({onClick}) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    onClick()
    setClicked(true)
  }

  return (
    <button onClick={handleClick} disabled={clicked}>
      You can only click me once
    </button>
  )
 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <OneTimeButton onClick={() => alert('hi')} />
  </StrictMode>
);

reportWebVitals();
