import S from "@sanity/desk-tool/structure-builder";
import { HiOutlineCog } from "react-icons/hi";

// Add Schema type to hidden
const hiddenDocTypes = (listItem) => !["siteconfig"].includes(listItem.getId());

// Render a custom UI to view siteconfig & pages
// and showing other items except mentioed in the hiddendoctypes
export default () =>
  S.list()
    .title("Content Manager")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(HiOutlineCog)
        .child(
          S.editor()
            .schemaType("siteconfig")
            .documentId("9b3f6014-be06-4780-8f97-dd30741cd043")
        ),
      // Add a visual divider (optional)
      // S.documentTypeListItem("page").title("Pages"),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
