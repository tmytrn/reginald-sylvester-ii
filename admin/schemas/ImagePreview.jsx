import React from "react";
export function ImagePreview(props) {
  return <img src={`${props}?w=64&h=64`} alt={"image of: " + props} />;
}
