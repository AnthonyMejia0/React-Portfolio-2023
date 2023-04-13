import React from "react";
import { WProjects } from "../WebProjectInfo";
import WebProject from "./WebProject";

function WebProjects() {
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
