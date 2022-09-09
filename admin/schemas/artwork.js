import { BsCardImage } from "react-icons/bs";
import React from "react";

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
      imageUrl: "image.asset.url",
    },
    prepare(selection) {
      const { title, subtitle, imageUrl } = selection;
      return {
        title: title,
        subtitle: subtitle,

        // `media` takes a function, string or React element
        // Remember to import React from 'react' if you are rendering React components like below
        media: <img src={`${imageUrl}?w=64&h=64`} alt={"image of: " + title} />,
      };
    },
  },
};
