import React from "react";
import "../style/Contact.css";
import { ReactComponent as Phone } from "../style/images/cellphone.svg";
import { ReactComponent as Email } from "../style/images/email.svg";
import { ReactComponent as Address } from "../style/images/map-marker.svg";
import { ReactComponent as Github } from "../style/images/github-original.svg";
import { ReactComponent as LinkedIn } from "../style/images/linkedin-original.svg";
import { ReactComponent as Indeed } from "../style/images/indeed-svgrepo-com.svg";
import { ReactComponent as Twitter } from "../style/images/twitter-original.svg";
import PortfolioSection from "./PortfolioSection";

const Contact = () => {
  return (
    <div id="contact">
      <div className="section-header">
        <PortfolioSection title="Contact" />
      </div>
      <div className="content">
        <div className="contact-message-container">
          <div className="contact-message">
            Please contact me at any of the following.
          </div>
        </div>
        <div className="contact-info-container">
          <div className="contact-info">
            <div className="contact-icon">
              <Phone />
            </div>
            <div className="contact-type">970-405-5931</div>
          </div>
          <div className="contact-info">
            <div className="contact-icon">
              <Email />
            </div>
            <div className="contact-type">chaseluka@gmail.com</div>
          </div>
          <div className="contact-info">
            <div className="contact-icon">
              <Address />
            </div>
            <div className="contact-type">
              2036 Mount Ave Unit C Missoula, MT 59802
            </div>
          </div>
        </div>
        <div className="related-links">
          <Github />
          <LinkedIn />
          <Indeed />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Contact;
