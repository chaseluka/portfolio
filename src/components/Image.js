import React, { useState } from "react";
import "../style/Image.css";
import { ReactComponent as Expand } from "../style/images/chevron-left.svg";

const Image = () => {
  const [displayMessage, setDisplayMessage] = useState(false);

  const displayDescription = (e) => {
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle("rotate");
    setDisplayMessage((prevDisplay) => !prevDisplay);
  };
  return (
    <div className="image">
      <img
        src={require("../style/images/self-portrait-fake.jpg")}
        alt="displays a screenshot of the project"
      />
      <div className="description-bar">
        <Expand className="make-white" onClick={displayDescription} />
        {(() => {
          if (!displayMessage)
            return (
              <div className="message">
                Hello my name is chase this project makes no sense. Thanks fo
                rfviewicing
              </div>
            );
          else
            return (
              <div className="message show">
                Hello my name is chase this project makes no sense. Thanks fo
                rfviewicing
              </div>
            );
        })()}
      </div>
    </div>
  );
};

export default Image;
