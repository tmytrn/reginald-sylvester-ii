const Header = ({ isAbout }) => {
  return (
    <nav className="fixed w-full flex justify-between items-start px-4 sm:px-4 lg:px-4 pt-4 sm:pt-4 lg:pt-8 z-50">
      <div className="justify-start">
        <a href="/about" className={isAbout ? "text-regi-red" : ""}>
          <h1 className="text-2xl md:text-3xl uppercase font-sans font-medium">
            Reginald Sylvester II
          </h1>
          <div className="text-2xl md:text-3xl font-sans font-medium">
            B. 1987.
          </div>
        </a>
      </div>
      <a
        className="hidden md:block text-3xl font-sans font-medium uppercase"
        href="/"
      >
        Index
      </a>
    </nav>
  );
};

export default Header;
