import Head from "next/head";
import Image from "next/image";
import Post from "components/Post";
import Dot from "svg/Dot";
import { useContext, useState, useRef, useEffect } from "react";
import { Router, useRouter } from "next/router";
import Footer from "components/Footer";
import MobilePost from "components/MobilePost";
import moment from "moment";
import { getAboutData, getAllCategories, getMetaData, getPostData } from "data";
import Accordion from "components/Accordion";
import { AnimatePresence, motion } from "framer-motion";
import LoaderContext from "components/LoaderContext";
import SinglePost from "components/SinglePost";

function Home({ metaData, categories, bio, cv, preview }) {
  const [currentPost, setCurrentPost] = useState();
  const [isCVActive, setIsCVActive] = useState();
  const [isBioActive, setIsBioActive] = useState();
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPost]);

  return (
    <div>
      <Head>
        <title>REGINALD SYLVESTER II</title>
        <meta name="description" content="B.1987" />
        <link rel="shortcut icon" href="/images/RSII_favicon.png" />
        <meta property="og:title" content={metaData?.title} key="title" />
        <meta property="og:description" content={metaData?.description} />
        <meta property="og:image" content={metaData?.previewImage.asset.url} />
      </Head>
      <AnimatePresence>
        <motion.main
          className={`flex flex-col md:flex-row h-screen ${
            showPost ? "z-30" : "z-30"
          }`}
          variants={mainVariants}
          exit="exit"
          key="main">
          <div
            className={`flex-custom1 md:h-0 relative w-full md:w-1/2 ${
              showPost ? "z-30" : "z-30"
            }`}>
            <div className="left-side relative md:fixed top-0 left-0  flex-custom1 overflow-y-auto w-full md:w-1/2 max-h-screen ml-0 mr-auto">
              <div className="px-4 md:px-4 py-24 md:pt-24">
                <SinglePost
                  name={"CV"}
                  postContent={cv}
                  setShowPost={setShowPost}
                  setCurrentPost={setCurrentPost}
                  setIsCVActive={setIsCVActive}
                  setIsBioActive={setIsBioActive}
                  currentPost={currentPost}
                />
                <SinglePost
                  name={"BIO"}
                  postContent={bio}
                  setShowPost={setShowPost}
                  setCurrentPost={setCurrentPost}
                  setIsCVActive={setIsCVActive}
                  setIsBioActive={setIsBioActive}
                  currentPost={currentPost}
                />
                {categories?.map((category, key) =>
                  category.posts?.length < 2 ? (
                    <a
                      className={`pt-3 pb-1 flex justify-between border-b-2 border-black align-middle cursor-pointer text-sm font-medium uppercase  ${
                        currentPost?.slug?.current ==
                          category.posts[0]?.slug.current && showPost
                          ? "text-regi-red font-medium pt-[8px] mb-[0px] border-regi-red"
                          : "pt-[8px] mb-[0px]"
                      }`}
                      key={"post-" + category.posts[0]?._id}
                      onClick={() => {
                        setCurrentPost(category.posts[0]);
                        setShowPost(true);
                        setIsCVActive(false);
                        setIsBioActive(false);
                      }}
                      data-category={category.posts[0]?.slug.current}>
                      {category.posts[0]?.title}
                      <span
                        className={`w-2.5 h-2.5 text-center mt-[-2px] mb-auto isOpen ? "fill-regi-red border-regi-red" : " "`}>
                        <Dot
                          color={
                            currentPost?.slug?.current ==
                              category.posts[0]?.slug.current && showPost
                              ? "#540d08"
                              : "#000"
                          }
                        />
                      </span>
                    </a>
                  ) : (
                    <Accordion
                      title={category.name}
                      key={"category-" + category._id}>
                      {category.posts?.map((post, key) => (
                        <a
                          className={` cursor-pointer flex justify-between uppercase text-sm border-b-2 border-black ${
                            currentPost?.slug?.current == post.slug.current &&
                            showPost
                              ? "pt-[8px] pb-[4px]"
                              : "pt-[12px] "
                          }`}
                          key={"post-" + post._id}
                          onClick={() => {
                            setCurrentPost(post);
                            setShowPost(true);
                            setIsCVActive(false);
                            setIsBioActive(false);
                          }}
                          data-category={post.slug.current}
                          key={key}>
                          <span
                            className={`align-bottom basis-12/12 md:basis-6/12 h-[20px] ${
                              currentPost?.slug?.current == post.slug.current &&
                              showPost
                                ? "text-regi-red font-medium mt-[4px] mb-[-6px]"
                                : "font-normal"
                            }`}>
                            {post.title}
                          </span>
                          <span
                            className={`align-bottom basis-5/12 hidden sm:flex text-left ${
                              currentPost?.slug?.current == post.slug.current &&
                              showPost
                                ? "pt-[4px] pb-[-4px] "
                                : "pt-[0px] pb-[-4px]"
                            }`}>
                            {post.location}
                          </span>
                          <span
                            className={`align-bottom basis-1/12 hidden sm:flex justify-end ${
                              currentPost?.slug?.current == post.slug.current &&
                              showPost
                                ? "pt-[4px] pb-[-4px]"
                                : "pt-[0px] pb-[-4px]"
                            }`}>
                            {moment(post.date).year()}
                          </span>
                        </a>
                      ))}
                    </Accordion>
                  )
                )}
                <div className="">
                  <a
                    href="https://natchez-store.myshopify.com/"
                    className={`flex justify-between border-b-2 border-black pt-3 pb-1 align-middle cursor-pointer text-sm font-medium uppercase`}>
                    Natchez
                    <span
                      className={`w-2.5 h-2.5 text-center mt-[-2px] mb-auto isOpen ? "fill-regi-red border-regi-red" : " "`}>
                      <Dot color={"#000"} />
                    </span>
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://nexus-design-house.myshopify.com"
                    className={`flex justify-between border-b-2 border-black pt-3 pb-1 align-middle cursor-pointer text-sm font-medium uppercase`}>
                    Nexus Design House
                    <span
                      className={`w-2.5 h-2.5 text-center mt-[-2px] mb-auto isOpen ? "fill-regi-red border-regi-red" : " "`}>
                      <Dot color={"#000"} />
                    </span>
                  </a>
                </div>
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
