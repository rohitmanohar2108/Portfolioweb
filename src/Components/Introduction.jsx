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
    <section id="introduction" className="min-h-screen bg-black font-dm-sans">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-3 py-12">
        <div className="absolute bg-blue-900 bg-opacity-20 rounded-full h-[80%] w-[60%] blur-3xl ml-[10%] mb-20"></div>
        <div className="absolute bg-blue-900 bg-opacity-20 h-[100%] w-[2%] blur-xl ml-[83%] mb-20 rounded-full rounded-t-none rounded-b-none"></div>
        <div className="absolute bg-blue-900 bg-opacity-20 h-[100%] w-[2%] blur-2xl ml-[89%] mb-20 rounded-full rounded-t-none rounded-b-none"></div>
        <div className="absolute bg-blue-900 bg-opacity- h-[100%] w-[2%] blur-3xl ml-[86%] mb-20 rounded-full rounded-t-none rounded-b-none"></div>

        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 text-left space-y-4 relative mt-24">
          <h1 className="text-7xl font-bold text-white">Hi there!</h1>
          <h2 className="text-7xl font-bold text-white">I am</h2>
          <div className="flex items-center justify-between">
            <motion.h3
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="text-7xl font-bold bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              Rohit Manohar
            </motion.h3>
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

          <p className="text-lg text-gray-400">
            I am a Computer Science student passionate about software
            development, web technologies, and problem-solving. Currently
            seeking opportunities to apply my skills in real-world projects.
          </p>

          <button className="px-3 py-2 flex items-center text-white space-x-2 bg-zinc-800 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-white text-lg  rounded">
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
