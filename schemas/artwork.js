import { BsCardImage } from "react-icons/bs";
import React from "react";
import { ImagePreview } from "./ImagePreview";

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
      title: "Dimensions",
      name: "dimensions",
      type: "string",
      description: '(Ex. 12"x12"x12")',
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
        media: ImagePreview(imageUrl),
      };
    },
  },
};
