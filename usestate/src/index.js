import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

class OneTimeButton extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.props.onClick()
    this.setState((state) => {
      return {
        clicked: true
      }
    })
  }

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.state.clicked} >
        You can only click me once!
      </button>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OneTimeButton onClick={() => alert('hi')} />
  </React.StrictMode>
);

reportWebVitals();
