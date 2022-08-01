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

const fetcher = (url) => fetch(url).then((res) => res.json());

const Contact = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mailMessage, setMailMessage] = useState("");
  const [loaderDidRun, setLoaderDidRun] = useContext(LoaderContext);

  const labelStyles = "font-bold uppercase";
  const formGroupStyles =
    "w-full flex justify-between border-b-2 border-black mb-2";

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
    initial: { opacity: 0 },
    done: { opacity: 1 },
    animate: {
      opacity: [0, 1],
    },
  };

  return (
    <div>
      <Head>
        <title>Contact | REGINALED SYLVESTER II</title>
        <meta name="description" content="Contact us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header loaderDidRun={loaderDidRun} setLoaderDidRun={setLoaderDidRun} />
      <motion.main
        className="flex flex-col h-screen text-sm "
        variants={mainVariants}
        initial={loaderDidRun ? "done" : "initial"}
        animate={loaderDidRun ? "done" : "animate"}
        transition={{ ease: "easeOut", delay: 3, duration: 1.5 }}
      >
        <div className="m-2 mt-32">
          <form className="flex flex-col w-full md:w-1/2">
            <formgroup className={formGroupStyles}>
              <label htmlFor="name" className={labelStyles}>
                Name-
              </label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="w-3/4 bg-transparent focus:cursor-text focus:outline-none focus:ring focus:border-blue-500 "
              ></input>
            </formgroup>
            <formgroup className={formGroupStyles}>
              <label htmlFor="email" className={labelStyles}>
                Email-
              </label>
              <input
                type="text"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-3/4 bg-transparent focus:cursor-text focus:outline-none focus:ring focus:border-blue-500 "
              ></input>
            </formgroup>
            <formgroup className={formGroupStyles}>
              <label htmlFor="subject" className={labelStyles}>
                Subject-
              </label>
              <input
                type="text"
                name="subject"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className="w-3/4 bg-transparent focus:cursor-text focus:outline-none focus:ring focus:border-blue-500 "
              ></input>
            </formgroup>
            <formgroup className={formGroupStyles}>
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
                className="w-3/4 h-16 bg-transparent focus:cursor-text focus:outline-none focus:ring focus:border-blue-500 "
              />
            </formgroup>
            <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="w-full flex justify-between align-middle text-left font-bold uppercase border-b-2 border-black pb-[6px]"
            >
              Send{" "}
              <span className="w-3 h-3 text-center my-auto">
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
    </div>
  );
};

export default Contact;
