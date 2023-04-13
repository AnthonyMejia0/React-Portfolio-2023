import { useRecoilState, useRecoilValue } from "recoil";
import { darkState } from "../atoms/darkAtom";
import WebProjects from "./WebProjects";
import { projectsState } from "../atoms/projectsAtom";
import SoftwareProjects from "./SoftwareProjects";

function Projects() {
  const darkMode = useRecoilValue(darkState);
  const [projectsPage, setProjectsPage] = useRecoilState(projectsState);

  return (
    <div id="projects" className="mt-24 mb-40">
      <h2
        className={`mx-auto font-bold text-3xl lg:text-5xl w-max font-playfair mb-10 ${
          darkMode ? "text-offwhite" : "text-dark-blue"
        }`}
      >
        Check Out My Work
      </h2>

      <div
        className={`flex items-center justify-center mb-10 space-x-3 ${
          darkMode ? "text-offwhite" : "text-dark-blue"
        }`}
      >
        <button
          onClick={() => setProjectsPage("Web")}
          className={`project-tab ${
            projectsPage === "Web"
              ? darkMode
                ? "border-offwhite"
                : "border-dark-blue"
              : ""
          }`}
        >
          Web
        </button>
        <button
          onClick={() => setProjectsPage("Software")}
          className={`project-tab ${
            projectsPage === "Software"
              ? darkMode
                ? "border-offwhite"
                : "border-dark-blue"
              : ""
          }`}
        >
          Software
        </button>
      </div>

      {projectsPage === "Web" ? (
        <WebProjects />
      ) : projectsPage === "Software" ? (
        <SoftwareProjects />
      ) : (
        <WebProjects />
      )}
    </div>
  );
}

export default Projects;
