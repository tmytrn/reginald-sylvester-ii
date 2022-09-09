import { BsArrowsFullscreen } from "react-icons/bs";
import React from "react";

export default {
  name: "fullWidth",
  title: "Full Width",
  icon: BsArrowsFullscreen,
  type: "object",
  fields: [
    {
      title: "Full Width",
      name: "modules",
      type: "array",
      of: [
        {
          type: "blockText",
          name: "blockText",
          title: "Block Text",
        },
        {
          type: "reference",
          name: "artwork",
          title: "Artwork",
          to: [{ type: "artwork" }],
        },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
  ],

  preview: {
    select: {
      title: "modules.0.title",
      artworkSubtitle: "modules.0.date",
      artworkImage: "modules.0.image.asset.url",
      blocks: "modules.0.blocks",
    },
    prepare(selection) {
      const { title, artworkSubtitle, artworkImage, blocks } = selection;
      if (title) {
        return {
          title: "Full Width: " + title,
          subtitle: artworkSubtitle,

          // `media` takes a function, string or React element
          // Remember to import React from 'react' if you are rendering React components like below
          media: (
            <img src={`${artworkImage}?w=64&h=64`} alt={"image of: " + title} />
          ),
        };
      } else if (blocks) {
        return {
          title: blocks
            ? "FullWidth: " +
              blocks[0].children
                .filter((child) => child._type === "span")
                .map((span) => span.text)
                .join("")
            : "No title",
        };
      } else {
        return {
          title: "Full Width",
        };
      }
    },
  },
};
