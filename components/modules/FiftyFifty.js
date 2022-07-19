import moment from "moment";
import { PortableText } from "@portabletext/react";

const FiftyFifty = ({ data }) => {
  console.log("fiftyFifty: ", data);
  const { modules } = data;
  return (
    <div className="w-full ml-0 mt-2 md:mt-0 md:ml-0 mb-4">
      <div className="w-full flex justify-between border-b border-black">
        {modules ? (
          modules.map((module, key) => (
            <>
              {module._type === "artwork" && (
                <div className="w-half-spaced ">
                  <img
                    src={module.image.asset.url}
                    className="pb-2 first:pl-0 pl-4 aspect-3/2"
                  />
                  <div className="">{`${module.title}, ${moment(
                    module.date
                  ).year()}${module.etc ? `, ${module.etc}` : ""}`}</div>
                </div>
              )}
              {module._type === "blockText" && (
                <div className="w-half-spaced text-base">
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
