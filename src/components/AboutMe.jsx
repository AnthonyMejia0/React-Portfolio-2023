import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRecoilValue } from "recoil";
import { darkState } from "../atoms/darkAtom";
import Me from "../images/Anthony.webp";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const darkMode = useRecoilValue(darkState);
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
    <div
      id="about"
      className={`relative mx-10 mt-5 lg:mx-20 2xl:mx-32 ${
        darkMode ? "text-gray-400" : "text-gray-500"
      }`}
    >
      <div
        className={`w-[75%] max-w-[375px] rounded-[50%] overflow-hidden mx-auto mb-10 ${
          darkMode ? "opacity-100" : "opacity-80"
        }`}
      >
        <img
          ref={imageRef}
          className="scale-105 w-full h-full"
          src={Me}
          alt="Anthony Mejia"
        />
      </div>

      <h2
        className={`mx-auto font-bold text-3xl lg:text-5xl w-max font-playfair ${
          darkMode ? "text-offwhite" : "text-dark-blue"
        }`}
      >
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
