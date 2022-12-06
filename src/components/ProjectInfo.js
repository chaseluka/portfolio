import React from "react";
import "../style/ProjectInfo.css";
import { ReactComponent as Github } from "../style/images/github-original.svg";
import { ReactComponent as Eye } from "../style/images/eye.svg";

const ProjectInfo = ({ projectName, message }) => {
  //do project message
  // do project links
  return (
    <div className="project-info">
      <div className="name-container">
        <div className="name">{projectName}</div>
      </div>

      <div className="related-links">
        <div className="link-container">
          <Github className="make-white" />
        </div>
        <div className="link-container">
          <Eye className="make-white" />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
