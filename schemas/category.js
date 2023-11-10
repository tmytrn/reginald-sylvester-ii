import { HiOutlineCollection } from "react-icons/hi";

export default {
  title: "Categories",
  name: "category",
  type: "document",
  icon: HiOutlineCollection,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    // {
    //   title: "Posts",
    //   name: "posts",
    //   type: "array",
    //   of: [{ type: "reference", to: [{ type: "post" }] }],
    // },
  ],
};
