import { getClient } from "@lib/sanity";
import * as queries from "./queries";

export const getAllCategories = async () => {
  const data = await getClient().fetch(queries.categoryQuery);
  return data;
};

export const getPostData = async (slug) => {
  const data = await getClient().fetch(queries.postQuery, { slug: slug });
  return data;
};

export const getMetaData = async () => {
  const data = await getClient().fetch(queries.metaData);
  return data;
};

export const getAboutData = async () => {
  const data = await getClient().fetch(queries.aboutQuery);
  return data;
};

export { queries };
