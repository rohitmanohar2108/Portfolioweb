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
      className="min-h-screen bg-[url('https://images.unsplash.com/photo-1628771791803-7ee290de9893?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex flex-col justify-center items-center text-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-3 py-12">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 text-left space-y-4">
          <h1 className="text-7xl font-bold">Hi there!</h1>
          <h2 className="text-7xl font-bold ">I am</h2>
          <h3 className="text-7xl font-bold bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Rohit Manohar
          </h3>
          <p className="text-xl">
            I am a Computer Science student passionate about software
            development, web technologies, and problem-solving. Currently
            seeking opportunities to apply my skills in real-world projects.
          </p>

          <button className="px-5 py-2 flex items-center space-x-2 hover:bg-pink-800/65 text-xl font-semibold rounded-md">
            <a
              href="/path-to-your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Resume
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-1" />
            </a>
          </button>
        </div>

        {/* Right Side: Lottie Animation */}
        <motion.div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 -mx-24">
          <Lottie options={defaultOptions} height={700} width={700} />
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
