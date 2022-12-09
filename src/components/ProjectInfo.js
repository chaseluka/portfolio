import React from "react";
import "../style/ProjectInfo.css";
import { ReactComponent as Github } from "../style/images/github-original.svg";
import { ReactComponent as Eye } from "../style/images/eye.svg";

const ProjectInfo = ({ projectName, repo, live }) => {
  return (
    <div className="project-info">
      <div className="name-container">
        <div className="name">{projectName}</div>
      </div>

      <div className="related-links">
        <a href={repo} className="link-container">
          <Github className="make-white" />
        </a>
        <a href={live} className="link-container">
          <Eye className="make-white" />
        </a>
      </div>
    </div>
  );
};

export default ProjectInfo;
