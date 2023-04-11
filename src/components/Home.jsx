import React, { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import MobileMenu from "./MobileMenu";
import gsap from "gsap";
import { scrollTo } from "../scroll";
import ScrollToTop from "react-scroll-to-top";
import { useRecoilState } from "recoil";
import { darkState } from "../atoms/darkAtom";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useRecoilState(darkState);

  useEffect(() => {
    gsap.from(".side", {
      duration: 1,
      x: -50,
    });

    gsap.to(".side", {
      duration: 1,
      x: 0,
    });
  }, []);

  useEffect(() => {
    gsap.from(".big-nav", {
      duration: 1.5,
      opacity: 0,
      stagger: 0.35,
    });
    gsap.to(".big-nav", { duration: 1.5, opacity: 1, stagger: 0.35 });
  }, [menuOpen]);

  return (
    <div id="home">
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="relative w-screen h-screen">
        <div
          className={`side absolute -rotate-90 top-20 left-[-45px] font-cursive text-lg tracking-wider ${
            darkMode ? "text-offwhite" : "text-dark-blue"
          }`}
        >
          Anthony Mejia.
        </div>

        <div
          className={`flex space-x-3 md:hidden absolute top-4 right-3 ${
            darkMode ? "text-offwhite" : "text-dark-blue"
          }`}
        >
          <button
            className="hover:text-dark-orange"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun size={24} /> : <MdOutlineDarkMode size={24} />}
          </button>
          <button
            className="hover:text-dark-orange"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen && <BiMenuAltLeft size={38} />}
            {menuOpen && <IoClose size={34} />}
          </button>
        </div>

        <div
          className={`hidden md:flex space-x-8 items-center justify-center w-min ml-auto pt-5 mr-10 font-cursive text-xl ${
            darkMode ? "text-offwhite" : "text-dark-blue"
          }`}
        >
          <div className="flex items-center space-x-2">
            <MdOutlineDarkMode size={13} />
            <button
              aria-label="dark mode toggle"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative h-3 w-6 rounded-full ${
                darkMode ? "bg-gray-500" : "bg-dark-orange"
              }`}
            >
              <div
                className={`absolute bg-white h-3 w-3 rounded-full top-0 ${
                  darkMode ? "left-0" : "right-0"
                }`}
              ></div>
            </button>
            <FiSun size={13} />
          </div>

          <button
            onClick={() => scrollTo("about")}
            className="big-nav hover:text-dark-orange"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="big-nav hover:text-dark-orange"
            href="/"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="big-nav hover:text-dark-orange"
            href="/"
          >
            Contact
          </button>
        </div>

        <div className="absolute top-[40%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-max">
          <h2 className="welcome font-semibold text-3xl lg:text-5xl text-gray-500">
            WELCOME.
          </h2>
          <h1
            className={`text-5xl lg:text-[5rem] font-semibold ${
              darkMode ? "text-offwhite" : "text-dark-blue"
            }`}
          >
            I'm Anthony
          </h1>
          <div className="text-2xl lg:text-4xl text-dark-orange mt-2">
            <Typewriter
              options={{
                cursor: "▌",
                strings: [
                  "Web Developer.",
                  "Software Developer.",
                  "Freelancer.",
                  "Tech Enthusiast.",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 1000,
              }}
            />
          </div>
        </div>

        <div
          className={`side absolute top-1/2 -translate-y-1/2 left-2 flex flex-col space-y-5 ${
            darkMode ? "text-offwhite" : "text-dark-blue"
          }`}
        >
          <a
            aria-label="Visit My GitHub"
            href="https://github.com/AnthonyMejia0"
            target="_blank"
            rel="noreferrer"
            className="hover:text-dark-orange"
          >
            <AiFillGithub size={18} />
          </a>
          <a
            aria-label="Visit My LinkedIn"
            href="https://www.linkedin.com/in/anthony-mejia-84169b172"
            target="_blank"
            rel="noreferrer"
            className="hover:text-dark-orange"
          >
            <AiFillLinkedin size={18} />
          </a>
          <a
            aria-label="Visit My YouTube Page"
            href="https://www.youtube.com/channel/UCqfTZe21vlUhOUqeR59bxcQ"
            target="_blank"
            rel="noreferrer"
            className="hover:text-dark-orange"
          >
            <AiFillYoutube size={18} />
          </a>
        </div>

        <ScrollToTop
          top={300}
          color="#FAF9F6"
          height="20"
          width="100"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "#BE7C4D",
            boxShadow: "none",
            marginRight: "-15px",
            marginBottom: "-15px",
          }}
          smooth
        />
      </div>
    </div>
  );
}

export default Home;
