import React from "react";
import { FaReact, FaNodeJs, FaJsSquare, FaCss3Alt, FaGitAlt, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiC } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500/20">
      
      {/* Skills Timelines on the Left */}
      <div className="w-full md:w-1/2 text-white p-5 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        {/* Programming Languages Timeline */}
        <div className="relative border-l-2 border-white pl-10 mr-28 mb-16">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Programming Languages</h3>
          {/* Dots */}
          <div className="absolute w-4 h-4 bg-white rounded-full -left-2 top-10 transform -translate-y-8"></div>
          <div className="grid grid-cols-3 gap-6 ml mb-10 relative">
            <div className="flex flex-col items-center">
              <FaJsSquare size={40} className="text-yellow-500" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiC size={40} className="text-blue-300" />
              <span>C</span>
            </div>
            <div className="flex flex-col items-center">
              <SiCplusplus size={40} className="text-blue-500" />
              <span>C++</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt size={40} className="text-blue-500" />
              <span>CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <FaHtml5 size={40} className="text-red-500" />
              <span>HTML</span>
            </div>
          </div>
        </div>

        {/* Frameworks & Libraries Timeline */}
        <div className="relative  border-l-2 border-white   mb-16">
          <h3 className="text-2xl font-semibold mb-4 ml-12 bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Frameworks & Libraries</h3>
          {/* Dots */}
          <div className="absolute w-4 h-4 bg-white rounded-full -left-2 top-10 transform -translate-y-8 "></div>
          <div className="grid grid-cols-3 gap-6 ml-5 mb-10 relative mr-20">
            <div className="flex flex-col items-center ">
              <FaReact size={40} className="text-blue-400 " />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs size={40} className="text-green-500" />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss size={40} className="text-blue-500" />
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Tools Timeline */}
        <div className="relative border-l-2 border-white pl-10 mr-56 mb-16">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Tools</h3>
          {/* Dots */}
          <div className="absolute w-4 h-4 bg-white rounded-full -left-2 top-10 transform -translate-y-8"></div>
          <div className="grid grid-cols-3 gap-6 mb-10 relative">
            <div className="flex flex-col items-center">
              <FaGitAlt size={40} className="text-orange-500" />
              <span>Git</span>
            </div>
            
          </div>
        </div>
      </div>

      {/* Experience Timeline on the Right */}
      <div className="w-full md:w-1/2 text-white p-5 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-10">Professional Experience</h2>
        <div className="relative border-l-2 border-blue-400 pl-10">
          {/* Experience 1 */}
          <div className="mb-10 ml-4 relative">
            {/* Dot */}
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-7 top-1/2 transform -translate-y-1/2"></div>
            <div className="mb-3">
              <strong>Frontend Developer</strong> - ABC Corp
            </div>
            <div className="text-sm text-gray-400">
              Jan 2023 - Present
            </div>
          </div>

          {/* Experience 2 */}
          <div className="mb-10 ml-4 relative">
            {/* Dot */}
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-7 top-1/2 transform -translate-y-1/2"></div>
            <div className="mb-3">
              <strong>Intern</strong> - XYZ Ltd
            </div>
            <div className="text-sm text-gray-400">
              Jun 2022 - Dec 2022
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
