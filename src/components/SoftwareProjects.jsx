import React, { useEffect } from "react";
import SoftwareProject from "./SoftwareProject";
import { BsYoutube, BsGithub } from "react-icons/bs";
import { gsap } from "gsap";

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
      <SoftwareProject
        title="Delve The Dungeon"
        description="My UCR senior project. A 2D Deck building game built with Unity game engine. Designed and built over the course of 10 weeks and managed using the Scrum methodology."
        languages={
          <ul>
            <li>Unity</li>
            <li>C#</li>
          </ul>
        }
        icons={[
          <a
            key={0}
            className="project-a"
            href="https://youtu.be/eYuwrdHKdsc"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube className="project-icon" />
          </a>,
        ]}
      />

      <SoftwareProject
        title="Airline Database Manager"
        description="A Database Systems Administration Project at UCR. Program to create, manage, and modify flight plans as well as retrieve passenger information based on each flight."
        languages={
          <ul>
            <li>PostgreSQL</li>
            <li>Java</li>
          </ul>
        }
        icons={[
          <a
            key={1}
            className="project-a"
            href="https://github.com/AnthonyMejia0/CS166-Final-Project"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="project-icon" />
          </a>,
        ]}
      />

      <SoftwareProject
        title="Accident Severity Prediction"
        description="Machine learning project to predict the severity of car accidents. Program used existing accident reports and predicted its severity based on details such as, weather, road conditions, passengers, and vehicle type."
        languages={
          <ul>
            <li>Python</li>
            <li>Pandas</li>
            <li>Scikit Learn</li>
          </ul>
        }
        icons={[
          <a
            key={2}
            className="project-a"
            href="https://github.com/AnthonyMejia0/CS170-ML-Project"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="project-icon" />
          </a>,
        ]}
      />

      <SoftwareProject
        title="Embedded Snake Game"
        description="An embedded systems project recreating the classic Snake Game on hardware. Project uses an LED Matrix, LCD Display, and a Joystick to display and play the game."
        languages={
          <ul>
            <li>Embedded C</li>
            <li>ATmega1284P-PU</li>
          </ul>
        }
        icons={[
          <a
            key={3}
            className="project-a"
            href="https://github.com/AnthonyMejia0/CS120B-SnakeGame"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="project-icon" />
          </a>,
          <a
            key={4}
            className="project-a"
            href="https://www.youtube.com/watch?v=iAvEMSA0AVU"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube className="project-icon" />
          </a>,
        ]}
      />

      <SoftwareProject
        title="Raspberry Pi RFID Door Lock"
        description="An embedded systems project representing a door locking mechanism using an RFID scanner, keycards, keypad, and a servo motor to simulate locking and unlocking. Keycard info and password are also modifiable and removable."
        languages={
          <ul>
            <li>Embedded C</li>
            <li>ATmega1284P-PU</li>
          </ul>
        }
        icons={[
          <a
            key={5}
            className="project-a"
            href="https://github.com/AnthonyMejia0/CS122A-Final-Project"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="project-icon" />
          </a>,
          <a
            key={6}
            className="project-a"
            href="https://www.youtube.com/watch?v=6YsKKifXEaM"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube className="project-icon" />
          </a>,
        ]}
      />

      <SoftwareProject
        title="Ray Tracer"
        description="Ray Tracing project which takes predefined image specifications and applies ambient, diffuse, and specular lighting as well as shadows and reflection. Reflection recursion is modifiable to allow for a greater or lesser effect."
        languages={
          <ul>
            <li>C++</li>
          </ul>
        }
        icons={[
          <a
            key={7}
            className="project-a"
            href="https://github.com/AnthonyMejia0/CS130-Final-Project"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="project-icon" />
          </a>,
        ]}
      />
    </div>
  );
}

export default SoftwareProjects;
