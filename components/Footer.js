import { motion } from "framer-motion";
import Link from "next/link";
const Footer = ({ activePage, loaderDidRun }) => {
  const footerVariants = {
    initial: { opacity: 0 },
    done: { opacity: 1 },
    animate: {
      opacity: [0, 1],
    },
  };
  return (
    <motion.div
      variants={footerVariants}
      initial={loaderDidRun ? "done" : "initial"}
      animate={loaderDidRun ? "done" : "animate"}
      transition={{ ease: "easeOut", delay: 3, duration: 1 }}
      className="bg-reginald-gray md:bg-transparent w-full fixed left-0 bottom-0 md:left-auto md:right-0 mt-auto mb-0 justify-end px-4 pt-4 z-40"
    >
      <div className="flex flex-col">
        <Link href="/">
          <a
            className={`block sm:hidden text-xl md:text-3xl font-sans font-medium uppercase inline-block ${
              activePage === "Index" ? "text-regi-red" : ""
            }`}
          >
            Index
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={` text-xl md:text-3xl font-sans font-medium uppercase text-left md:text-right z-50 inline-block ${
              activePage === "Contact" ? "text-regi-red" : ""
            }`}
          >
            Contact
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Footer;
