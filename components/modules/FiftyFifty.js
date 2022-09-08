import moment from "moment";
import { PortableText } from "@portabletext/react";
import Image from "../Image";

const FiftyFifty = ({ data }) => {
  console.log("fiftyFifty: ", data);
  const { modules } = data;
  return (
    <div className="w-full flex flex-col md:flex-row justify-between ml-0 mt-2 md:mt-0 md:ml-0 mb-4 border-b-2 border-black">
      {modules ? (
        modules.map((module, key) => (
          <div className="w-full md:w-half-spaced flex flex-col">
            {module._type === "artwork" && (
              <div
                key={key}
                className="w-full flex justify-start flex-col align-center px-4 md:px-0 pb-4 md:pb-0"
              >
                <Image
                  styles={"mb-2 md:mb-2 md:first:pl-0 md:pl-4 w-full"}
                  src={module.image?.asset.url}
                  width={720}
                  height={1080}
                />
                <div className="">{`${module.title}, ${moment(
                  module.date
                ).year()}${module.etc ? `, ${module.etc}` : ""}`}</div>
              </div>
            )}
            {module._type === "blockText" && (
              <PortableText value={module.blocks} />
            )}
          </div>
        ))
      ) : (
        <div>no images</div>
      )}
    </div>
  );
};
export default FiftyFifty;
