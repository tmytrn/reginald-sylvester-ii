import { BsCursorText } from "react-icons/bs";

export default {
  name: "blockText",
  title: "Block Text",
  icon: BsCursorText,
  type: "object",
  fields: [
    {
      title: "Block Text",
      name: "blocks",
      type: "array",
      of: [{ type: "block" }],
    },
  ],

  preview: {
    select: {
      blocks: "blocks",
    },
    prepare(value) {
      const block = (value.blocks || []).find(
        (block) => block._type === "block"
      );
      return {
        title: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No title",
      };
    },
  },
};
