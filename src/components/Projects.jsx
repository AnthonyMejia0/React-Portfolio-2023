import React from "react";
import Project from "./Project";

function Projects() {
  return (
    <div id="projects" className="mx-10 lg:mx-20 mt-24 mb-52">
      <h2 className="mx-auto font-bold text-3xl lg:text-5xl text-dark-blue w-max font-playfair mb-10">
        Projects
      </h2>

      <Project
        name="Image Locker"
        img="https://firebasestorage.googleapis.com/v0/b/photo-storage-c9aa3.appspot.com/o/users%2FLFY5EeJo8nUoxlr5JslEEefXrUB2%2Fimages%2FImage-Locker.png?alt=media&token=1ce42802-2990-4821-a1a9-2286b07c514e"
        desc="An online image storage site built using React, Tailwind, and Google
        Firebase. Features user accounts, image storage/deletion and
        downloading. Authorization handled via Firebase and gallery filled
        using Storage and Firestore Database."
        site="https://photo-storage.vercel.app/"
        repo="https://github.com/AnthonyMejia0/photo-storage"
      />
    </div>
  );
}

export default Projects;
