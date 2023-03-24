import { PortableText } from "@portabletext/react";
import { useState } from "react";
import Image from "../Image";

const FullWidth = ({
  data,
  setShowSlider,
  goToSlide,
  imageIndex,
  incrementImageIndex,
}) => {
  if (!data.modules) {
    return null;
  }

  // console.log("fullWidth: ", data);
  const type = data.modules[0]._type;
  data = data.modules[0];
  // const increment = () => {
  //   incrementImageIndex();
  // };

  if (type === "artwork") {
    return (
      <div className="py-2">
        <div className="w-full font-normal text-base aspect-video">
          <Image
            styles={"cursor-pointer"}
            src={data.image?.asset.url}
            width={1080}
            setShowSlider={setShowSlider}
            goToSlide={goToSlide}
            imageIndex={data.carouselIndex}
          />
        </div>
      </div>
    );
  }
  if (type === "blockText") {
    return (
      <div className="py-2">
        <PortableText value={data.blocks} />{" "}
      </div>
    );
  }
};
export default FullWidth;
