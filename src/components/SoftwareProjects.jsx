import React, { useEffect } from "react";
import SoftwareProject from "./SoftwareProject";
import { gsap } from "gsap";
import { SWProjects } from "../SWProjectInfo";

function SoftwareProjects() {
  useEffect(() => {
    gsap.fromTo(
      ".projects-container",
      {
        opacity: 0,
        duration: 150,
      },
      {
        opacity: 100,
        duration: 150,
      }
    );
  }, []);

  return (
    <div className="projects-container grid grid-cols-1 -mt-8 md:w-[75vw] lg:grid-cols-2 lg:justify-center xl:w-[90vw] xl:grid-cols-3 mx-auto">
      {SWProjects.map((project, index) => (
        <SoftwareProject
          key={index}
          title={project.title}
          description={project.description}
          languages={project.languages}
          icons={project.icons}
        />
      ))}
    </div>
  );
}

export default SoftwareProjects;
