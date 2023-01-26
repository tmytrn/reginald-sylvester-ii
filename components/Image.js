import { Lightbox } from "react-modal-image";
import { useEffect } from "react";

const Image = ({
  styles,
  src,
  width,
  height,
  setShowSlider,
  goToSlide,
  imageIndex,
}) => {
  return (
    <>
      <img
        src={`${src}?w=${width}${height ? "&h=" + height : ""}`}
        className={styles}
        onClick={() => {
          goToSlide(imageIndex);
          setShowSlider(true);
        }}
      />
    </>
  );
};
export default Image;
