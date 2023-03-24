import Module from "./modules";
import moment from "moment";
import LeftArrow from "svg/LeftArrow";
import { useState, useRef } from "react";
import { PortableText } from "@portabletext/react";
import Close from "../svg/Close";
import Slider from "react-slick";
import LeftCarouselArrow from "svg/LeftCarouselArrow";
import RightCarouselArrow from "svg/RightCarouselArrow";

const MobilePost = ({ data }) => {
  const [showSlider, setShowSlider] = useState(false);

  const sliderRef = useRef();
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };
  const imgStyle = (imgSrc) => ({
    backgroundImage: `url(${imgSrc})`,
  });
  return (
    data && (
      <>
        <div className="fixed bg-reginald-gray md:hidden  flex-col ml-auto mr-0 w-full overflow-auto h-full top-0 left-0 z-30 pb-24">
          <div className="px-4 pt-32 md:pt-32 text-sm font-medium">
            {data?.modules ? (
              <>
                <h3 className="pt-[4px] text-sm uppercase font-medium pb-4">
                  {data?.title}
                  <br />
                  {data?.location}
                  <br />
                  {moment(data?.date).year()}
                </h3>
                {data.modules.map((module, key) => {
                  return (
                    <Module
                      key={key}
                      module={module}
                      setShowSlider={setShowSlider}
                      goToSlide={goToSlide}
                    />
                  );
                })}
              </>
            ) : (
              <PortableText value={data} />
            )}
          </div>
        </div>
        <div
          className={`${
            showSlider ? "block z-50 " : "hidden z-0"
          } w-full h-screen fixed top-0 left-0 bg-reginald-gray px-4 md:px-8 flex-row md:hidden`}>
          <div
            className="absolute top-4 right-4 z-50 cursor-pointer"
            onClick={() => setShowSlider(false)}>
            <Close />
          </div>
          <div></div>
          <Slider ref={sliderRef} {...settings}>
            {data.modules?.map((module, key) => {
              if (module._type == "fullWidth") {
                return module.modules[0]._type === "artwork" ? (
                  <div key={key}>
                    <div className="w-full h-screen px-0 md:px-48 flex flex-col-reverse md:flex-row justify-center items-center">
                      <div className="text-black w-full bottom-8 left-0 absolute md:static self-start md:self-end flex flex-col">
                        <div className="flex flex-row pb-4 md:pb-0">
                          <span
                            className="border-[1px] border-solid rounded-full mr-1"
                            onClick={() => sliderRef.current.slickPrev()}>
                            <LeftCarouselArrow />
                          </span>
                          <span
                            className="border-[1px] border-solid rounded-full"
                            onClick={() => sliderRef.current.slickNext()}>
                            <RightCarouselArrow />
                          </span>
                        </div>
                        <span className="text-sm tracking-tight">
                          {module.modules[0].title}
                        </span>
                        <span className="text-sm tracking-tight">
                          {moment(module.modules[0].date).year()}
                        </span>
                        <span className="text-sm tracking-tight">
                          {module.modules[0].etc ? module.modules[0].etc : ""}
                        </span>
                      </div>
                      <figure
                        className="w-full h-[90%] bg-contain bg-no-repeat bg-center"
                        style={imgStyle(
                          module.modules[0].image?.asset.url
                        )}></figure>
                    </div>
                  </div>
                ) : null;
              } else if (module._type == "fiftyFifty") {
                return module.modules.map(
                  (slide, key) =>
                    slide._type == "artwork" && (
                      <div key={key}>
                        <div className="w-full h-screen px-0 md:px-48 flex flex-col-reverse md:flex-row justify-center items-center">
                          <div className=" w-full bottom-8 left-0 absolute md:static self-start md:self-end flex flex-col">
                            <div className="flex flex-row pb-4 md:pb-0">
                              <span
                                className="border-[1px] border-solid rounded-full mr-1"
                                onClick={() => sliderRef.current.slickPrev()}>
                                <LeftCarouselArrow />
                              </span>
                              <span
                                className="border-[1px] border-solid rounded-full"
                                onClick={() => sliderRef.current.slickNext()}>
                                <RightCarouselArrow />
                              </span>
                            </div>
                            <span className="text-sm tracking-tight">
                              {slide.title}
                            </span>
                            <span className="text-sm tracking-tight">
                              {moment(slide.date).year()}
                            </span>
                            <span className="text-sm tracking-tight">
                              {slide.etc ? slide.etc : ""}
                            </span>
                          </div>
                          <figure
                            className="w-full h-[90%] bg-contain bg-no-repeat bg-center"
                            style={imgStyle(slide.image?.asset.url)}></figure>
                        </div>
                      </div>
                    )
                );
              } else {
                return null;
              }
            })}
          </Slider>
        </div>
      </>
    )
  );
};

export default MobilePost;
