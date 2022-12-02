import React from "react";
import "../style/Proficiencies.css";
import PortfolioSection from "./PortfolioSection";
import { ReactComponent as JS } from "../style/images/javascript-original.svg";
import { ReactComponent as NodeJS } from "../style/images/nodejs-original.svg";
import { ReactComponent as CSS } from "../style/images/css3-original.svg";
import { ReactComponent as HTML } from "../style/images/nodejs-original.svg";
import { ReactComponent as ReactSvg } from "../style/images/react-original.svg";
import { ReactComponent as Webpack } from "../style/images/webpack-original.svg";
import { ReactComponent as MongoDB } from "../style/images/mongodb-original.svg";
import { ReactComponent as Git } from "../style/images/git-original.svg";
import { ReactComponent as Firebase } from "../style/images/firebase-plain.svg";
import { ReactComponent as Jest } from "../style/images/jest-plain.svg";

const Proficiencies = () => {
  return (
    <div id="proficiencies">
      <div className="section-header">
        <PortfolioSection title="Proficiencies" />
      </div>
      <div className="content">
        <div className="item">
          <JS className="item-logo" />
          <div className="item-name">Javascript</div>
        </div>
        <div className="item">
          <NodeJS className="item-logo" />
          <div className="item-name">NodeJS</div>
        </div>
        <div className="item">
          <CSS className="item-logo" />
          <div className="item-name">CSS</div>
        </div>
        <div className="item">
          <HTML className="item-logo" />
          <div className="item-name">HTML</div>
        </div>
        <div className="item">
          <ReactSvg className="item-logo" />
          <div className="item-name">React</div>
        </div>
        <div className="item">
          <Webpack className="item-logo" />
          <div className="item-name">Webpack</div>
        </div>
        <div className="item">
          <MongoDB className="item-logo" />
          <div className="item-name">MongoDB</div>
        </div>
        <div className="item">
          <Git className="item-logo" />
          <div className="item-name">Git</div>
        </div>
        <div className="item">
          <Firebase className="item-logo" />
          <div className="item-name">Firebase</div>
        </div>
        <div className="item">
          <Jest className="item-logo" />
          <div className="item-name">Jest</div>
        </div>
      </div>
    </div>
  );
};

export default Proficiencies;
