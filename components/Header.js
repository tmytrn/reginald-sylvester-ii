const Header = () => {
  return (
    <nav className="flex justify-between items-start px-4 sm:px-4 lg:px-8 pt-4 sm:pt-4 lg:pt-8">
      <div className="justify-start">
        <h1 className="text-3xl uppercase font-sans font-medium">
          Reginald Sylvester II
        </h1>
        <div className="text-3xl font-sans font-medium">B. 1987.</div>
      </div>
      <div>
        <a className="text-3xl font-sans font-medium uppercase">Index</a>
      </div>
    </nav>
  );
};

export default Header;
