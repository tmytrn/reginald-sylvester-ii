import Module from "./modules";
import moment from "moment";
import { PortableText } from "@portabletext/react";

const Post = ({ data }) => {
  return data ? (
    <div className="hidden md:flex flex-col ml-auto mr-0 relative w-full overflow-visible pt-24 mb-12">
      {data.modules ? (
        <div className="px-4">
          <h3 className="pt-[4px] text-2xl uppercase font-bold pb-4">
            {data?.title}
            <br />
            {data?.location}
            <br />
            {moment(data?.date).year()}
          </h3>
          {data.modules.map((module, key) => (
            <Module key={"module" + key} module={module} />
          ))}
        </div>
      ) : (
        <PortableText value={data} />
      )}
    </div>
  ) : null;
};

export default Post;
