import Head from "next/head";
import Image from "next/image";
import Post from "components/Post";
import { useContext, useState } from "react";
import { Router, useRouter } from "next/router";
import Footer from "components/Footer";
import MobilePost from "components/MobilePost";
import moment from "moment";
import { getAboutData, getAllCategories, getMetaData, getPostData } from "data";
import Accordion from "components/Accordion";
import { AnimatePresence, motion } from "framer-motion";
import LoaderContext from "components/LoaderContext";

function Home({ metaData, categories, bio, cv, preview }) {
  const [currentPost, setCurrentPost] = useState();
  const { loaderDidRun, showPost, setShowPost } = useContext(LoaderContext);
  const router = useRouter();

  const mainVariants = {
    initial: { opacity: 0 },
    done: { opacity: 1 },
    animate: {
      opacity: [0, 1],
      y: 0,
      transition: {
        duration: 1,
      },
    },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <div>
      <Head>
        <title>REGINALD SYLVESTER II</title>
        <meta name="description" content="B.1987" />
        <link rel="shortcut icon" href="/images/RSII_favicon.png" />
        <meta property="og:title" content={metaData.title} key="title" />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.previewImage.asset.url} />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <motion.main
          className={`flex flex-col md:flex-row h-screen ${
            showPost ? "z-30" : "z-30"
          }`}
          variants={mainVariants}
          exit="exit"
          key="main"
        >
          <div
            className={`flex-custom1 md:h-0 relative w-full md:w-1/2 ${
              showPost ? "z-30" : "z-30"
            }`}
          >
            <div className="left-side relative md:fixed top-0 left-0  flex-custom1 overflow-y-auto w-full md:w-1/2 max-h-screen ml-0 mr-auto">
              <div className="px-4 md:px-4 pt-24 md:pt-24">
                <div className="w-full flex justify-start font-bold">
                  <a
                    className={`pr-4 cursor-pointer ${
                      currentPost == cv && showPost ? "underline" : ""
                    }`}
                    onClick={() => {
                      console.log("cv ", cv);
                      setCurrentPost(cv);
                      setShowPost(true);
                    }}
                  >
                    CV
                  </a>
                  <a
                    className={`cursor-pointer ${
                      currentPost == bio && showPost ? "underline" : ""
                    }`}
                    onClick={() => {
                      console.log("bio ", bio);
                      setCurrentPost(bio);
                      setShowPost(true);
                    }}
                  >
                    BIO
                  </a>
                </div>
                {categories &&
                  categories.map((category, key) => (
                    <Accordion
                      title={category.name}
                      key={"category-" + category._id}
                    >
                      {category.posts?.map((post, key) => (
                        <a
                          className={` cursor-pointer flex justify-between uppercase text-sm border-b-2 border-black ${
                            currentPost?.slug?.current == post.slug.current &&
                            showPost
                              ? "text-regi-red font-bold pt-[8px] pb-[4px]"
                              : "font-normal pt-[12px] mb-[-3px]"
                          }`}
                          key={"post-" + post._id}
                          onClick={() => {
                            setCurrentPost(post);
                            setShowPost(true);
                          }}
                          data-category={post.slug.current}
                        >
                          <span className="align-baseline basis-12/12 md:basis-6/12">
                            {post.title}
                          </span>
                          <span className="align-baseline basis-5/12 hidden sm:flex text-left">
                            {post.location}
                          </span>
                          <span className="align-baseline basis-1/12 hidden sm:flex justify-end">
                            {moment(post.date).year()}
                          </span>
                        </a>
                      ))}
                    </Accordion>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex-custom1 w-full md:w-1/2 relative ml-auto mr-0">
            {showPost && <Post data={currentPost} />}
          </div>
          {showPost && <MobilePost data={currentPost} />}
        </motion.main>
        <Footer activePage={"Index"} loaderDidRun={loaderDidRun} />
      </AnimatePresence>
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const result = await getAllCategories();
  const about = await getAboutData();
  const metaData = await getMetaData();
  const { categories } = result[0];
  const { bio, cv } = about[0];

  return {
    props: {
      categories: categories,
      bio: bio,
      cv: cv,
      metaData: metaData[0],
      page: "index",
      preview,
    },
    revalidate: 10,
  };
}

export default Home;
