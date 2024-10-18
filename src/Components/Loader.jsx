import { motion } from "framer-motion";
import { useEffect } from "react";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    // Add a delay after the animation completes before loading the main app
    const timer = setTimeout(() => {
      setLoading(false); // Hide the loader after 3 seconds (3000ms)
    }, 3000);

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [setLoading]);

  const loaderContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loaderCircle = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const textAnimation = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
      variants={loaderContainer}
      initial="hidden"
      animate="show"
    >
      {/* Loader animation */}
      <div className="absolute bg-blue-900 bg-opacity-20 rounded-full h-[80%] w-[40%] blur-3xl mr-[1%] mb-12"></div>
      <motion.div
        className="w-14 h-14 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full"
        variants={loaderCircle}
      />
      
      {/* Spacing between the loader and text */}
      <div className="h-4"></div>

      {/* App name animation */}
      <motion.div
        className="text-center bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent text-5xl font-bold tracking-widest"
        variants={textContainer}
        initial="hidden"
        animate="show"
      >
        {["R", "O", "H", "I", "T"," ", "M", "A", "N", "O", "H", "A", "R"].map((letter, index) => (
          <motion.span key={index} variants={textAnimation}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;

