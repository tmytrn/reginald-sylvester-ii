import React, { useState } from "react";
import LoaderContext from "./LoaderContext";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";

const MyLayout = ({ page, children }) => {
  const [loaderDidRun, setLoaderDidRun] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const variants = {
    initial: {},
    animate: {
      transition: { duration: 0.1, delayChildren: 1.5, staggerChildren: 2.5 },
    },
  };
  const loaderVariants = {
    initial: { opacity: 1, y: "50%" },
    done: { opacity: 1, y: "0%" },
    animate: {
      y: ["50%", "0%"],
      transition: {
        duration: 1.5,
      },
      transitionEnd: {
        background: "transparent",
        // zIndex: "-50",
      },
    },
  };
  const mainVariants = {
    initial: { opacity: 0 },
    done: { opacity: 1 },
    exit: { opacity: 0, y: -100 },
    animate: {
      opacity: [0, 1],
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <LoaderContext.Provider
      value={{
        loaderDidRun: loaderDidRun,
        setLoaderDidRun: setLoaderDidRun,
        showPost: showPost,
        setShowPost: setShowPost,
      }}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          key="layout">
          <motion.div
            key="header"
            variants={loaderVariants}
            className={`fixed top-0 left-0 w-full flex justify-between items-start px-4 sm:px-4 lg:px-4 pt-8 z-40 ${
              loaderDidRun ? "h-auto" : "bg-reginald-gray h-full"
            }`}
            onAnimationComplete={() => {
              setLoaderDidRun(true);
            }}>
            <Header page={page} />
          </motion.div>
          <motion.div key="main" variants={mainVariants}>
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </LoaderContext.Provider>
  );
};

export default MyLayout;
