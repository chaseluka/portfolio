import React, { useState } from "react";
import "../style/Image.css";
import { ReactComponent as Expand } from "../style/images/chevron-left.svg";

const Image = ({ gif, message }) => {
  const [displayMessage, setDisplayMessage] = useState(false);

  const displayDescription = (e) => {
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle("rotate");
    setDisplayMessage((prevDisplay) => !prevDisplay);
  };

  return (
    <div className="image">
      <img src={require(`../style/images/${gif}`)} alt={gif} />
      <div className="description-bar">
        <Expand className="make-white" onClick={displayDescription} />
        {(() => {
          if (!displayMessage) return <div className="message">{message}</div>;
          else return <div className="message show">{message}</div>;
        })()}
      </div>
    </div>
  );
};

export default Image;
