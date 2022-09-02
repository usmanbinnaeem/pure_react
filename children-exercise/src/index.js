import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

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

function Dialog({ Title, Body, Footer }) {
  return (
    <div className="dialog">
      <div className="dialog-header">
        <h1>{Title}</h1>
      </div>
      <div className="dialog-body">
        <p>{Body}</p>
      </div>
      <div className="dialog-footer">
        <p>{Footer}</p>
      </div>
    </div>
  );
}

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
      <Dialog
        Title={"Hello World"}
        Body={"This is Dialog body"}
        Footer={"I'm Footer"}
      />
    </>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
