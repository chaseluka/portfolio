import React from "react";
import "../style/About.css";
import { ReactComponent as Github } from "../style/images/github-original.svg";
import { ReactComponent as LinkedIn } from "../style/images/linkedin-original.svg";
import PortfolioSection from "./PortfolioSection";
import Image from "./Image";

const About = () => {
  return (
    <div id="about">
      <div className="section-header">
        <PortfolioSection title="About" />
      </div>
      <div className="content">
        <Image gif={"self-portrait.jpeg"} />
        <div className="about-me">
          <div className="name-container">
            <div className="name">Chase Lukasiewicz</div>
          </div>
          <div className="message-container">
            <div className="message">
              I am a self-taught Software Engineer with technical experience
              primarily in Javascript, ReactJS, NodeJS, MongoDB, and Express.js
              after having recently completed The Odin Project full-stack
              curriculum.
            </div>
            <div className="message">
              I love to problem solve and I have a strong ability to learn
              complex concepts. Check out some of my projects below if you're
              interested. My primary interests are in web development, game
              development, and design.
            </div>
          </div>
          <div className="related-links">
            <a href="https://github.com/chaseluka" className="link-container">
              <Github className="make-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/chase-lukasiewicz-999a9a259/"
              className="link-container"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
