import React from "react";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
// import FiftyFifty from "./FiftyFifty";
// import FullWidth from "./FullWidth";

const FiftyFifty = dynamic(() => import("./FiftyFifty"));
const FullWidth = dynamic(() => import("./FullWidth"));

const Module = ({
  module,
  setShowSlider,
  goToSlide,
  imageIndex,
  incrementImageIndex,
}) => {
  const type = module._type;
  switch (type) {
    case "fiftyFifty":
      return (
        <FiftyFifty
          data={module}
          setShowSlider={setShowSlider}
          goToSlide={goToSlide}
          imageIndex={imageIndex}
          incrementImageIndex={incrementImageIndex}
        />
      );
    case "fullWidth":
      return (
        <FullWidth
          data={module}
          setShowSlider={setShowSlider}
          goToSlide={goToSlide}
          imageIndex={imageIndex}
          incrementImageIndex={incrementImageIndex}
        />
      );
    default:
      return null;
  }
};

export default Module;
