import { useRecoilValue } from "recoil";
import { darkState } from "../atoms/darkAtom";

function Project({ color, name, tools, position, img, desc, site, repo }) {
  const darkMode = useRecoilValue(darkState);

  return (
    <div className="">
      <div
        style={{ backgroundColor: color, textAlign: position }}
        className={`h-56 lg:h-64 z-0 text-white font-playfair tracking-wide py-8 px-10 2xl:pt-16 2xl:pl-20 space-y-1 xl:space-y-3`}
      >
        <h2 className="font-bold text-3xl lg:text-5xl">{name}</h2>
        <p className="font-bold">{tools}</p>
      </div>

      <div className="mx-8 -mt-24">
        <div className="overflow-hidden rounded-sm xs:w-full sm:w-[80%] lg:w-[40%] 2xl:w-[45%] mx-auto mb-8">
          <img
            className="scale-[100.5%]"
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

export default Project;
