import React from "react";

function AboutMe() {
  return (
    <div id="about" className="relative mx-10 lg:mx-20 mb-52">
      <div className="2xl:hidden xs:w-full sm:w-[20rem] md:w-[21rem] h-[19rem] overflow-hidden rounded-lg opacity-80 hover:opacity-100 transition-all mb-10">
        <img
          className="w-full aspect-auto rounded-lg"
          src="https://firebasestorage.googleapis.com/v0/b/photo-storage-c9aa3.appspot.com/o/users%2FLFY5EeJo8nUoxlr5JslEEefXrUB2%2Fimages%2F20180220_211309.jpg?alt=media&token=113a30e0-5083-4c33-883b-285d57d3cc31"
          alt="Anthony Mejia"
        />
      </div>
      <h2 className="font-bold text-3xl lg:text-5xl text-dark-blue pr-2 pb-1 w-max font-playfair shadow-highlight">
        A Little About Me
      </h2>
      <p className="about-p">
        I'm 26 years old and have a Bachelor's Degree in Computer Science from
        UC Riverside. I know learning is a never ending process, so I do my best
        to stay up to date and keep my mind working.
      </p>

      <p className="about-p">
        Lately I've had a lot of fun building websites and continue to test my
        skills while adding new tools to my workflow. My main focus has been on
        Full-Stack Web Development using tools such as React, Tailwind, NodeJs
        and Google Firebase.
      </p>

      <p className="about-p">
        When I'm not building something, I like to play basketball, video games
        or listen to music. I am currently looking for an opportunity to begin
        my career and look forward to putting my acquired knowledge to use.
      </p>

      <div className="hidden absolute 2xl:block top-1/2 -translate-y-1/2 right-0 w-[26rem] h-auto overflow-hidden rounded-lg opacity-80 hover:opacity-100 transition-all mb-10">
        <img
          className="w-full aspect-auto rounded-lg"
          src="https://firebasestorage.googleapis.com/v0/b/photo-storage-c9aa3.appspot.com/o/users%2FLFY5EeJo8nUoxlr5JslEEefXrUB2%2Fimages%2F20180220_211309.jpg?alt=media&token=113a30e0-5083-4c33-883b-285d57d3cc31"
          alt="Anthony Mejia"
        />
      </div>
    </div>
  );
}

export default AboutMe;
