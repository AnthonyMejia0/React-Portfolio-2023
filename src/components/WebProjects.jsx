import React, { useEffect } from "react";
import { WProjects } from "../WebProjectInfo";
import { gsap } from "gsap";
import WebProject from "./WebProject";

function WebProjects() {
  useEffect(() => {
    gsap.fromTo(
      ".web-project",
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
    <div className="web-project space-y-20">
      {WProjects.map((project, index) => (
        <WebProject
          key={index}
          color={project.color}
          name={project.name}
          tools={project.tools}
          position={project.position}
          img={project.img}
          desc={project.desc}
          site={project.site}
          repo={project.repo}
        />
      ))}
    </div>
  );
}

export default WebProjects;
