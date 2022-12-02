import React from "react";
import "../style/PortfolioSection.css";

const PortfolioSection = ({ title }) => {
  return (
    <div id="section">
      <div className="title-container">
        <div className="title">{title}</div>
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default PortfolioSection;
