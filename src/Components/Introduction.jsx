import React from "react";
import Lottie from "react-lottie"; // Make sure you have imported the Lottie component
import { motion } from "framer-motion"; // For motion animation
import animationData from "../Animations/animation.json";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const Introduction = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section
      id="introduction"
      className="min-h-screen bg-black"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-3 py-12">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 text-left space-y-4 relative mt-24">
          <h1 className="text-7xl font-bold text-white">Hi there!</h1>
          <h2 className="text-7xl font-bold text-white">I am</h2>
          <div className="flex items-center justify-between">
            <h3 className="text-7xl font-bold bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent ">
              Rohit Manohar
            </h3>
            {/* Let's Connect Button - Moved to Right */}
            <button className="absolute right-0 h-36 w-36 rounded-full flex flex-col items-center justify-center -mx-16 mb-52 border-2 border-sky-400 text-xl font-semibold bg-white  bg-clip-text text-transparent">
              <a
                href="https://www.linkedin.com/in/rohit-manohar-80b949207/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <ArrowTopRightOnSquareIcon className="w-6 h-6 mb-2 text-white" />
                Let's <br /> Connect
              </a>
            </button>
          </div>

          <p className="text-xl text-gray-400">
            I am a Computer Science student passionate about software development, web technologies, and problem-solving. Currently seeking opportunities to apply my skills in real-world projects.
          </p>

          <button className="px-3 py-2 flex items-center text-white space-x-2 hover:bg-pink-800/65 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-pink-800 text-lg font- rounded-sm">
            <a
              href="/path-to-your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center "
            >
              Resume
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-1" />
            </a>
          </button>
        </div>

        {/* Right Side: Lottie Animation */}
        <motion.div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 -mx-24 cursor-none">
          <Lottie options={defaultOptions} height={700} width={700} />
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;

