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
export default [
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
];
