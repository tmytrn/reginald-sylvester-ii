import { motion } from "framer-motion";
import { useState } from "react";

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

const Tag = ({ type }) => {
  console.log(type);
  return tagMap[type];
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedText = ({ text }) => {
  // Framer Motion variant object, for controlling animation
  const [isPulsing, setIsPulsing] = useState(true);
  const item = {
    hidden: { display: "none" },
    show: {
      display: "inline-block",
    },
  };

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 2.5,
        delayChildren: 3.0,
        staggerChildren: 0.1,
      },
    },
  };

  //  Split each word of props.text into an array
  // const splitWords = text.split(" ");
  // console.log(splitWords);

  // Create storage array
  const words = [];

  // Push each word into words array
  for (var i = 0; i < text.length; i++) {
    words.push(text.charAt(i));
  }

  // Get the tag name from tagMap

  return (
    <motion.p
      className={`text-sm md:text-md font-sans font-medium inline-block ${
        isPulsing ? "pulse-cursor" : ""
      }`}
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        display: "inline-block",
      }}
      onAnimationComplete={() => {
        setIsPulsing(false);
      }}
    >
      {words.map((element, index) => {
        return (
          <motion.span
            style={{ display: "inline-block" }}
            variants={item}
            key={index}
          >
            {element}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

export default AnimatedText;
