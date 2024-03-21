import Module from "./modules";
import moment from "moment";
import { PortableText } from "@portabletext/react";
import { useState, useEffect, useRef } from "react";
import Close from "../svg/Close";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Post = ({ data }) => {
  if (!data) return null;
  const [showSlider, setShowSlider] = useState(false);
  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current.swiper.update();
  }, [data]);

  useEffect(() => {
    sliderRef.current.swiper.update();
  }, [showSlider]);

  const goToSlide = (index) => {
    sliderRef.current.swiper.slideToLoop(index, 0, false);
    // console.log("go to slide: ", index);
    // console.log("slider index: ", sliderRef.current.swiper.realIndex);
  };

  console.log(data.location);

  return (
    <>
      <div className="hidden md:flex flex-col ml-auto mr-0 relative w-full overflow-visible pt-24 mb-12 font-medium">
        {data.modules ? (
          <div className="px-4 pt-3 font-medium">
            <h3 className="text-sm uppercase font-medium pb-4">
              {data.title && data.title}
              <br />
              {data.location ? (
                <>
                  {data.location} <br />
                </>
              ) : null}
              {data.date && moment(data.date).year()}
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
          <div className="px-4 pt-3 font-medium text-sm">
            <PortableText value={data} />
          </div>
        )}
      </div>
      <div
        className={`${
          showSlider ? "block z-50 " : "hidden z-0"
        } w-full h-screen fixed top-0 left-0 bg-gray-50 px-4 md:px-8 flex-row`}>
        <div
          className="absolute top-4 right-4 z-50 cursor-pointer"
          onClick={() => setShowSlider(false)}>
          <Close />
        </div>

        <Swiper
          ref={sliderRef}
          zoom={true}
          navigation={true}
          modules={[Zoom, Navigation, EffectFade]}
          observer={true}
          loop={true}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-navigation-size": "24px",
          }}>
          {data.modules?.map((module, key) => {
            if (module._type == "fullWidth") {
              return (
                module.modules[0]._type === "artwork" && (
                  <SwiperSlide key={key}>
                    <div className="w-full h-screen px-0 sm:px-12 md:px-24 flex flex-col-reverse md:flex-row justify-center items-center ">
                      <div className="swiper-zoom-container">
                        <img
                          className="w-full h-[90%] "
                          src={`${module.modules[0].image?.asset.url}?h=2169`}></img>
                      </div>
                      <div className="text-black w-full md:w-fifteen bottom-8 left-0 absolute self-start md:self-end flex flex-col">
                        <span className="text-xs tracking-tight">
                          {module.modules[0].title}
                        </span>
                        <span className="text-xs tracking-tight">
                          {module.modules[0].date
                            ? moment(module.modules[0].date).year()
                            : ""}
                        </span>
                        <span className="text-xs tracking-tight">
                          {module.modules[0].etc ? module.modules[0].etc : ""}
                        </span>
                        <span className="text-xs tracking-tight">
                          {module.modules[0].dimensions
                            ? module.modules[0].dimensions
                            : ""}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              );
            } else if (module._type == "fiftyFifty") {
              return module.modules.map(
                (slide, key) =>
                  slide._type == "artwork" && (
                    <SwiperSlide key={key}>
                      <div className="w-full h-screen px-0 sm:px-12 md:px-24 flex justify-center items-center ">
                        <div className="w-full md:w-fifteen bottom-8 left-0 absolute self-start md:self-end flex flex-col">
                          <span className="text-xs tracking-tight">
                            {module.modules[key].title}
                          </span>
                          <span className="text-xs tracking-tight">
                            {module.modules[key].date
                              ? moment(module.modules[key].date).year()
                              : ""}
                          </span>
                          <span className="text-xs tracking-tight">
                            {module.modules[key].etc
                              ? module.modules[key].etc
                              : ""}
                          </span>
                          <span className="text-xs tracking-tight">
                            {module.modules[key].dimensions
                              ? module.modules[key].dimensions
                              : ""}
                          </span>
                        </div>
                        <div className="swiper-zoom-container">
                          <img
                            className="w-full h-[90%]"
                            src={`${slide.image?.asset.url}?max-h=2160`}></img>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
              );
            } else {
              return null;
            }
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Post;
