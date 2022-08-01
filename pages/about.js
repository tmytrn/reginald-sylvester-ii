import Header from "components/Header";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "@lib/sanity";
import { groq } from "next-sanity";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext } from "react";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Head from "next/head";
import LoaderContext from "components/LoaderContext";

const About = ({ data }) => {
  data = data[0];
  const [loaderDidRun, setLoaderDidRun] = useContext(LoaderContext);
  return (
    <>
      <Head>
        <title>About | REGINALED SYLVESTER II</title>
        <meta
          name="description"
          content="Reginald Sylvester II
          Born in Jacksonville, North Carolina 1987
          Lives and works in Brooklyn, New York"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        isAbout={true}
        loaderDidRun={loaderDidRun}
        setLoaderDidRun={setLoaderDidRun}
      />
      <div className="w-full md:w-1/2 px-4 pt-32 flex flex-col h-screen">
        <Accordion title={"Bio"}>
          <div className="text-sm mt-4">
            <PortableText value={data.bio} />
          </div>
        </Accordion>
        <Accordion title={"CV"}>
          <div className="text-sm mt-4">
            <PortableText value={data.cv} />
          </div>
        </Accordion>
        <Footer />
      </div>
    </>
  );
};

const aboutQuery = groq`
*[_type == "siteconfig"]{
bio,
cv,
}
`;

export async function getStaticProps({ params, preview = false }) {
  const data = await getClient(preview).fetch(aboutQuery);

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default About;
