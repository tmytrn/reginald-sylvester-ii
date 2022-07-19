import { PortableText } from "@portabletext/react";

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
          {type === "artwork" && <img src={data.image.asset.url} />}
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
