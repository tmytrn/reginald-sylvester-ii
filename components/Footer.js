const Footer = ({ activePage }) => {
  return (
    <div className="fixed flex left-0 bottom-0 md:left-auto md:right-0 w-full flex-col mt-auto mb-0 justify-end px-4  z-50">
      <a
        className={`block sm:hidden text-3xl font-sans font-medium uppercase ${
          activePage === "Index" ? "text-regi-red" : ""
        }`}
        href="/"
      >
        Index
      </a>
      <a
        className={`block text-3xl font-sans font-medium uppercase text-left md:text-right z-50 ${
          activePage === "Contact" ? "text-regi-red" : ""
        }`}
        href="/contact"
      >
        Contact
      </a>
    </div>
  );
};

export default Footer;
