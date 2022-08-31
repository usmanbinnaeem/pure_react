import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Avatar = () => {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
};

const Message = () => {
  return <div className="message">This is less than 140 characters</div>;
};

const Author = () => {
  return (
    <span className="author">
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
};

const Time = () => {
  return <span className="time">3h ago</span>;
};

const ReplyButton = () => {
  return <i className="fa fa-reply reply-button" />;
};

const RetweetButton = () => {
  return <i className="fa fa-retweet retweet-button" />;
};

const LikeButton = () => {
  return <i className="fa fa-heart like-button" />;
};

const MoreOptionsButton = () => {
  return <i className="fa  fa-ellipsis-h more-options-button" />;
};

const Tweet = () => {
  return (
    <>
      <div className="tweet">
        <Avatar />
        <div className="content">
          <Author /> <Time />
          <Message />
          <div className="buttons">
            <ReplyButton />
            <RetweetButton />
            <LikeButton />
            <MoreOptionsButton />
          </div>
        </div>
      </div>
    </>
  );
};

root.render(
  <React.StrictMode>
    <Tweet />
  </React.StrictMode>
);
reportWebVitals();
