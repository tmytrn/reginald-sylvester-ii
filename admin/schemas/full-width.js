import { BsArrowsFullscreen } from "react-icons/bs";

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
      title: "title",
    },
    prepare(selection) {
      return {
        title: "Full Width",
      };
    },
  },
};
