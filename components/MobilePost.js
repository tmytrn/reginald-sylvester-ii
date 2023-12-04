import Module from "./modules";
import moment from "moment";
import { useState, useRef, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import Close from "../svg/Close";
import LeftCarouselArrow from "svg/LeftCarouselArrow";
import RightCarouselArrow from "svg/RightCarouselArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const MobilePost = ({ data }) => {
  const [showSlider, setShowSlider] = useState(false);

  const sliderRef = useRef();

  const goToSlide = (index) => {
    // sliderRef.current.swiper.update();
    sliderRef.current.swiper.slideToLoop(index, 0, false);
  };

  const imgStyle = (imgSrc) => ({
    backgroundImage: `url(${imgSrc})`,
  });

  useEffect(() => {
    sliderRef.current.swiper.update();
  }, [data]);

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
          } w-full h-full fixed top-0 left-0 bg-reginald-gray px-4 md:px-8 flex-row md:hidden`}>
          <div
            className="absolute top-4 right-4 z-50 cursor-pointer"
            onClick={() => setShowSlider(false)}>
            <Close />
          </div>
          <div></div>
          <Swiper
            ref={sliderRef}
            zoom={true}
            modules={[Zoom, Navigation, EffectFade]}
            observer={true}
            observeParents={true}
            loop={true}
            effect={"fade"}
            slidesPerView={1}
            fadeEffect={{ crossFade: true }}
            className="h-full">
            {data.modules?.map((module, key) => {
              if (module._type == "fullWidth") {
                return module.modules[0]._type === "artwork" ? (
                  <SwiperSlide
                    key={key}
                    className="w-full h-full px-0 md:px-48 flex flex-col-reverse md:flex-row justify-center items-center">
                    <div className=" w-full bottom-4 left-0 absolute md:static self-start md:self-end flex flex-col">
                      <div className="flex flex-row pb-2">
                        <span
                          className="w-5 h-5 mr-1"
                          onClick={() => sliderRef.current.swiper.slidePrev()}>
                          <LeftCarouselArrow />
                        </span>
                        <span
                          className="w-5 h-5"
                          onClick={() => sliderRef.current.swiper.slideNext()}>
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
                      <span className="text-sm tracking-tight">
                        {module.modules[0].dimensions
                          ? module.modules[0].dimensions
                          : ""}
                      </span>
                    </div>
                    <div className="swiper-zoom-container">
                      <figure
                        className="w-full h-full pt-[100%] bg-contain bg-no-repeat bg-center"
                        style={imgStyle(
                          module.modules[0].image?.asset.url
                        )}></figure>
                    </div>
                  </SwiperSlide>
                ) : null;
              } else if (module._type == "fiftyFifty") {
                return module.modules.map(
                  (slide, key) =>
                    slide._type == "artwork" && (
                      <SwiperSlide
                        key={key}
                        className="w-full h-full px-0 md:px-48 flex flex-col-reverse md:flex-row justify-center items-center">
                        <div className=" w-full bottom-4 left-0 absolute md:static self-start md:self-end flex flex-col">
                          <div className="flex flex-row pb-2">
                            <span
                              className="w-5 h-5 mr-1"
                              onClick={() =>
                                sliderRef.current.swiper.slidePrev()
                              }>
                              <LeftCarouselArrow />
                            </span>
                            <span
                              className="w-5 h-5"
                              onClick={() =>
                                sliderRef.current.swiper.slideNext()
                              }>
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
                          <span className="text-sm tracking-tight">
                            {module.modules[key].dimensions
                              ? module.modules[key].dimensions
                              : ""}
                          </span>
                        </div>
                        <div className="swiper-zoom-container">
                          <figure
                            className="w-full h-full bg-contain bg-no-repeat bg-center"
                            style={imgStyle(slide.image?.asset.url)}></figure>
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
    )
  );
};

export default MobilePost;
