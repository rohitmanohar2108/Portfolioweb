import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = {
  All: [
    {
      id: 1,
      image: "https://do6gp1uxl3luu.cloudfront.net/projects/netflixProject.png",
      title: "Film Ninja",
      description: "Web Dev",
      link: "#",
    },
    {
      id: 2,
      image:
        "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_33ipk61D9T6AhM1YK67rmpvPzvjG%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_J7U1tK6HyWhqP85jf6hbzXqbCUyS",
      title: "Portfolio",
      description: "Web Design",
      link: "https://ro-portfolio-olive.vercel.app/",
    },
    {
      id: 4,
      image:
        "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_6aZ9wP5gZaNDPNPYKNzpWWvDojWM%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_J7U1tK6HyWhqP85jf6hbzXqbCUyS",
      title: "Personal Portfolio",
      description: "Web Dev",
      link: "https://personal-portfolio-kappa-teal.vercel.app/",
    },
  ],
  "Web Development": [
    {
      id: 1,
      image: "https://do6gp1uxl3luu.cloudfront.net/projects/netflixProject.png",
      title: "Film Ninja",
      description: "Web Dev",
      link: "#",
    },
  ],
  "Web Design": [
    {
      id: 1,
      image:
        "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_33ipk61D9T6AhM1YK67rmpvPzvjG%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_J7U1tK6HyWhqP85jf6hbzXqbCUyS",
      title: "Portfolio",
      description: "Web Design",
      link: "https://ro-portfolio-olive.vercel.app/",
    },
    {
      id: 2,
      image:
        "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_6aZ9wP5gZaNDPNPYKNzpWWvDojWM%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_J7U1tK6HyWhqP85jf6hbzXqbCUyS",
      title: "Personal Portfolio",
      description: "Web Design",
      link: "https://personal-portfolio-kappa-teal.vercel.app/",
    },
  ],
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const boxRef = useRef(null);

  // GSAP animations
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, stagger: 0.2 }
    );
  }, [activeTab]);

  useEffect(() => {
    const box = boxRef.current;

    // Animation using GSAP with ScrollTrigger
    gsap.fromTo(
      box,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-[url('https://images.unsplash.com/photo-1628771791803-7ee290de9893?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center p-8 text-white"
    >
      <h2 className="text-4xl font-bold mb-6">Projects</h2>

      {/* Tab buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("All")}
          className={`px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-white ${
            activeTab === "All" ? "text-sky-400" : "text-white"
          }  transition duration-300 ease-in-out`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("Web Development")}
          className={`px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-white ${
            activeTab === "Web Development" ? "text-sky-400" : "text-gray-300"
          } transition duration-300 ease-in-out`}
        >
          Web Development
        </button>
        <button
          onClick={() => setActiveTab("Web Design")}
          className={`px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-white ${
            activeTab === "Web Design" ? "text-sky-400" : "text-gray-300"
          }  transition duration-300 ease-in-out`}
        >
          Web Design
        </button>
      </div>

      {/* Project cards */}
      <div
        ref={boxRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-300 h-full p-5"
      >
        {projects[activeTab].map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block bg-purple-800/50 rounded-sm overflow-hidden group project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 border hover:border-white">
              <h3 className="font-bold mb-2 text-3xl bg-gradient-to-r from-violet-500  via-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="font-bold">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
