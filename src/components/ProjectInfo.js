import React from "react";
import "../style/ProjectInfo.css";
import { ReactComponent as Github } from "../style/images/github-original.svg";
import { ReactComponent as Eye } from "../style/images/eye.svg";

const ProjectInfo = () => {
  return (
    <div className="project-info">
      <div className="name-container">
        <div className="name">TwitterClone</div>
      </div>
      <div className="description-container">
        <div className="description">
          This aimed to build the core functionality of Twitter: establishing an
          account, posting tweets, providing feedback on and viewing others
          tweets.
        </div>
      </div>
      <div className="related-links-container">
        <div className="github-link">
          <Github />
        </div>
        <div className="live-link">
          <Eye />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
