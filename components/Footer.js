const Footer = ({ activePage }) => {
  return (
    <div className="bg-reginald-gray md:bg-transparent w-full fixed left-0 bottom-0 md:left-auto md:right-0 mt-auto mb-0 justify-end px-4 pt-4 z-50">
      <div className="flex flex-col">
        <a
          className={`block sm:hidden text-2xl md:text-3xl font-sans font-medium uppercase inline-block ${
            activePage === "Index" ? "text-regi-red" : ""
          }`}
          href="/"
        >
          Index
        </a>
        <a
          className={`block text-2xl md:text-3xl font-sans font-medium uppercase text-left md:text-right z-50 inline-block ${
            activePage === "Contact" ? "text-regi-red" : ""
          }`}
          href="/contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Footer;
