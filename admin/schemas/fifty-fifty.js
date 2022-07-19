import { BsLayoutSplit } from "react-icons/bs";

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
      title: "Fifty Fifty",
    },
    prepare() {
      return {
        title: "Fifty Fifty",
      };
    },
  },
};
