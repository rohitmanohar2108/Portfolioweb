import React, { useState, useRef, useEffect } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
} from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiC } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
  const boxRefs = useRef([]); // Initialize boxRefs inside the component
  boxRefs.current = []; // Reset refs for each render

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    // Animation using GSAP with ScrollTrigger for each box
    boxRefs.current.forEach((box) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 50 }, // Starting state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: "top 80%", // Start when the top of the box reaches 80% of the viewport height
            end: "top 50%", // End when the top of the box reaches 50% of the viewport height
            toggleActions: "play none none reverse", // Play the animation when entering, reverse when leaving
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup ScrollTrigger instances on component unmount
    };
  }, []);

  // Function to register each ref
  const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-between "
    >
      {/* Skills Timelines on the Left */}
      <div className="w-full md:w-1/2 text-white p-5 flex flex-col items-center">
        <h2 className="text-6xl font-bold mb-10">Skills & Experience</h2>

        {/* Programming Languages Timeline */}
        <div className="relative border-l-2 border-white pl-10 mr-28 mb-16" ref={addToRefs}>
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Programming Languages
          </h3>
          {/* Dots */}
          <div className="absolute w-4 h-4 bg-white rounded-full -left-2 top-10 transform -translate-y-8"></div>
          <div className="grid grid-cols-3 gap-6 ml mb-10 relative">
            <div className="flex flex-col items-center">
              <FaJsSquare size={40} className="text-yellow-500" />
              <span className='text-sm'>JavaScript</span>
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
        <div className="relative border-l-2 border-white mb-16" ref={addToRefs}>
          <h3 className="text-2xl font-semibold mb-4 ml-12 bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Frameworks & Libraries
          </h3>
          {/* Dots */}
          <div className="absolute w-4 h-4 bg-white rounded-full -left-2 top-10 transform -translate-y-8"></div>
          <div className="grid grid-cols-3 gap-6 ml-5 mb-10 relative mr-20">
            <div className="flex flex-col items-center">
              <FaReact size={40} className="text-blue-400" />
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
        <div className="relative border-l-2 border-white pl-10 mr-56 mb-16" ref={addToRefs}>
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Tools
          </h3>
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
      <div className="w-full md:w-1/2 text-white p-5 flex flex-col items-center mb-[25%]">
        {/* Title */}


        {/* Experience 1 */}
        <div className="relative pl-10 mb-16" ref={addToRefs}>
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full border-l-2 border-blue-400"></div>

          {/* Dot */}
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-3 top-1/2 transform -translate-y-24"></div>

          {/* Content */}
          <div className="ml-4">
            <div className="mb-3 text-2xl font-bold bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              <strong>Member</strong> - TEDx NITK Surathkal Media Team
            </div>
            <div className="text-sm text-gray-400">Dec 2022 - Present</div>
            <ul className="list-disc list-inside mt-2 text-lg text-gray-300 mr-3 ">
              <li>
                Designed posters and promotional materials for TEDx events, enhancing <span className="ml-6">visual communication and branding efforts.</span> 
              </li>
              <li>
                Collaborated on media campaigns to boost event visibility and <span className="ml-6">engagement.</span>
              </li>
              <li>
                Technologies Used: Canva, Illustrator
              </li>
            </ul>
          </div>
        </div>

        {/* Experience 2 */}
        {/* Add more experiences here */}
      </div>
    </section>
  );
};

export default Skills;
