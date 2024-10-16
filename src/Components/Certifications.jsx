import React, { useState, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';  // Import the icon
gsap.registerPlugin(ScrollTrigger);

const certificationsData = [
  {
    id: 1,
    name: 'C++ Programming - The Complete Guide',
    provider: 'Udemy',
    image: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/e78bc0eb-8d43-4f80-b7f3-02b7420d9575.png',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-18d6bb61-0afd-4f93-a950-22da50d68372.jpg?v=1685001837000',
  },
  {
    id: 2,
    name: 'Namaste React - Frontend Dev',
    provider: 'NamasteDev.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRgH9vFOhRNOlLiUk9f62bj9rwinBzr63fA&s',
    link: 'https://media.licdn.com/dms/image/v2/D562DAQGBRip9wMxEyQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720373809961?e=1729598400&v=beta&t=zzy0W4i1nhfmtTF3NZvSDrzNA0aEKumLrbwvbF7SCaA',
  },
  {
    id: 3,
    name: 'Problem Solving Basic - C programming',
    provider: 'Hackerrank',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmHwcU3Qd6SwmBlfgZidT0stqjIg5rwVihg&s',
    link: 'https://www.hackerrank.com/certificates/a409daa53e15',
  },
  {
    id: 4,
    name: 'Web Development Boot Camp',
    provider: 'Udemy',
    image: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/e78bc0eb-8d43-4f80-b7f3-02b7420d9575.png',
    link: 'https://cloud.google.com/training/certifications/XXXXXX',
  },
];

const Certifications = () => {
  const boxRefs = useRef([]); // Refs for the boxes

  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0, x: -100 },  // Start off-screen to the left
        {
          opacity: 1,
          x: 0,  // Animate to the original position
          duration: 1.2,
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
          ease: "power3.out",  // Easing for smooth animation
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="certifications" className="min-h-screen bg-black p-6 font-dm-sans">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-16 ml-4 md:ml-16 mt-16 sm:mt-24">Certifications</h2>
      
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificationsData.map((certification, index) => (
          <div
            key={certification.id}
            ref={el => (boxRefs.current[index] = el)} // Assign each ref to the respective certification box
            className="border border-gray-500 hover:bg-gradient-to-br from-white/20 to-blue-500/20 hover:border-transparent rounded-lg shadow-lg p-4 sm:p-5 flex flex-col items-center transition-colors duration-200 ease-in-out"
          >
            {/* Circular Image on the Top */}
            <div className="flex-shrink-0 mb-4">
              <img
                src={certification.image}
                alt={certification.provider}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-4 border-white"
              />
            </div>

            {/* Certification Details */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {certification.name}
              </h3>
              <p className="text-gray-300 mb-2 sm:mb-4 mt-2 sm:mt-3">{certification.provider}</p>

              {/* Certification Link */}
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-2 rounded flex items-center justify-center hover:bg-blue-700 transition duration-200"
              >
                View Certificate
                <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
