import React from "react";
import dynamic from "next/dynamic";

const FiftyFifty = dynamic(() => import("./FiftyFifty"));
const FullWidth = dynamic(() => import("./FullWidth"));

const Module = ({ module }) => {
  const type = module._type;

  switch (type) {
    case "fiftyFifty":
      return <FiftyFifty data={module} />;
    case "fullWidth":
      return <FullWidth data={module} />;
    default:
      return null;
  }
};

export default Module;
