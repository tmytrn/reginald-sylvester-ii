import { PortableText } from "@portabletext/react";

const FullWidth = ({ data }) => {
  console.log("fullWidth: ", data.modules[0]);
  const type = data.modules[0]._type;
  data = data.modules[0];
  return (
    <div className="w-full pl-4 font-normal text-base">
      {type === "artwork" && <img src={data.image.asset.url} />}
      {type === "blockText" && (
        <PortableText value={data.blocks}></PortableText>
      )}
    </div>
  );
};
export default FullWidth;
