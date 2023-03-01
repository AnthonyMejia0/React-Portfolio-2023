import React from "react";

function AboutMe() {
  return (
    <div id="about" className="relative mx-10 lg:mx-20 2xl:mx-32">
      <div className="w-[75%] max-w-[375px] rounded-full overflow-hidden opacity-80 mx-auto mb-10">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/photo-storage-c9aa3.appspot.com/o/users%2FLFY5EeJo8nUoxlr5JslEEefXrUB2%2Fimages%2F20180220_211309.jpg?alt=media&token=113a30e0-5083-4c33-883b-285d57d3cc31"
          alt="Anthony Mejia"
        />
      </div>

      <h2 className="mx-auto font-bold text-3xl lg:text-5xl text-dark-blue w-max font-playfair">
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
    </div>
  );
}

export default AboutMe;
