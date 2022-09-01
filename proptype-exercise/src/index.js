import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PropTypes from "prop-types";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AddressLabel = ({ person }) => {
  return (
    <>
      <h3>{person.name}</h3>
      <h5>{person.address}</h5>
    </>
  );
};

AddressLabel.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
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

Envelope.propTypes = {
  toPerson: PropTypes.string.isRequired,
  fromPerson: PropTypes.string.isRequired,
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

CreditCard.propTypes = {
  cardInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bankName: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    expDate: PropTypes.string.isRequired,
  }).isRequired,
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

Poster.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
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

Email.propTypes = {
  email: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
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
