import moment from "moment";
import { PortableText } from "@portabletext/react";

const FiftyFifty = ({ data }) => {
  console.log("fiftyFifty: ", data);
  const { modules } = data;
  return (
    <div className="w-full ml-0 mt-2 md:mt-0 md:ml-0 mb-4 px-">
      <div className="w-full flex flex-col md:flex-row justify-between border-b-2 border-black ">
        {modules ? (
          modules.map((module, key) => (
            <>
              {module._type === "artwork" && (
                <div className="w-full md:w-half-spaced flex justify-center flex-col align-center md:px-0 pb-4 md:pb-0">
                  <img
                    src={module.image.asset.url}
                    className="mb-2 md:mb-2 md:first:pl-0 md:pl-4 aspect-3/2 "
                  />
                  <div className="">{`${module.title}, ${moment(
                    module.date
                  ).year()}${module.etc ? `, ${module.etc}` : ""}`}</div>
                </div>
              )}
              {module._type === "blockText" && (
                <div className="w-full md:w-half-spaced text-base">
                  <PortableText value={module.blocks} />
                </div>
              )}
            </>
          ))
        ) : (
          <div>no images</div>
        )}
      </div>
    </div>
  );
};
export default FiftyFifty;
