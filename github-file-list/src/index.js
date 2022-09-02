import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PropTypes from "prop-types";
import Time from "./Time";

const testFiles = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 3,
    name: "README",
    type: "file",
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: "Added a readme",
    },
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return <FileList files={testFiles} />;
};

const FileList = ({ files }) => {
  return (
    <table className="file-list">
      <tbody>
        {files.map((file) => (
          <FileListItem key={file.id} file={file} />
        ))}
      </tbody>
    </table>
  );
};

FileList.propTypes = {
  files: PropTypes.array,
};

const FileListItem = ({ file }) => {
  return (
    <tr className="file-list-item">
      <FileName file={file} />
      <CommitMessage commit={file.latestCommit} />
      <td className="age">
        <Time time={file.updated_at} />
      </td>
    </tr>
  );
};

FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};

function FileIcon({ file }) {
  let icon = "fa-file-text-o";
  if (file.type === "folder") {
    icon = "fa-folder";
  }
  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  );
}
FileIcon.propTypes = {
  file: PropTypes.object.isRequired,
};

function FileName({ file }) {
  return (
    <>
      <FileIcon file={file} />
      <td className="file-name">{file.name}</td>
    </>
  );
}
FileName.propTypes = {
  file: PropTypes.object.isRequired,
};

const CommitMessage = ({ commit }) => {
  return <td className="commit-message">{commit.message}</td>;
};

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired,
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
