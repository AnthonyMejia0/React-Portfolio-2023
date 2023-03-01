import React from "react";

function Project({ name, img, desc, site, repo }) {
  return (
    <div className="">
      <div className="border-2 border-black rounded-sm xs:w-full sm:w-[25rem] lg:w-[30rem] shadow-md mx-auto overflow-clip">
        <img src={img} alt={`${name} Screenshot`} className="scale-x-105" />
      </div>
      <div>
        <h2 className="font-bold text-3xl lg:text-5xl text-dark-blue w-max font-playfair mt-5 mx-auto">
          {name}
        </h2>
        <p className="project-p text-center mx-auto">{desc}</p>
      </div>

      <div className="flex space-x-3 items-center justify-center py-5">
        <a
          href={site}
          target="_blank"
          rel="noreferrer"
          className="project-button"
        >
          Visit Site
        </a>
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="project-button"
        >
          View Github Repo
        </a>
      </div>
    </div>
  );
}

export default Project;
