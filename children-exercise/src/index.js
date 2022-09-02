import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PropTypes from "prop-types";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function Nav({ children }) {
//   let items = React.Children.toArray(children);
//   for (let i = items.length - 1; i >= 1; i--) {
//     items.splice(
//       i,
//       0,
//       <span key={i} className="separator">
//         {" "}
//         |{" "}
//       </span>
//     );
//   }
//   return <div>{items}</div>;
// }

function ErrorBox({ children }) {
  return <div className="error">{children}</div>;
}

function FirstChildOnly({ children }) {
  let items = React.Children.toArray(children);
  return items[0];
}

function LastChildOnly({ children }) {
  let items = React.Children.toArray(children);
  return items[items.length - 1];
}

function Head({ number, children }) {
  let items = React.Children.toArray(children);
  const render = [];
  for (let i = 0; i < number; i++) {
    render.push(items[i]);
  }

  return render;
}

function Tail({ number, children }) {
  let items = React.Children.toArray(children);
  const render = [];
  for (let i = number; i <= items.length - 1; i++) {
    render.push(items[i]);
  }

  return render;
}

function Dialog({ children }) {
  return (
    <div className="dialog">
      <div className="dialog-header">
        <h5>{children[0]}</h5>
      </div>
      <div className="dialog-body">
        <h5>{children[1]}</h5>
      </div>
      <div className="dialog-footer">
        <h5>{children[2]}</h5>
      </div>
    </div>
  );
}

const Body = () => {
  return <p>I'm Body</p>;
};

const Title = () => {
  return <p>I'm Title</p>;
};

const Footer = () => {
  return <p>I'm Footer</p>;
};

Dialog.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

const App = () => {
  return (
    <>
      {" "}
      <ErrorBox>
        <h1>The World is Ending</h1>
      </ErrorBox>
      <FirstChildOnly>
        "Hello i'm the first element"
        <h1>The World is Ending</h1>
        <h2>Hello World</h2>
      </FirstChildOnly>
      <LastChildOnly>
        "Hello i'm the first element"
        <h1>The World is Ending</h1>
        <h2>Hello i'm the last element</h2>
      </LastChildOnly>
      <Head number={2}>
        <h1>The World is Ending</h1>
        <h2>Hello World</h2>
        <h2>Hello i'm the last element</h2>
        <h2>Hello i'm the first element</h2>
      </Head>
      <Tail number={2}>
        <h1>The World is Ending</h1>
        <h2>Hello World</h2>
        <h2>Tail! Hello i'm the last element</h2>
        <h2>Tail! Hello i'm the first element</h2>
      </Tail>
      <Dialog>
        <Body />
        <Title />
        <Footer />
      </Dialog>
    </>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
