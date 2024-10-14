import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion"; // Ensure framer-motion is installed
import animationDataTwo from "../Animations/animationtwo.json"; // Adjust the path accordingly

const Introduction = () => {
  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: animationDataTwo, // Ensure the correct path for your animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // College logo URL
  const collegeLogoUrl =
    "https://parthmittal.netlify.app/assets/nitk.5583c896.png";
  const clgLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1yUAOqpOpI0oog2XFKh6Nesraz-iqXtIuw&s";

  return (
    <section
      id="introduction"
      className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center"
    >
      {/* Animation on the left */}
      <motion.div className="w-full md:w-1/2 flex justify-center mt-8 mb-44 md:mt-0">
        <Lottie options={defaultOptionsTwo} height={500} width={500} />
      </motion.div>

      {/* Introduction text on the right */}
      <div className="w-full md:w-1/2 text-white p-5 flex flex-col items-start mb-80">
        <h1 className="font-bold text-6xl mb-20">Education </h1>

        {/* College logo and details below the introduction */}
        <div className="flex items-center mt-6 px-7 py-7 rounded-3xl hover:bg-gradient-to-br from-white/20 to-blue-500/20">
          <img
            src={collegeLogoUrl} // Using the logo URL directly
            alt="NITK Surathkal Logo"
            className="w-28 h-auto mr-4" // Adjust width as needed
          />
          <div>
            <p className="text-2xl font-bold  bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              National Institute of Technology Karnataka, Surathkal
            </p>
            <p className="text-lg mt-2">
              Bachelor of Technology in Computer Science and Engineering
            </p>
            <p className="text-lg text-gray-400">2022 - Present</p>
          </div>
        </div>
        <div className="flex items-center mt-6 px-9 py-9 rounded-3xl hover:bg-gradient-to-br from-white/20 to-blue-500/20">
          <img
            src={clgLogo} // Using the logo URL directly
            alt="NITK Surathkal Logo"
            className="w-28 h-auto mr-4" // Adjust width as needed
          />
          <div>
            <p className="text-2xl font-bold  bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Dharampeth M.P. Deo Memorial Science College, Nagpur
            </p>
            <p className="text-lg">
              Secondary Education
            </p>
            <p className="text-lg text-gray-400">2020 - 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
