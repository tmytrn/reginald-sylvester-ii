const Header = ({ isAbout, isIndex }) => {
  return (
    <nav className="fixed w-full flex justify-between items-start px-4 sm:px-4 lg:px-4 pt-4 sm:pt-4 lg:pt-8 z-50">
      <div className="justify-start">
        <a href="/about" className={isAbout ? "text-regi-red" : ""}>
          <h1 className="text-2xl md:text-3xl uppercase font-sans font-medium">
            Reginald Sylvester II
          </h1>
          <p className="text-2xl md:text-3xl font-sans font-medium inline-block">
            B. 1987.
          </p>
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
