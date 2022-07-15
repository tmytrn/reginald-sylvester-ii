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
    // other fields
    // ...
  ],
};
