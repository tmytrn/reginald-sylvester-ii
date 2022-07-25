import { BsCardImage } from "react-icons/bs";

export default {
  name: "artwork",
  title: "Artworks",
  icon: BsCardImage,
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Title of the Artwork",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Date",
      name: "date",
      type: "date",
      description: "Date of release/showing",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "ETC",
      name: "etc",
      type: "string",
      description: "(Ex: 'Oil on Canvas')",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "date",
    },
  },
};
