import Head from "next/head";
import Image from "next/image";
import Post from "components/Post";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";
import MobilePost from "components/MobilePost";
import moment from "moment";
import slugify from "slugify";
import useSWR from "swr";
import { getAllCategories, getPostData } from "data";

const fetcher = (query) => {
  return getPostData(query);
};

export default function Home({ categories, preview }) {
  const [currentPost, setCurrentPost] = useState("");
  const [showPost, setShowPost] = useState("false");
  const { data, isValidating, error } = useSWR(`${currentPost}`, fetcher);

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

  return (
    <>
      <Head>
        <title>REGINALD SYLVESTER II</title>
        <meta name="description" content="B.1987" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        isIndex={true}
        data={data ? true : false}
        setShowPost={setShowPost}
        showPost={showPost}
      />

      <main className="flex flex-col md:flex-row h-screen">
        <div className="flex-custom1 md:h-0 relative w-full md:w-1/2">
          <div className="left-side relative md:fixed top-0 left-0  flex-custom1 overflow-y-auto w-full md:w-1/2 max-h-screen ml-0 mr-auto">
            <div className="px-2 md:px-4 pt-24 md:pt-32">
              {categories &&
                categories.map((category, key) => (
                  <div key={key}>
                    <div className="flex justify-between border-b border-black pt-4 align-middle">
                      <p className="text-base font-medium uppercase ">
                        {category.name}
                      </p>
                      <div className="dot text-base">●</div>
                    </div>

                    {category.posts?.map((post, key) => (
                      <a
                        className={`pt-2 cursor-pointer flex justify-between uppercase ${
                          currentPost == post.slug.current && showPost
                            ? "text-regi-red font-bold"
                            : "font-normal "
                        }`}
                        key={key}
                        onClick={() => {
                          setCurrentPost(post.slug.current);
                          setShowPost(true);
                        }}
                        data-category={post.slug.current}
                      >
                        <span className="basis-12/12 md:basis-6/12">
                          {post.title}
                        </span>
                        <span className="basis-4/12 hidden sm:flex text-left">
                          {post.location}
                        </span>
                        <span className="basis-2/12 hidden sm:flex justify-end">
                          {moment(post.date).year()}
                        </span>
                      </a>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="flex-custom1 w-full md:w-1/2 relative z-0 ml-auto mr-0">
          {data && <Post data={data} />}
        </div>
        {data && showPost && <MobilePost data={data} />}
      </main>
      <Footer activePage={"Index"} />
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const categories = await getAllCategories();

  return {
    props: {
      categories: categories,
      preview,
    },
    revalidate: 10,
  };
}
