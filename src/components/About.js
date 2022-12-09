import React from "react";
import "../style/About.css";
import { ReactComponent as Github } from "../style/images/github-original.svg";
import { ReactComponent as LinkedIn } from "../style/images/linkedin-original.svg";
import { ReactComponent as Twitter } from "../style/images/twitter-original.svg";
import PortfolioSection from "./PortfolioSection";
import Image from "./Image";

const About = () => {
  return (
    <div id="about">
      <div className="section-header">
        <PortfolioSection title="About" />
      </div>
      <div className="content">
        <Image gif={"self-portrait-fake.jpg"} />
        <div className="about-me">
          <div className="name-container">
            <div className="name">Chase Lukasiewicz</div>
          </div>
          <div className="message-container">
            <div className="message">
              No work in life is more stimulating and fulfilling than solving
              problems. From math, to philosophy, and everything in between, I
              have always had a passion for solving complex problems. It's this
              affinity that drove me to programming.
            </div>
            <div className="message">
              I love to tackle challenges on both the front-end and back-end,
              and I'm committed to finidng the best possible of solutions.
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
            <a href="https://twitter.com/Chaseluka0" className="link-container">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
