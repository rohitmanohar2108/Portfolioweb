import React, { useState, useRef, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiJquery } from 'react-icons/si';
import { AiOutlineOpenAI } from "react-icons/ai";
import { FcElectronics } from "react-icons/fc";
import { GrMysql } from "react-icons/gr";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    name: 'Film Ninja',
    image: 'https://do6gp1uxl3luu.cloudfront.net/projects/netflixProject.png',
    techStack: [
      { name: 'React', icon: <SiReact className="inline w-5 h-5 text-white" /> },
      { name: 'JavaScript', icon: <SiJavascript className="inline w-5 h-5 text-white" /> },
      { name: 'Tailwindcss', icon: <SiTailwindcss className="inline w-5 h-5 text-white" /> },
      { name: 'OpenAi', icon: <AiOutlineOpenAI className="inline w-5 h-5 text-white" /> },
    ],
    description: 'Built a responsive movie browsing app with real-time data and smart suggestions, featuring optimized search and secure user authentication.',
    githubLink: 'https://github.com/rohitmanohar2108/FilmNinja',
  },
  {
    id: 2,
    name: 'Operating System Simulator',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaYf8IsbR8uD-69yYhlNmLHl4FeENpJhHlA&s',
    techStack: [
      { name: 'HTML5', icon: <SiHtml5 className="inline w-5 h-5 text-white" /> },
      { name: 'CSS3', icon: <SiCss3 className="inline w-5 h-5 text-white" /> },
      { name: 'NodeJS', icon: <SiNodedotjs className="inline w-5 h-5 text-white" /> },
      { name: 'JQuery', icon: <SiJquery className="inline w-5 h-5 text-white" /> },
    ],
    description: 'Developed a web app to simulate and visualize FIFO, LRU, and Optimal page replacement algorithms, enhancing understanding of memory management and system performance optimization.',
    githubLink: 'https://github.com/rohitmanohar2108/OS-LAB-PROJECT',
  },
  {
    id: 3,
    name: 'Airlines Reservation System',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4niMvPT8O32HP7DBPtM1SFndUKi3ZZumyKA&s',
    techStack: [
      { name: 'React', icon: <SiReact className="inline w-5 h-5 text-white" /> },
      { name: 'JavaScript', icon: <SiJavascript className="inline w-5 h-5 text-white" /> },
      { name: 'MySql', icon: <GrMysql className="inline w-5 h-5 text-white" /> },
    ],
    description: 'Effective airline management relies on online booking systems to enhance customer experience, streamline operations, and boost profitability. These systems improve reservations, reduce errors, and provide valuable data for tailored services and marketing.',
    githubLink: 'https://github.com/user/project-three',
  },
  {
    id: 4,
    name: 'The Chess Clock',
    image: 'https://media.istockphoto.com/id/1127280074/vector/chess-clock-vector-icon-filled-flat-sign-for-mobile-concept-and-web-design-chess-stopwatch.jpg?s=612x612&w=0&k=20&c=LufQPq0W7VBw8OA92ZtodE27E4Jg9LpSPzJ03jXY1Wo=',
    techStack: [
      { name: 'Digital Electronic', icon: <FcElectronics className="inline w-5 h-5 text-white" /> },
      
    ],
    description: 'Created a digital chess clock system with a user-friendly LCD interface and customizable time settings. It supports dual-clock mode for tournaments and includes audio cues for accessibility, enhancing the overall chess experience.',
    githubLink: 'https://github.com/rohitmanohar2108/DDS-Mini-Project-23-24-The-Chess-Clock',
  },
  {
    id: 5,
    name: 'PortfolioWeb',
    image: 'https://parthmittal.netlify.app/assets/portfolio.a3d12760.jpg',
    techStack: [
      { name: 'React', icon: <SiReact className="inline w-5 h-5 text-white" /> },
      { name: 'JavaScript', icon: <SiJavascript className="inline w-5 h-5 text-white" /> },
      { name: 'Tailwindcss', icon: <SiTailwindcss className="inline w-5 h-5 text-white" /> },
    ],
    description: 'Created an interactive portfolio website that highlights skills and projects with modern design and animations. Included a contact form and social media links to facilitate user engagement and connections.',
    githubLink: 'https://github.com/rohitmanohar2108/Portfolioweb',
  },
];

const Projects = () => {
  const [tooltip, setTooltip] = useState({ visible: false, content: '' });
  const boxRefs = useRef([]); // Create a ref array for the boxes

  const handleMouseEnter = (name) => {
    setTooltip({ visible: true, content: name });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, content: '' });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    boxRefs.current.forEach((box, index) => {
      // Animation using GSAP with ScrollTrigger for each box
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

  return (
    <section id="projects" className="min-h-screen bg-black p-5">
      <h2 className="text-6xl font-bold text-white mb-16 ml-16">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            ref={el => (boxRefs.current[index] = el)} // Assign each ref to the respective project box
            className={
              "border border-gray-500 hover:bg-gradient-to-br from-white/20 to-blue-500/20 hover:border-transparent rounded-lg shadow-lg p-5 py-9 flex flex-col items-center transition-colors duration-200 ease-in-out"
            }
          >
            {/* Circular Image on the Top */}
            <div className="flex-shrink-0">
              <img
                src={project.image}
                alt={project.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-white mb-4"
              />
            </div>

            {/* Project Details */}
            <div className="text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">{project.name}</h3>
              <div className="flex justify-center space-x-6 my-4">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center"
                    onMouseEnter={() => handleMouseEnter(tech.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                  
                    {tech.icon} {/* Render the icon */}
                    {tooltip.visible && tooltip.content === tech.name && (
                      <span className="absolute top-full mt-1 text-xs text-white border border-zinc-500 bg-zinc-800 p-1 rounded">
                        {tooltip.content} {/* Tooltip text */}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 mt-3 px-3">
                {project.description}
              </p>

              {/* GitHub Link */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                <FaGithub className="mr-1" /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
