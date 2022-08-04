export default {
  name: "siteconfig",
  type: "document",
  title: "Site Settings",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site title",
    },
    {
      name: "description",
      type: "string",
      title: "Site Description",
    },
    {
      name: "previewImage",
      type: "image",
      title: "Preview Image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      description: "Order of categories here will be the same on the site",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "cv",
      title: "CV",
      type: "array",
      of: [{ type: "block" }],
    },

    // other fields
    // ...
  ],
};
