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
import postcssConfig from "postcss.config";

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
      <Header />

      <main className="flex flex-col selection:md:flex-row px-4 sm:px-4 lg:px-8">
        <div className="w-full md:w-1/2">
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
        <div className="w-full md:w-1/2 overflow-auto ml-0 md:ml-4">
          {entries.modules.map((module, key) => (
            <Module key={key} module={module} />
          ))}
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
    modules[]->{
      title,
      date,
      etc,
      image{
        asset->{url}
      },
    }},
    _type == 'fullWidth' => {
      _type,
      modules[]->{
        _type == 'artwork' => {
          _type,
          title,
          date,
          etc,
          image{
            asset->{url}
          }
        },
        _type =='blockText' =>{
          ...,
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
