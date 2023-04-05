import React from "react";
import { BiTerminal } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { darkState } from "../atoms/darkAtom";

function SoftwareProject({ title, description, languages, icons }) {
  const darkMode = useRecoilValue(darkState);

  return (
    <div
      className={`flex flex-col justify-between w-[85vw] md:w-[90%] rounded-md my-[2rem] mx-auto p-1 ${
        darkMode ? "bg-offwhite" : "bg-dark-blue"
      }`}
    >
      <div className="flex justify-between items-center py-[0.5rem] px-[0.7rem] mb-[5px]">
        <BiTerminal
          className={`text-[35px] ${
            darkMode ? "text-gray-600" : "text-dark-orange"
          }`}
        />
        <div
          className={`flex ${darkMode ? "text-gray-600" : "text-dark-orange"}`}
        >
          {icons}
        </div>
      </div>
      <div
        className={`text-center py-[5px] px-0 font-bold text-[25px] mb-[1rem] ${
          darkMode ? "text-dark-blue" : "text-offwhite"
        }`}
      >
        {title}
      </div>
      <div
        className={`text-center mt-[5px] py-[5px] px-[1rem] text-[20px] ${
          darkMode ? "text-gray-500" : "text-gray-400"
        }`}
      >
        {description}
      </div>
      <div
        className={`py-[5px] px-[1rem] my-[1rem] font-semibold ${
          darkMode ? "text-gray-600" : "text-dark-orange"
        }`}
      >
        {languages}
      </div>
    </div>
  );
}

export default SoftwareProject;
