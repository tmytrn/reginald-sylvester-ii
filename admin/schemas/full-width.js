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
          type: "reference",
          to: [{ type: "blockText" }, { type: "artwork" }],
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
