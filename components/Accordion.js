import { motion, AnimatePresence } from "framer-motion";
import { PortableText } from "@lib/sanity";
import Dot from "svg/Dot";
import { useState } from "react";

const Accordion = (props) => {
  const [expanded, setExpanded] = useState(false);
  const isOpen = expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div>
      <a
        className={`flex justify-between border-b-2 border-black pt-3 pb-1 align-middle cursor-pointer text-sm font-medium uppercase ${
          isOpen ? "text-regi-red border-regi-red" : " "
        }`}
        onClick={() => setExpanded(isOpen ? false : true)}>
        {props.title}
        {/* <span
          className={`w-2.5 h-2.5 text-center mt-[-2px] mb-auto isOpen ? "fill-regi-red border-regi-red" : " "`}>
          <Dot color={isOpen ? "#540d08" : "#000"} />
        </span> */}
      </a>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={props.key}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.25 }}>
            {props.children}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
