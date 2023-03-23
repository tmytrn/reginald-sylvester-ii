import Header from "components/Header";
import Dot from "svg/Dot";
import Head from "next/head";
import axios from "axios";
import { useState, useContext } from "react";
import Footer from "components/Footer";
import TextareaAutosize from "react-textarea-autosize";
import LoaderContext from "components/LoaderContext";
import MyLayout from "components/Layout";
import { motion } from "framer-motion";
import { getMetaData } from "data";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Contact = ({ metaData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mailMessage, setMailMessage] = useState("");
  const [loaderDidRun, setLoaderDidRun] = useContext(LoaderContext);

  const labelStyles = "font-medium uppercase pr-2";
  const divStyles =
    "w-full flex justify-between border-b-2 border-black mb-2 text-black";

  const validateForm = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    let mailerReq = {
      name,
      email,
      subject,
      message,
      submitted,
    };

    axios
      .post("/api/contact", mailerReq)
      .then(() => {
        setMailMessage("Message sent!");
      })
      .catch(() => {
        setMailMessage("error");
        console.log("error");
      });
  };

  const mainVariants = {
    initial: { opacity: 0, y: 50 },
    done: { opacity: 1 },
    exit: { opacity: 0, y: -100 },
    animate: {
      opacity: [0, 1],
      y: 0,
    },
  };

  return (
    <>
      <Head>
        <title>Contact | REGINALD SYLVESTER II</title>
        <meta name="description" content="Contact us" />
        <link rel="shortcut icon" href="/images/RSII_favicon.png" />
        <meta property="og:title" content={metaData.title} key="title" />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.previewImage.asset.url} />
      </Head>
      <motion.main
        variants={mainVariants}
        exit="exit"
        className="flex flex-col w-full md:flex-row h-screen z-30 text-sm ">
        <div className="p-4 pt-24 md:pt-32 w-full">
          <form className="flex flex-col w-full md:w-1/2">
            <div className={divStyles}>
              <label htmlFor="name" className={labelStyles}>
                Name-
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-reginald-gray focus:outline-none focus:cursor-text"
              />
            </div>
            <div className={divStyles}>
              <label htmlFor="email" className={labelStyles}>
                Email-
              </label>
              <input
                type="text"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                className="w-full bg-reginald-gray focus:outline-none focus:cursor-text  focus:border-regi-red focus:ring-regi-red "></input>
            </div>
            <div className={divStyles}>
              <label htmlFor="subject" className={labelStyles}>
                Subject-
              </label>
              <input
                type="text"
                name="subject"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                required
                className="w-full bg-reginald-gray focus:cursor-text focus:outline-none"></input>
            </div>
            <div className={divStyles}>
              <label htmlFor="message" className={labelStyles}>
                Message-
              </label>
              <TextareaAutosize
                minRows={5}
                type="text"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
                className="w-full h-16 bg-reginald-gray focus:outline-none "
              />
            </div>
            <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="w-full flex justify-between align-middle text-left font-medium uppercase border-b-2 border-black pb-[6px]">
              Send{" "}
              <span className="2.5 h-2.5 text-center my-auto">
                <Dot color={"#000"} />
              </span>
            </button>
          </form>
          <div className="pt-4">{mailMessage}</div>
        </div>
        <Footer
          activePage={"Contact"}
          loaderDidRun={loaderDidRun}
          setLoaderDidRun={setLoaderDidRun}
        />
      </motion.main>
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const metaData = await getMetaData();

  return {
    props: {
      metaData: metaData[0],
      preview,
    },
    revalidate: 10,
  };
}

export default Contact;
