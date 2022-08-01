import LeftArrow from "svg/LeftArrow";
import Link from "next/link";
import { motion } from "framer-motion";
const Header = ({
  isAbout,
  isIndex,
  data,
  showPost,
  setShowPost,
  setLoaderDidRun,
  loaderDidRun,
}) => {
  const variants = {
    initial: { y: "calc(50%-72px)" },
    done: { y: "0%" },
    animate: {
      y: ["50%", "0%"],
    },
  };

  const indexVariants = {
    initial: { opacity: 0 },
    done: { opacity: 1 },
    animate: {
      opacity: [0, 1],
    },
  };

  return (
    <motion.nav
      variants={variants}
      initial={loaderDidRun ? "done" : "initial"}
      animate={loaderDidRun ? "done" : "animate"}
      transition={{ ease: "easeIn", delay: 1.5, duration: 1.25 }}
      onAnimationComplete={() => {
        setTimeout(() => {
          setLoaderDidRun(true);
        }, 1500);
      }}
      className={`md:bg-transparent fixed top-0 left-0 w-full  flex justify-between items-start px-4 sm:px-4 lg:px-4 pt-8 z-40 ${
        loaderDidRun ? "bg-reginald-gray" : "bg-transparent h-screen"
      }`}
    >
      <div className="flex justify-between w-full">
        <Link href="/about">
          <a className={`cursor-pointer ${isAbout ? "text-regi-red" : ""}`}>
            <h1 className="text-xl md:text-3xl uppercase font-sans font-medium">
              Reginald Sylvester II
            </h1>
            <p className="text-xl md:text-3xl font-sans font-medium inline-block">
              B. 1987.
            </p>
          </a>
        </Link>
        <a
          className={`md:hidden ${showPost ? "block" : "hidden"}`}
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
          initial={loaderDidRun ? "done" : "initial"}
          animate={loaderDidRun ? "done" : "animate"}
          transition={{ ease: "easeOut", delay: 3, duration: 1 }}
          className={`cursor-pointer hidden md:block text-3xl font-sans font-medium uppercase ${
            isIndex ? "text-regi-red" : ""
          }`}
        >
          Index
        </motion.a>
      </Link>
    </motion.nav>
  );
};

export default Header;
