import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animationDataTwo from "../Animations/animationtwo.json";

const Introduction = () => {
  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: animationDataTwo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const controls = useAnimation(); // Control animations
  const textRef = useRef(null); // Ref for the text

  // GSAP ScrollTrigger setup for other elements
  const boxRefs = useRef([]); // Ref array for the boxes

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP ScrollTrigger for the boxes
    boxRefs.current.forEach((box, index) => {
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
    });

    // Intersection Observer for Framer Motion (to control Lottie and text animations)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible"); // Trigger Framer Motion animation
          } else {
            controls.start("hidden"); // Reset animation when out of view
          }
        });
      },
      { threshold: 0.5 } // Animation triggers when 50% of the element is in view
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [controls]);

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const collegeLogoUrl =
    "https://parthmittal.netlify.app/assets/nitk.5583c896.png";
  const clgLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1yUAOqpOpI0oog2XFKh6Nesraz-iqXtIuw&s";

  return (
    <section
      id="introduction"
      className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center"
    >
      {/* Animation on the left */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-8 mb-44 md:mt-0"
        initial="hidden"
        animate={controls} // Use the animation controls
        variants={slideInFromLeft}
        transition={{ duration: 1.2 }}
        ref={textRef} // Reference to observe when in view
      >
        <Lottie options={defaultOptionsTwo} height={500} width={500} />
      </motion.div>
      <div className="absolute bg-blue-900 bg-opacity-20 rounded-full h-[80%] w-[60%] blur-3xl mr-[30%] mb-20"></div>


      {/* Introduction text on the right */}
      <motion.div
        className="w-full md:w-1/2 text-white p-5 flex flex-col items-start mb-80"
        initial="hidden"
        animate={controls} // Use the animation controls
        variants={slideInFromLeft}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <h1 className="font-bold text-6xl mb-20">Education</h1>

        {/* College logo and details */}
        <div
          className="flex items-center mt-6 px-7 py-7 rounded-3xl hover:bg-gradient-to-br from-white/20 to-blue-500/20"
          ref={(el) => (boxRefs.current[0] = el)}
        >
          <img
            src={collegeLogoUrl}
            alt="NITK Surathkal Logo"
            className="w-28 h-auto mr-4"
          />
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              National Institute of Technology Karnataka, Surathkal
            </p>
            <p className="text-lg mt-2">
              Bachelor of Technology in Computer Science and Engineering
            </p>
            <p className="text-lg text-gray-400">2022 - Present</p>
          </div>
        </div>

        {/* Secondary Education */}
        <div
          className="flex items-center mt-6 px-9 py-9 rounded-3xl hover:bg-gradient-to-br from-white/20 to-blue-500/20"
          ref={(el) => (boxRefs.current[1] = el)}
        >
          <img
            src={clgLogo}
            alt="Dharampeth M.P. Deo Memorial Science College"
            className="w-28 h-auto mr-4"
          />
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Dharampeth M.P. Deo Memorial Science College, Nagpur
            </p>
            <p className="text-lg">Secondary Education</p>
            <p className="text-lg text-gray-400">2020 - 2022</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Introduction;
