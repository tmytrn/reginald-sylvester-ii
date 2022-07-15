export default {
  title: "Categories",
  name: "category",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Posts",
      name: "posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
    },
  ],
};
