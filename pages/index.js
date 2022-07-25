import Head from "next/head";
import Image from "next/image";
import Module from "components/modules";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";
import moment from "moment";
import slugify from "slugify";
import useSWR from "swr";

import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "@lib/sanity";

import { groq } from "next-sanity";
import useQuery from "@lib/useQuery";

const slug = (string) => {
  return slugify(string, { lower: true });
};

const fetcher = (query) => {
  // query = encodeURIComponent(query);
  // Only encodeURI is needed for route so that the `$` doesn't get mangled.

  return getClient()
    .fetch(postQuery(query))
    .then((result) => result.json());
};

export default function Home({ categories, preview }) {
  const [currentPost, setCurrentPost] = useState(
    "reginald-sylvester-ii-new-paintings"
  );

  console.log(categories);
  console.log("preview", preview);
  const router = useRouter();

  const { data, error } = useSWR("/", fetcher);
  console.log("post", data);

  const { data: posts } = usePreviewSubscription(categories?.query, {
    initialData: categories,
    enabled: preview || router.query.preview !== undefined,
  });

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
      <Header isIndex={true} />

      <main className="flex flex-col md:flex-row h-screen">
        <div className="flex-custom1 md:h-0 relative w-full md:w-1/2">
          <div className="left-side relative md:fixed top-0 left-0  flex-custom1 overflow-y-auto w-full md:w-1/2 max-h-screen ml-0 mr-auto">
            <div className="px-4 pt-24 md:pt-32">
              {/* <a
                className="text-2xl md:text-3xl uppercase font-sans font-medium"
                href="/about"
              >
                Reginald Sylvester II <br /> B. 1987.
              </a> */}
              {categories &&
                categories.map((category, key) => (
                  <div>
                    <div
                      key={key}
                      className="flex justify-between border-b border-black pt-4 align-middle"
                    >
                      <p className="text-base font-medium uppercase ">
                        {category.name}
                      </p>
                      <div className="dot text-base">●</div>
                    </div>

                    {category.posts?.map((post, key) => (
                      <a
                        className="font-normal pt-2 cursor-pointer flex justify-between"
                        key={post.slug.current}
                        href={post.slug.current}
                        data-category={post.slug.current}
                      >
                        <div>{post.title}</div>
                        <div className="hidden sm:flex">
                          {post.location.split(",")[1]}
                        </div>
                        <div className="hidden sm:flex">
                          {moment(post.date).year()}
                        </div>
                      </a>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block flex-custom1 w-full md:w-1/2 relative z-0 ml-auto mr-0">
          <div className="flex flex-col ml-auto mr-0 relative w-full overflow-visible ">
            <div className="px-4  pt-32 mb-12">
              {/* <a
                className="hidden sm:block text-regi-red text-3xl font-sans font-medium text-right uppercase ml-auto mr-0 pb-8"
                href="/"
              >
                Index
              </a> */}

              {/* <h3 className="pt-[4px] text-2xl uppercase font-bold pb-4">
                {entries.title}
                <br />
                {entries.location}
                <br />
                {moment(entries.date).year()}
              </h3>

              {entries.modules.map((module, key) => (
                <Module key={key} module={module} />
              ))} */}
            </div>
          </div>
        </div>
      </main>
      <Footer activePage={"Index"} />
    </>
  );
}

const categoryQuery = groq`
*[_type=="category"] | order(_createdAt asc){
  name,
  "posts": *[_type=="post" && categories->name==^.name]{title, slug, categories->, location, date}
}
`;

export async function getStaticProps({ params, preview = false }) {
  const categories = await getClient(preview).fetch(categoryQuery);

  return {
    props: {
      categories: categories,
      preview,
    },
    revalidate: 10,
  };
}

// export async function getStaticPaths() {
//   const slug = await getClient(preview).fetch(postSlugQuery);
//   return {
//     paths: [
//       {
//         params: {
//           slug,
//         },
//       },
//     ],
//   };
// }
