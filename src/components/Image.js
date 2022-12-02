import React from "react";
import "../style/Image.css";

const Image = () => {
  return (
    <div className="image">
      <img
        src={require("../style/images/self-portrait-fake.jpg")}
        alt="displays a screenshot of the project"
      />
    </div>
  );
};

export default Image;
