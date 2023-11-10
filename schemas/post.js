import { HiOutlineDocumentAdd } from "react-icons/hi";

export default {
  name: "post",
  title: "Posts",
  icon: HiOutlineDocumentAdd,
  type: "document",
  fields: [
    {
      name: "categories",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      // of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      dateFormat: "YYYY",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Page Modules",
      name: "modules",
      type: "array",
      of: [{ type: "fiftyFifty" }, { type: "fullWidth" }],
    },

    // {
    //   name: "mainImage",
    //   title: "Main image",
    //   type: "image",
    //   fields: [
    //     {
    //       name: "alt",
    //       type: "string",
    //       title: "Alternative text",
    //       description: "Important for SEO and accessiblity.",
    //       options: {
    //         isHighlighted: true,
    //       },
    //     },
    //   ],
    //   options: {
    //     hotspot: true,
    //   },
    // },
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
