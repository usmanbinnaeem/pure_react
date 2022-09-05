import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

// First example: A simple Parent and Child, where the Parent
// simply prints to the console when the button is clicked in Child
class CountingParent extends React.Component {
  // The constructor is called when a
  // component is created
  constructor(props) {
    super(props);
    // Set the state here. Use "props" if needed.
    this.state = {
      actionCount: 0,
    };
    // Bind the event handler function, so that its
    // `this` binding isn't lost when it gets passed
    // to the button
    this.handleAction = this.handleAction.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  handleAction(action) {
    console.log("Child says", action);
    // Replace actionCount with an incremented value
    this.setState((state, prop) => {
      return {
        actionCount: state.actionCount + 1
      }
    }, function(){
      console.log('state ---> ', this.state.actionCount);
    });

   
  }

  resetCounter() {
    this.setState({
      actionCount : 0
    })
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} onReset = {this.resetCounter} />
        <p>Clicked {this.state.actionCount} times</p>
       
      </div>
    );
  }
}

const Child = ({ onAction, onReset }) => {
  return (
    <>
  <button onClick={onAction}>Click Me!</button>
  <button onClick={onReset}>Reset Counter</button>
  </>
  );
};

root.render(<CountingParent />);
