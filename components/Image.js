import { Lightbox } from "react-modal-image";
import { useState } from "react";

const Image = ({ styles, src, width, height }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <img
        src={`${src}?w=${width}${height ? "&h=" + height : ""}`}
        className={styles}
        onClick={() => {
          setIsModalOpen(true);
        }}
      />
      {isModalOpen && (
        <div
          className="z-50 fixed top-0 left-0 w-full bg-gray-900/80 h-full flex justify-center items-center"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <img
            src={src}
            className="m-center w-100 max-h- max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl"
          ></img>
        </div>
      )}
    </>
  );
};
export default Image;
