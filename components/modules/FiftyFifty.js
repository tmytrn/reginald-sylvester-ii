import moment from "moment";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import Image from "../Image";

const FiftyFifty = ({ data, setShowSlider, goToSlide, imageIndex }) => {
  // console.log("fiftyFifty: ", data);
  const { modules } = data;
  // const increment = () => {
  //   incrementImageIndex();
  // };
  return (
    <div className="w-full flex flex-col md:flex-row justify-between ml-0 mt-2 md:mt-0 md:ml-0 mb-4 md:border-b-2 md:border-black">
      {modules?.map((module, key) => {
        if (module._type === "artwork") {
          return (
            <div className="w-full md:w-half-spaced flex flex-col">
              <div
                key={key}
                className="w-full flex justify-start flex-col align-center px-0 md:px-0 pb-4 md:pb-0">
                <Image
                  styles={
                    "mb-2 md:mb-2 md:first:pl-0 md:pl-4 w-full cursor-pointer"
                  }
                  src={module.image?.asset.url}
                  width={720}
                  height={1080}
                  setShowSlider={setShowSlider}
                  goToSlide={goToSlide}
                  imageIndex={module.carouselIndex}
                />
                <div className="text-center text-sm">{`${
                  module.title
                }, ${moment(module.date).year()}${
                  module.etc ? `, ${module.etc}` : ""
                }`}</div>
              </div>
            </div>
          );
        }
        if (module._type === "blockText") {
          return (
            <div className="w-full md:w-half-spaced flex flex-col justify-center align-middle text-center text-sm">
              <PortableText value={module.blocks} key={key} />
            </div>
          );
        }
      })}
    </div>
  );
};
export default FiftyFifty;
