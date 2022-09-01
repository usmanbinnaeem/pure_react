import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AddressLabel = ({ person }) => {
  return (
    <>
      <h3>{person.name}</h3>
      <h5>{person.address}</h5>
    </>
  );
};

const Stamp = () => {
  return <img src="https://i.pravatar.cc/80" alt="stamp" />;
};

const Envelope = ({ toPerson, fromPerson }) => {
  return (
    <>
      <AddressLabel
        person={{ name: toPerson, address: "123 Fake St. Boston, MA 02118" }}
      />
      <Stamp />
      <center>
        {" "}
        <AddressLabel
          className="from"
          person={{
            name: fromPerson,
            address: "123 Fake St. San Francisco, CA 94101",
          }}
        />
      </center>
    </>
  );
};

const CreditCard = ({ cardInfo }) => {
  return (
    <>
      <div>
        <h3>{cardInfo.bankName}</h3>
        <h5>{cardInfo.number}</h5>
        <h5> {cardInfo.expDate} </h5>
        <h5>{cardInfo.name}</h5>
      </div>
    </>
  );
};

const Poster = ({ image, title, text }) => {
  return (
    <>
      <img src={image} alt="poster" />
      <h2>{title}</h2>
      <h5>{text}</h5>
    </>
  );
};

const Email = ({ email }) => {
  return (
    <>
      <div>
        <h3>{email.sender}</h3>
        <h5>{email.subject}</h5>
        <h5>{email.date}</h5>
        <h5>{email.message}</h5>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Envelope toPerson={"John Doe"} fromPerson={"John Hackney"} />
      <CreditCard
        cardInfo={{
          name: "Usman Naeem",
          bankName: "Meezan Bank",
          number: "4242 4242 4242 4242",
          expDate: "08/19",
        }}
      />
      <Poster
        image={"https://i.pravatar.cc/80"}
        title="react"
        text={"lorem ipsum text"}
      />
      <Email
        email={{
          sender: "Usman Naeem",
          subject: "Subject",
          date: "01/09",
          message: "Hello from John Doe",
        }}
      />
    </div>
  );
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
