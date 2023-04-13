import { useRecoilValue } from "recoil";
import { darkState } from "../atoms/darkAtom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function WebProject({ color, name, tools, position, img, desc, site, repo }) {
  const darkMode = useRecoilValue(darkState);
  const projRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      projRef.current,
      { y: 200 },
      {
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: projRef.current,
        },
      }
    );
  }, []);

  return (
    <div ref={projRef}>
      <div
        style={{ backgroundColor: color, textAlign: position }}
        className={`h-56 lg:h-64 z-0 text-white font-playfair tracking-wide py-8 px-10 2xl:pt-16 2xl:pl-20 space-y-1 xl:space-y-3`}
      >
        <h2 className="font-bold text-3xl lg:text-5xl text-shadow">{name}</h2>
        <p className="font-bold text-shadow">{tools}</p>
      </div>

      <div className="mx-8 -mt-24">
        <div className="overflow-hidden rounded-sm xs:w-full sm:w-[80%] lg:w-[40%] 2xl:w-[45%] mx-auto mb-8 shadow">
          <img
            className="scale-[100.7%] w-full h-full"
            src={img}
            alt={`${name} Screenshot`}
          />
        </div>
        <div className="mb-2">
          <p
            className={`project-p text-center mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {desc}
          </p>
        </div>

        <div className="flex space-x-3 items-center justify-center py-5">
          <a
            href={site}
            target="_blank"
            rel="noreferrer"
            className={`project-button ${
              darkMode
                ? "bg-offwhite text-dark-blue hover:bg-dark-orange hover:text-white"
                : "bg-dark-blue hover:bg-dark-orange"
            }`}
          >
            Visit Site
          </a>
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className={`project-button ${
              darkMode
                ? "bg-offwhite text-dark-blue hover:bg-dark-orange hover:text-white"
                : "bg-dark-blue hover:bg-dark-orange"
            }`}
          >
            View Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default WebProject;
