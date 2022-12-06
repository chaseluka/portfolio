import React, { useState } from "react";
import "../style/Projects.css";
import Image from "./Image";
import ProjectInfo from "./ProjectInfo";
import PortfolioSection from "./PortfolioSection";
import uniqid from "uniqid";

const Projects = () => {
  const [projectList, setProjectList] = useState([
    {
      projectName: "TwitterClone",
      message:
        "This aimed to build the core functionality of Twitter: establishing an account, posting tweets, providing feedback on and viewing others tweets.",
      id: uniqid(),
    },
    {
      projectName: "TwitterClone",
      message:
        "This aimed to build the core functionality of Twitter: establishing an account, posting tweets, providing feedback on and viewing others tweets.",
      id: uniqid(),
    },
    {
      projectName: "TwitterClone",
      message:
        "This aimed to build the core functionality of Twitter: establishing an account, posting tweets, providing feedback on and viewing others tweets.",
      id: uniqid(),
    },
  ]);

  const displayAdditionalProjects = (e) => {
    e.preventDefault();
    e.target.style.display = "none";
    setProjectList(
      projectList.concat([
        {
          projectName: "TwitterClone",
          message:
            "This aimed to build the core functionality of Twitter: establishing an account, posting tweets, providing feedback on and viewing others tweets.",
          id: uniqid(),
        },
        {
          projectName: "TwitterClone",
          message:
            "This aimed to build the core functionality of Twitter: establishing an account, posting tweets, providing feedback on and viewing others tweets.",
          id: uniqid(),
        },
        {
          projectName: "TwitterClone",
          message:
            "This aimed to build the core functionality of Twitter: establishing an account, posting tweets, providing feedback on and viewing others tweets.",
          id: uniqid(),
        },
      ])
    );
  };
  return (
    <div id="projects">
      <div className="section-header">
        <PortfolioSection title="Projects" />
      </div>
      <div className="content">
        <div className="projects-container">
          {(() => {
            console.log(projectList);
            return projectList.map((project) => {
              return (
                <div className="project" key={project.id}>
                  <Image />
                  <ProjectInfo projectName={project.projectName} />
                </div>
              );
            });
          })()}
        </div>
        <div className="bottom-buttons">
          <button
            onClick={displayAdditionalProjects}
            className="button-container"
          >
            Show more
          </button>
          <button className="button-container">Full repository</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
