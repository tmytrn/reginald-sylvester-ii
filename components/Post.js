import Module from "./modules";
import moment from "moment";
import { PortableText } from "@portabletext/react";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import Close from "../svg/Close";
import LeftCarouselArrow from "svg/LeftCarouselArrow";
import RightCarouselArrow from "svg/RightCarouselArrow";

const Post = ({ data }) => {
  if (!data) return null;
  const [showSlider, setShowSlider] = useState(false);

  const sliderRef = useRef();
  const settings = {
    dots: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  useEffect(() => {
    if (!data.modules) return;
    let index = 0;
    for (let i = 0; i < data.modules.length; i++) {
      if (data.modules[i]._type == "fullWidth") {
        if (data.modules[i].modules[0]._type == "artwork") {
          data.modules[i].modules[0].carouselIndex = index++;
        }
      } else if (data.modules[i]._type == "fiftyFifty") {
        let module = data.modules[i];
        for (let j = 0; j < module.modules.length; j++) {
          if (module.modules[j]._type == "artwork") {
            module.modules[j].carouselIndex = index++;
          }
        }
      }
    }
  }, [data]);

  const imgStyle = (imgSrc) => ({
    backgroundImage: `url(${imgSrc})`,
  });

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <>
      <div className="hidden md:flex flex-col ml-auto mr-0 relative w-full overflow-visible pt-24 mb-12 font-medium">
        {data.modules ? (
          <div className="px-4 pt-[8px] font-medium">
            <h3 className="text-sm uppercase font-medium pb-4">
              {data?.title}
              <br />
              {data?.location}
              <br />
              {moment(data?.date).year()}
            </h3>
            {data.modules.map((module, key) => (
              <Module
                key={key}
                module={module}
                setShowSlider={setShowSlider}
                goToSlide={goToSlide}
              />
            ))}
          </div>
        ) : (
          <div className="px-4 pt-[8px] font-medium text-sm">
            <PortableText value={data} />
          </div>
        )}
      </div>
      <div
        className={`${
          showSlider ? "block z-50 " : "hidden z-0"
        } w-full h-screen fixed top-0 left-0 bg-reginald-gray px-4 md:px-8 flex-row`}>
        <div
          className="absolute top-4 right-4 z-50 cursor-pointer"
          onClick={() => setShowSlider(false)}>
          <Close />
        </div>
        <Slider ref={sliderRef} {...settings}>
          {data.modules?.map((module, key) => {
            if (module._type == "fullWidth") {
              return module.modules[0]._type === "artwork" ? (
                <div key={key}>
                  <div className="w-full h-screen px-0 sm:px-12 md:px-24 flex flex-col-reverse md:flex-row justify-center items-center">
                    <div className="text-black w-1/4 bottom-8 left-0 absolute self-start md:self-end flex flex-col">
                      <span>{module.modules[0].title}</span>
                      <span>{moment(module.modules[0].date).year()}</span>
                      <span>
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
                      <div className="w-full h-screen px-0 sm:px-12 md:px-24 flex justify-center items-center">
                        <div className="text-white w-1/4 bottom-8 left-0 absolute self-start md:self-end flex flex-col">
                          <span>{module.modules[0].title}</span>
                          <span>{moment(module.modules[0].date).year()}</span>
                          <span>
                            {module.modules[0].etc ? module.modules[0].etc : ""}
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
  );
};

export default Post;
