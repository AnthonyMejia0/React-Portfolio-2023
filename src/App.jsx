import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { scrollTo } from "./scroll";

function App() {
  useEffect(() => {
    scrollTo("home", "auto");
  }, []);

  return (
    <div className="">
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
