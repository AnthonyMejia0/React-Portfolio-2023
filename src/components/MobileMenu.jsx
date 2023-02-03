import gsap from "gsap";
import React, { useEffect } from "react";
import { scrollTo } from "../scroll";

function MobileMenu({ menuOpen, setMenuOpen }) {
  const goTo = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  useEffect(() => {
    let menu = document.getElementById("menu");

    if (menuOpen) {
      menu.style.height = "50px";
      gsap.from(".nav", { duration: 1, opacity: 0, stagger: 0.2 });
    } else {
      menu.style.height = 0;
    }
  }, [menuOpen]);
  return (
    <div
      id="menu"
      className="flex items-center justify-evenly max-w-lg ml-auto md:hidden bg-black transition-all"
    >
      {/* <a className={`nav navLink ${!menuOpen ? "hidden" : ""}`} href="/">
        Home
      </a> */}
      <button
        onClick={() => goTo("about")}
        className={`nav navLink ${!menuOpen ? "hidden" : ""}`}
        href="/"
      >
        About
      </button>
      <button
        onClick={() => goTo("projects")}
        className={`nav navLink ${!menuOpen ? "hidden" : ""}`}
        href="/"
      >
        Projects
      </button>
      <button className={`nav navLink ${!menuOpen ? "hidden" : ""}`} href="/">
        Contact
      </button>
    </div>
  );
}

export default MobileMenu;
