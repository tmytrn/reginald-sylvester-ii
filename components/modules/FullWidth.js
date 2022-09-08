import { PortableText } from "@portabletext/react";
import Image from "../Image";

const FullWidth = ({ data }) => {
  if (!data.modules) {
    return null;
  }
  console.log("fullWidth: ", data);
  const type = data.modules[0]._type;
  data = data.modules[0];
  return (
    <div className="mb-4">
      {type === "artwork" && (
        <div className="w-full font-normal text-base aspect-video">
          {type === "artwork" && (
            <Image src={data.image?.asset.url} width={1080} />
          )}
          {type === "blockText" && (
            <PortableText value={data.blocks}></PortableText>
          )}
        </div>
      )}
      {type === "blockText" && <PortableText value={data.blocks} />}
    </div>
  );
};
export default FullWidth;
