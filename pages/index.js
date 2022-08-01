import Head from "next/head";
import Image from "next/image";
import Post from "components/Post";
import { useContext, useState } from "react";
import { Router, useRouter } from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";
import MobilePost from "components/MobilePost";
import moment from "moment";
import useSWR from "swr";
import { getAllCategories, getPostData } from "data";
import Accordion from "components/Accordion";
import MyLayout from "components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import LoaderContext from "components/LoaderContext";

const fetcher = (query) => {
  return getPostData(query);
};

function Home({ categories, preview }) {
  const [currentPost, setCurrentPost] = useState();
  const [showPost, setShowPost] = useState("false");
  // const { data, isValidating, error } = useSWR(`${currentPost}`, fetcher);
  const [loaderDidRun, setLoaderDidRun] = useContext(LoaderContext);
  const router = useRouter();

  // const { data: posts } = usePreviewSubscription(categories?.query, {
  //   initialData: categories,
  //   enabled: preview || router.query.preview !== undefined,
  // });

  // useEffect(() => {
  //   Router.push({
  //     pathname: entries[0].slug.current,
  //   });
  // }, []);

  const mainVariants = {
    initial: { opacity: 0 },
    done: { opacity: 1 },
    animate: {
      opacity: [0, 1],
    },
  };

  return (
    <>
      <Head>
        <title>REGINALD SYLVESTER II</title>
        <meta name="description" content="B.1987" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <AnimatePresence>
        <Header
          isIndex={true}
          // data={data ? true : false}
          setShowPost={setShowPost}
          showPost={showPost}
          loaderDidRun={loaderDidRun}
          setLoaderDidRun={setLoaderDidRun}
        />

        <motion.main
          className="flex flex-col md:flex-row h-screen"
          variants={mainVariants}
          initial={loaderDidRun ? "done" : "initial"}
          animate={loaderDidRun ? "done" : "animate"}
          transition={{ ease: "easeOut", delay: 3, duration: 1.5 }}
        >
          <div className="flex-custom1 md:h-0 relative w-full md:w-1/2">
            <div className="left-side relative md:fixed top-0 left-0  flex-custom1 overflow-y-auto w-full md:w-1/2 max-h-screen ml-0 mr-auto">
              <div className="px-2 md:px-4 pt-24 md:pt-32">
                {categories &&
                  categories.map((category, key) => (
                    <Accordion title={category.name} key={category.id}>
                      {category.posts?.map((post, key) => (
                        <a
                          className={` cursor-pointer flex justify-between uppercase text-sm ${
                            currentPost == post.slug.current && showPost
                              ? "text-regi-red font-bold pt-[2px]"
                              : "font-normal pt-[6px] mb-[-3px]"
                          }`}
                          key={post.slug.setCurrentPost}
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
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const result = await getAllCategories();
  const { categories } = result[0];

  return {
    props: {
      categories: categories,
      // page: "index",
      preview,
    },
    revalidate: 10,
  };
}

export default Home;
