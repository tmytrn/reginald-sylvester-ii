import { motion, AnimatePresence } from "framer-motion";
import { PortableText } from "@lib/sanity";

const Accordion = ({ i, expanded, setExpanded, data, title }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <a
        className={`flex justify-between border-b-2 border-black pt-4 mb-4 align-middle cursor-pointer text-base font-medium uppercase ${
          isOpen ? "text-regi-red border-regi-red" : " "
        }`}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {title}
        <span className="dot text-base">●</span>
      </a>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.25 }}
          >
            <div className="text-sm">
              <PortableText value={data} />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
