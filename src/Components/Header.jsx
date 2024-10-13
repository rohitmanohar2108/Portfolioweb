import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed w-full bg-black text-white shadow-md z-10">
      <nav className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">My Portfolio</div>
        <div className="space-x-4 text-base">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer px-4 py-2 rounded-lg hover:text-blue-400 hover:bg-pink-500/50  transition-all duration-300 ease-in-out"

          >
            Skills
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer px-4 py-2 rounded-lg hover:text-blue-400 hover:bg-pink-500/50 transition-all duration-300 ease-in-out"
          >
            Education
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer px-4 py-2 rounded-lg hover:text-blue-400 hover:bg-pink-500/50 transition-all duration-300 ease-in-out"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer px-4 py-2 rounded-lg hover:text-blue-400 hover:bg-pink-500/50 transition-all duration-300 ease-in-out"
          >
            Contact
          </Link>
          <Link
            to="certifications"
            smooth={true}
            duration={500}
            className="cursor-pointer px-4 py-2 rounded-lg hover:text-blue-400 hover:bg-pink-500/50 transition-all duration-300 ease-in-out"
          >
            Certifications
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
