import Header from "components/Header";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "@lib/sanity";
import { groq } from "next-sanity";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

const About = ({ data }) => {
  data = data[0];
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <>
      <Header isAbout={true} />
      <div className="w-full md:w-1/2 px-4 pt-32 flex flex-col h-screen">
        <Accordion
          i={0}
          expanded={isBioOpen}
          setExpanded={setIsBioOpen}
          data={data.bio}
          title={"Bio"}
        />
        <Accordion
          i={1}
          expanded={isCvOpen}
          setExpanded={setIsCvOpen}
          data={data.cv}
          title={"CV"}
        />
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
