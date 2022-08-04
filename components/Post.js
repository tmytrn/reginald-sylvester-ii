import Module from "./modules";
import moment from "moment";
import { PortableText } from "@portabletext/react";

const Post = ({ data }) => {
  return (
    <div className="hidden md:flex flex-col ml-auto mr-0 relative w-full overflow-visible ">
      <div className="px-4  pt-32 mb-12">
        {data && (
          <div>
            {data.modules ? (
              <>
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
              </>
            ) : (
              <PortableText value={data} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
