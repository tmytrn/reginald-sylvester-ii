import Head from "next/head";
import Image from "next/image";
import Module from "components/modules";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";
import Header from "components/Header";

import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "@lib/sanity";

import { groq } from "next-sanity";

export default function Home({ categories, entries, preview }) {
  entries = entries[0];
  console.log(entries);
  console.log("preview", preview);
  const router = useRouter();

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
    <div className="">
      <Head>
        <title>REGINALED SYLVESTER II</title>
        <meta name="description" content="B.1987" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}

      <main className="">
        <div className="fixed max-h-full w-1/2">
          {" "}
          <div className="relative w-full z-10 pl-4 md:pl-8">
            {categories &&
              categories.map((category, key) => (
                <>
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
                    <div className="font-normal pt-2 " key={key}>
                      {post.title}
                    </div>
                  ))}
                </>
              ))}
          </div>
        </div>

        <div className="w-full relative overflow-visible mb-8">
          <div className="ml-auto mr-0 relative w-full md:w-1/2 z-10 overflow-visible mx-2 md:px-4">
            <div className="flex justify-end w-full pt-4 sm:pt-4 lg:pt-8">
              <a className="text-3xl font-sans font-medium uppercase ml-auto mr-0">
                Index
              </a>
            </div>
            {entries.modules.map((module, key) => (
              <Module key={key} module={module} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const categoryQuery = groq`
*[_type == "category"] | order(_createdAt asc) {
  name,
  posts[]->{title},
}
`;

const postQuery = groq`
*[_type=="post"]{
  title,
  slug,
  'modules' : modules[]{
    _type == 'fiftyFifty' => {
    _type,
    modules[]{
      _type == 'reference' => @->{
        _type,
        title,
        date,
        etc,
        image{
          asset->{url}
        }
      },
      _type =='blockText' => {
        _type,
        blocks,
      }
    }},
    _type == 'fullWidth' => {
      _type,
      modules[]{
        _type == 'reference' => @->{
          _type,
          title,
          date,
          etc,
          image{
            asset->{url}
          }
        },
        _type =='blockText' => {
          _type,
          blocks,
        }
      }
  }
}

}
`;

export async function getStaticProps({ params, preview = false }) {
  const categories = await getClient(preview).fetch(categoryQuery);
  const posts = await getClient(preview).fetch(postQuery);

  return {
    props: {
      categories: categories,
      entries: posts,
      preview,
    },
    revalidate: 10,
  };
}
