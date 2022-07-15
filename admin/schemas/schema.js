// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import post from "./post";
// import author from "./author";
import category from "./category";
import siteconfig from "./siteconfig";
import fiftyFifty from "./fifty-fifty";
// import fullImage from "./full-image";
// import fullText from "./full-text";
import fullWidth from "./full-width";
import blockText from "./block-text";
import artwork from "./artwork";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    post,
    // author,
    category,
    siteconfig,
    fiftyFifty,
    // fullImage,
    // fullText,
    fullWidth,
    blockText,
    artwork,
  ]),
});
