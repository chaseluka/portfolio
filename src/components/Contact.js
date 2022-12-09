import React from "react";
import "../style/Contact.css";
import { ReactComponent as Phone } from "../style/images/cellphone.svg";
import { ReactComponent as Email } from "../style/images/email.svg";
import { ReactComponent as Address } from "../style/images/map-marker.svg";
import { ReactComponent as Github } from "../style/images/github-original.svg";
import { ReactComponent as LinkedIn } from "../style/images/linkedin-original.svg";
import { ReactComponent as Twitter } from "../style/images/twitter-original.svg";
import PortfolioSection from "./PortfolioSection";

const Contact = () => {
  return (
    <div id="contact">
      <div className="section-header">
        <PortfolioSection title="Contact" />
      </div>
      <div className="content">
        <div className="contact-info-container">
          <div className="contact-info">
            <div className="contact-icon">
              <Phone className="make-white" />
            </div>
            <div className="contact-type">970-405-5931</div>
          </div>
          <div className="contact-info">
            <div className="contact-icon">
              <Email className="make-white" />
            </div>
            <div className="contact-type">chaseluka@gmail.com</div>
          </div>
          <div className="contact-info">
            <div className="contact-icon">
              <Address className="make-white" />
            </div>
            <div className="contact-type">
              2036 Mount Ave Unit C Missoula, MT 59802
            </div>
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
  );
};

export default Contact;
