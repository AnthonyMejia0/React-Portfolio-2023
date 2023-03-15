import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const imageRef = useRef();
  const pRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: imageRef.current,
        },
      }
    );

    gsap.fromTo(
      pRef.current,
      { y: 100 },
      {
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: pRef.current,
        },
      }
    );
  }, []);

  return (
    <div id="about" className="relative mx-10 mt-5 lg:mx-20 2xl:mx-32">
      <div className="w-[75%] max-w-[375px] rounded-[50%] overflow-hidden opacity-80 mx-auto mb-10">
        <img
          ref={imageRef}
          className="scale-105"
          src="https://firebasestorage.googleapis.com/v0/b/photo-storage-c9aa3.appspot.com/o/users%2FLFY5EeJo8nUoxlr5JslEEefXrUB2%2Fimages%2F20180220_211309.jpg?alt=media&token=113a30e0-5083-4c33-883b-285d57d3cc31"
          alt="Anthony Mejia"
        />
      </div>

      <h2 className="mx-auto font-bold text-3xl lg:text-5xl text-dark-blue w-max font-playfair">
        A Little About Me
      </h2>

      <div ref={pRef}>
        <p className="about-p">
          I'm 26 years old and have a Bachelor's Degree in Computer Science from
          UC Riverside. I know learning is a never ending process, so I do my
          best to stay up to date and keep my mind working.
        </p>

        <p className="about-p">
          Lately I've had a lot of fun building websites and continue to test my
          skills while adding new tools to my workflow. My main focus has been
          on Full-Stack Web Development using tools such as React, Tailwind,
          NodeJs and Google Firebase.
        </p>

        <p className="about-p">
          When I'm not building something, I like to play basketball, video
          games or listen to music. I am currently looking for an opportunity to
          begin my career and look forward to putting my acquired knowledge to
          use.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
