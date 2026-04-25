import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

function Skills() {
  const skillsRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0 },
      {
        opacity: 100,
        duration: 250,
        scrollTrigger: {
          trigger: skillsRef.current,
        },
      },
    );
  }, []);

  return (
    <div
      ref={skillsRef}
      className="mt-14 2xl:mt-16 xl:mx-[5rem] grid grid-cols-3 content-center justify-items-center gap-y-8 lg:gap-10 xl:flex xl:flex-nowrap xl:justify-between xl:gap-0"
    >
      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        alt="React Icon"
      />
      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        alt="Next.js Icon"
      />
      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        alt="Typescript Icon"
      />
      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
        alt="Supabase Icon"
      />
      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg"
        alt="Expo icon"
      />
      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        alt="Tailwind Icon"
      />
      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
        alt="PostgreSQL Icon"
      />

      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
        alt="Firebase Icon"
      />
      {/* <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        alt="Linux Icon"
      /> */}
      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
        alt="Flutter Icon"
      />
      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        alt="C++ Icon"
      />
      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        alt="C# Icon"
      />
      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
        alt="Python Icon"
      />
    </div>
  );
}

export default Skills;
