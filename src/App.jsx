import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { darkState } from "./atoms/darkAtom";
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

  const darkMode = useRecoilValue(darkState);

  return (
    <div
      className={`${
        darkMode ? "bg-dark" : "bg-offwhite"
      } transition-all ease-in-out duration-700`}
    >
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
