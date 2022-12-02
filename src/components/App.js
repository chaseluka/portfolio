import "../style/App.css";
import About from "./About";
import Contact from "./Contact";
import Proficiencies from "./Proficiencies";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="App">
      <About />
      <Proficiencies />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
