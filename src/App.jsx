import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { scrollTo } from "./scroll";

function App() {
  useEffect(() => {
    scrollTo("home", "auto");
  }, []);

  return (
    <div>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
