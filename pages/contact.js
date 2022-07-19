import Header from "components/Header";
import Dot from "svg/Dot";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Contact = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mailMessage, setMailMessage] = useState("");

  const labelStyles = "font-bold uppercase pb-2";
  const formGroupStyles =
    "w-full flex justify-between border-b-2 border-black mb-2";

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

  return (
    <div>
      <Head>
        <title>Contact | REGINALED SYLVESTER II</title>
        <meta name="description" content="Contact us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="m-8">
          <form className="flex flex-col w-1/2">
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
              <textarea
                type="text"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="w-3/4 bg-transparent focus:cursor-text focus:outline-none focus:ring focus:border-blue-500 "
              ></textarea>
            </formgroup>
            <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="w-full flex justify-between align-middle text-left font-bold uppercase border-b-2 border-black pb-2"
            >
              Send{" "}
              <span className="w-4 h-4 text-center my-auto">
                <Dot />
              </span>
            </button>
          </form>
          <div className="pt-4">{mailMessage}</div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
