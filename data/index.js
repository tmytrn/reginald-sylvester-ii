import { getClient } from "@lib/sanity";
import * as queries from "./queries";
import PicoSanity from "picosanity";

export const getAllCategories = async () => {
  const data = await getClient().fetch(queries.categoryQuery);
  return data;
};

export const getPostData = async (slug) => {
  const data = await getClient().fetch(queries.postQuery, { slug: slug });
  console.log(typeof data);
  return data;
};

export { queries };
