import React from "react";
import { createRoot } from "react-dom/client";
import { House } from "./House";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

// class CountingParent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       actionCount: 0,
//     };
//     this.handleAction = this.handleAction.bind(this);
//     this.resetCounter = this.resetCounter.bind(this);
//   }

//   handleAction(action) {
//     console.log("Child says", action);
//     this.setState(
//       (state, prop) => {
//         return {
//           actionCount: state.actionCount + 1,
//         };
//       },
//       function () {
//         console.log("state ---> ", this.state.actionCount);
//       }
//     );
//   }

//   resetCounter() {
//     this.setState({
//       actionCount: 0,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Child onAction={this.handleAction} onReset={this.resetCounter} />
//         <p>Clicked {this.state.actionCount} times</p>
//       </div>
//     );
//   }
// }

class CountingParent extends React.Component {
  state = {
    actionCount: 0,
    isBool: true,
  };

  handleAction = (action) => {
    console.log("Child says", action);
    this.setState(
      (state, prop) => {
        return {
          actionCount: state.actionCount + 1,
        };
      },
      function () {
        console.log("state ---> ", this.state.actionCount);
      }
    );
  };

  resetCounter = () => {
    this.setState(
      () => {
        return {
          actionCount: 0,
        };
      },
      function () {
        console.log("reset ---> ", this.state.actionCount);
      }
    );
  };

  render() {
    return (
      <div>
        {this.isBool ? (
          <Child onAction={this.handleAction} onReset={this.resetCounter} />
        ) : (
          <House />
        )}
        {/* <p>Clicked {this.state.actionCount} times</p> */}
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
