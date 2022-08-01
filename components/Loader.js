import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoaderContext from "./LoaderContext";

export default function Loader({ page }) {
  const { loaderDidRun, setLoaderDidRun } = useContext(LoaderContext);
  console.log("loaderDidRun ", loaderDidRun);
  console.log("page", page);
  return !loaderDidRun && page == "index" ? (
    <div className="w-full h-screen absolute z-50 top-0 left-0 bg-reginald-gray">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            y: ["50%", "5%"],
            opacity: [1, 1, 0],
            transitionEnd: {
              display: "none",
            },
          }}
          transition={{ ease: "easeOut", delay: 1.5, duration: 1 }}
          onAnimationComplete={() => setLoaderDidRun(true)}
          className="w-full h-screen"
        >
          <h1 className="text-xl md:text-3xl uppercase font-sans font-medium">
            Reginald Sylvester II
          </h1>
          <p className="text-xl md:text-3xl font-sans font-medium inline-block">
            B. 1987.
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  ) : null;
}
