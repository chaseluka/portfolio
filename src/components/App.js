import "../style/App.css";
import About from "./About";
import Contact from "./Contact";
import Proficiencies from "./Proficiencies";
import Projects from "./Projects";
import React, { useState } from "react";

const App = () => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="App">
      {(() => {
        if (copied) {
          setTimeout(() => {
            setCopied(false);
          }, 3000);
          return (
            <div className="copied-container">
              <div className="copied">Copied!</div>
            </div>
          );
        }
      })()}

      <About />
      <Proficiencies />
      <Projects />
      <Contact setCopied={setCopied} />
    </div>
  );
};

export default App;
