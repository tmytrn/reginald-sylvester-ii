import LeftArrow from "svg/LeftArrow";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import LoaderContext from "components/LoaderContext";
const Header = ({ page, data }) => {
  const { showPost, setShowPost, loaderDidRun } = useContext(LoaderContext);

  const indexVariants = {
    initial: { opacity: 0 },
    done: { opacity: 1 },
    animate: {
      opacity: [0, 1],
    },
  };

  return (
    <nav
      className={`md:bg-transparent fixed top-0 left-0 w-full  flex justify-between items-start px-4 sm:px-4 lg:px-4 pt-8 z-40 ${
        loaderDidRun ? "bg-reginald-gray h-auto" : "bg-transparent h-full"
      }`}
    >
      <div className="flex justify-between w-full">
        <div
          className={`cursor-pointer hover:text-regi-red ${
            page == "about" ? "text-regi-red" : ""
          }`}
        >
          <h1 className="text-lg md:text-xl uppercase font-sans font-medium">
            Reginald Sylvester II
          </h1>
          <p className="text-lg md:text-xl font-sans font-medium inline-block">
            B. 1987.
          </p>
        </div>
        <a
          className={`md:hidden ${
            showPost && page == "index" ? "block" : "hidden"
          }`}
          onClick={() => {
            setShowPost(false);
          }}
        >
          <LeftArrow />
        </a>
      </div>
      <Link href="/">
        <motion.a
          variants={indexVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2.25, duration: 1 }}
          className={`text-lg md:text-xl cursor-pointer hidden md:block font-sans font-medium uppercase hover:text-regi-red ${
            page == "index" ? "text-regi-red" : ""
          }`}
        >
          Index
        </motion.a>
      </Link>
    </nav>
  );
};

export default Header;
