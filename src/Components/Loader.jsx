import { motion } from "framer-motion";

const SlidingTextLoader = ({ setLoading }) => {
  const text = "Rohit Manohar".split(""); // Split the text into individual letters
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between letters
      },
    },
  };

  const letterAnimation = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      variants={container}
      initial="hidden"
      animate="show"
      onAnimationComplete={() => setLoading(false)}
    >
      <div className="absolute bg-purple-900 bg-opacity-20 rounded-full h-[80%] w-[60%] blur-3xl mt-7 mb-20"></div>
      {text.map((letter, index) => (
        <motion.span
          key={index}
          className="text-7xl font-bold bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          variants={letterAnimation}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SlidingTextLoader;
