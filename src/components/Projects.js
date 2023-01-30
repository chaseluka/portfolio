import React, { useRef, useState } from "react";
import "../style/Projects.css";
import Image from "./Image";
import ProjectInfo from "./ProjectInfo";
import PortfolioSection from "./PortfolioSection";
import uniqid from "uniqid";

const Projects = () => {
  const initialMount = useRef(false);
  const [projectList, setProjectList] = useState([
    {
      projectName: "Game Index",
      message:
        "This is a basic inventory management app that serves to keep retail information on video games. This project highlights the use of CRUD operations, the MVC patter, and MongoDB",
      id: uniqid(),
      gif: "game-index.gif",
      repository: "https://github.com/chaseluka/inventory-app",
      live: "https://game-index.up.railway.app",
    },
    {
      projectName: "Twitter Clone",
      message:
        "This aimed to build the core functionality of Twitter: establishing an account, posting tweets, providing feedback on and viewing others tweets.",
      id: uniqid(),
      gif: "twitterclone.gif",
      repository: "https://github.com/chaseluka/twitter-clone",
      live: "https://twitterclone-641f5.web.app/",
    },

    {
      projectName: "Task Manager",
      message:
        "Manage todo's by adding and editing tasks, add tasks to specific projects, and view all completed tasks.",
      id: uniqid(),
      gif: "todo-list.gif",
      repository: "https://github.com/chaseluka/todo-list",
      live: "https://chaseluka.github.io/todo-list/",
    },
  ]);

  const displayAdditionalProjects = (e) => {
    e.preventDefault();
    e.target.style.display = "none";
    setProjectList(
      projectList.concat([
        {
          projectName: "Battleship",
          message:
            "The classic game: 'Battleship'. This project was the first utilization of Test Driven Development",
          id: uniqid(),
          gif: "battleship.gif",
          repository: "https://github.com/chaseluka/battleship",
          live: "https://chaseluka.github.io/battleship/",
        },
        {
          projectName: "Where's Waldo",
          message:
            "A photo tagging app recreating the beloved puzzle books, while utilizing firebase as the backend storage",
          id: uniqid(),
          gif: "whereswaldo.gif",
          repository: "https://github.com/chaseluka/photo-tagging",
          live: "https://photo-tagging-11145.web.app/",
        },

        {
          projectName: "Tic-Tac-Toe",
          message:
            "Another classic game using algorithims, like the minimax algorithm, to develop a AI capable of making the best possible move",
          id: uniqid(),
          gif: "tic-tac-toe.gif",
          repository: "https://github.com/chaseluka/tic-tac-toe",
          live: "https://chaseluka.github.io/tic-tac-toe/",
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
            return projectList.map((project, index) => {
              index++;
              if (index > 3 && !initialMount.current) {
                if (index === 6) initialMount.current = true;
                return (
                  <div className="project transition" key={project.id}>
                    <Image gif={project.gif} message={project.message} />
                    <ProjectInfo
                      projectName={project.projectName}
                      repo={project.repository}
                      live={project.live}
                    />
                  </div>
                );
              } else
                return (
                  <div className="project" key={project.id}>
                    <Image gif={project.gif} message={project.message} />
                    <ProjectInfo
                      projectName={project.projectName}
                      repo={project.repository}
                      live={project.live}
                    />
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
          <a href="https://github.com/chaseluka?tab=repositories">
            <button className="button-container">Full repository</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
