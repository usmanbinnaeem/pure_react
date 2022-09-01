import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import moment from "moment";
import PropTypes from "prop-types";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Avatar = ({ gravatar }) => {
  return (
    <img
      src={`https://www.gravatar.com/avatar/${gravatar}1`}
      className="avatar"
      alt="avatar"
    />
  );
};

const Message = ({ message }) => {
  return <div className="message">{message}</div>;
};

const Author = ({ author }) => {
  const { handle, name } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
};

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

const ReplyButton = () => {
  return <i className="fa fa-reply reply-button" />;
};

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ retweets }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet retweet-button" />
      {getRetweetCount(retweets)}
    </span>
  );
};

const LikeButton = ({ likes }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart like-button" />
      {likes > 0 && <span className="like-count">{likes}</span>}
    </span>
  );
};

const MoreOptionsButton = () => {
  return <i className="fa  fa-ellipsis-h more-options-button" />;
};

const Tweet = ({ tweet }) => {
  return (
    <>
      <div className="tweet">
        <Avatar gravatar={tweet.gravatar} />
        <div className="content">
          <Author author={tweet.author} /> <Time tweet={tweet.timestamp} />
          <Message message={tweet.message} />
          <div className="buttons">
            <ReplyButton />
            <RetweetButton retweets={tweet.retweets} />
            <LikeButton likes={tweet.likes} />
            <MoreOptionsButton />
          </div>
        </div>
      </div>
    </>
  );
};

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person",
  },
  likes: 2,
  retweets: 17,
  timestamp: "2016-07-30 21:24:37",
};

LikeButton.propTypes = {
  likes: PropTypes.number,
};

RetweetButton.propTypes = {
  retweets: PropTypes.number,
};

Message.propTypes = {
  message: PropTypes.string,
};

Time.propTypes = {
  time: PropTypes.string,
};

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

root.render(
  <React.StrictMode>
    <Tweet tweet={testTweet} />
  </React.StrictMode>
);
reportWebVitals();
