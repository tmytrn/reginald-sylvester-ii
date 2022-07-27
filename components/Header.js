import LeftArrow from "svg/LeftArrow";
const Header = ({ isAbout, isIndex, data, showPost, setShowPost }) => {
  return (
    <nav className="bg-reginald-gray md:bg-transparent fixed w-full flex justify-between items-start px-2 sm:px-4 lg:px-4 pt-4 sm:pt-4 lg:pt-8 z-50">
      <div className="flex justify-between w-full">
        <a href="/about" className={isAbout ? "text-regi-red" : ""}>
          <h1 className="text-xl md:text-3xl uppercase font-sans font-medium">
            Reginald Sylvester II
          </h1>
          <p className="text-xl md:text-3xl font-sans font-medium inline-block">
            B. 1987.
          </p>
        </a>
        <a
          className={`md:hidden ${data && showPost ? "block" : "hidden"}`}
          onClick={() => {
            setShowPost(false);
          }}
        >
          <LeftArrow />
        </a>
      </div>
      <a
        className={`hidden md:block text-3xl font-sans font-medium uppercase ${
          isIndex ? "text-regi-red" : ""
        }`}
        href="/"
      >
        Index
      </a>
    </nav>
  );
};

export default Header;
