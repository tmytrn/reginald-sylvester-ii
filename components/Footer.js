import { motion } from "framer-motion";
import Link from "next/link";
const Footer = ({ activePage, loaderDidRun }) => {
  const footerVariants = {
    initial: { opacity: 0 },
    done: { opacity: 1 },
    animate: {
      opacity: [0, 1],
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      variants={footerVariants}
      initial={loaderDidRun ? "done" : "initial"}
      animate={loaderDidRun ? "done" : "animate"}
      className=" md:bg-transparent w-full fixed left-0 bottom-0 md:left-auto md:right-0 mt-auto mb-0 justify-end px-4 pt-4 z-40">
      <ul className="flex flex-col justify-end">
        <li>
          <Link href="/" legacyBehavior>
            <a
              className={` sm:hidden text-sm md:text-md font-sans font-medium uppercase inline-block hover:text-regi-red ${
                activePage === "Index" ? "text-regi-red" : ""
              }`}>
              Index
            </a>
          </Link>
        </li>
        <li className="justify-end md:text-right">
          <Link href="/contact" legacyBehavior>
            <a
              className={` text-sm md:text-md font-sans font-medium uppercase text-left z-50 inline-block hover:text-regi-red ${
                activePage === "Contact" ? "text-regi-red" : ""
              }`}>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Footer;
