import React, { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import MobileMenu from "./MobileMenu";
import gsap from "gsap";
import { scrollTo } from "../scroll";
import ScrollToTop from "react-scroll-to-top";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="absolute -rotate-90 top-20 left-[-45px] font-cursive text-lg tracking-wider text-dark-blue">
          Anthony Mejia.
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden absolute top-4 right-3 text-dark-blue"
        >
          {!menuOpen && <BiMenuAltLeft size={38} />}
          {menuOpen && <IoClose size={34} />}
        </button>

        <div className="hidden md:flex space-x-8 w-min ml-auto pt-5 mr-10 text-dark-blue font-cursive text-xl">
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
          <h1 className="text-5xl lg:text-[5rem] font-semibold text-dark-blue">
            I'm Anthony
          </h1>
          <div className="text-2xl lg:text-4xl text-dark-orange mt-2">
            <Typewriter
              options={{
                cursor: "▌",
                strings: [
                  "Web Developer.",
                  "Software Developer.",
                  "Tech Enthusiast.",
                  "",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 1000,
              }}
            />
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-2 flex flex-col space-y-5 text-dark-blue">
          <a
            href="https://github.com/AnthonyMejia0"
            target="_blank"
            rel="noreferrer"
            className="hover:text-dark-orange"
          >
            <AiFillGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-mejia-84169b172"
            target="_blank"
            rel="noreferrer"
            className="hover:text-dark-orange"
          >
            <AiFillLinkedin size={18} />
          </a>
          <a
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
