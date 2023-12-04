import { BsLayoutSplit } from "react-icons/bs";
import React from "react";
import { ImagePreview } from "./ImagePreview";
export default {
  name: "fiftyFifty",
  title: "Fifty Fifty",
  icon: BsLayoutSplit,
  type: "object",
  fields: [
    {
      title: "Content",
      name: "modules",
      type: "array",
      of: [
        {
          type: "reference",
          title: "Artwork",
          to: [{ type: "artwork" }],
        },
        { type: "blockText", name: "blockText", title: "Block Text" },
      ],
      validation: (Rule) => Rule.required().max(2),
    },
  ],
  preview: {
    select: {
      modules0title: "modules.0.title",
      modules0subtitle: "modules.0.date",
      modules0image: "modules.0.image.asset.url",
      modules0blocks: "modules.0.blocks",
      modules1title: "modules.1.title",
      modules1subtitle: "modules.1.date",
      modules1image: "modules.1.image.asset.url",
      modules1blocks: "modules.1.blocks",
    },
    prepare(selection) {
      const {
        modules0title,
        modules0subtitle,
        modules0image,
        modules0blocks,
        modules1title,
        modules1subtitle,
        modules1image,
        modules1blocks,
      } = selection;
      let firstEntry, secondEntry;
      if (modules0title) {
        firstEntry = {
          title: modules0title,
          subtitle: modules0subtitle,
          media: ImagePreview(modules0image),
        };
      } else if (modules0blocks) {
        firstEntry = {
          title: modules0blocks[0].children
            .filter((child) => child._type === "span")
            .map((span) => span.text)
            .join(""),
        };
      } else {
        firstEntry = {};
      }
      if (modules1title) {
        secondEntry = {
          title: modules1title,
          subtitle: modules1subtitle,
          media: ImagePreview(modules1image),
        };
      } else if (modules1blocks) {
        secondEntry = {
          title: modules1blocks[0].children
            .filter((child) => child._type === "span")
            .map((span) => span.text)
            .join(""),
        };
      } else {
        secondEntry = {};
      }
      return {
        title: "Fifty Fifty: " + firstEntry?.title + ", " + secondEntry?.title,
        subitle: firstEntry?.subtitle ? firstEntry?.subtitle : "Untitled",
        media: firstEntry.media ? firstEntry?.media : secondEntry.media,
      };
    },
  },
};
