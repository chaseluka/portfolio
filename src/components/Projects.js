import React from "react";
import "../style/Projects.css";
import Image from "./Image";
import ProjectInfo from "./ProjectInfo";
import PortfolioSection from "./PortfolioSection";

const Projects = () => {
  return (
    <div id="Projects">
      <div className="section-header">
        <PortfolioSection title="Projects" />
      </div>
      <div className="content">
        <div className="projects-container">
          <div className="project">
            <Image />
            <ProjectInfo />
          </div>
          <div className="project">
            <Image />
            <ProjectInfo />
          </div>
          <div className="project">
            <Image />
            <ProjectInfo />
          </div>
        </div>
        <div className="repository">
          <div className="repo-container">
            <div className="repo-message">Visit full repository</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
