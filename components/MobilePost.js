import Module from "./modules";
import moment from "moment";
import LeftArrow from "svg/LeftArrow";
import { useState } from "react";
const MobilePost = ({ data }) => {
  return (
    <div className="fixed bg-reginald-gray md:hidden  flex-col ml-auto mr-0 w-full overflow-auto h-full top-0 left-0 z-30 pb-24">
      <div className="px-2 pt-24 md:pt-32">
        {data && (
          <div className="">
            <h3 className="pt-[4px] text-md uppercase font-bold pb-4">
              {data.title}
              <br />
              {data.location}
              <br />
              {moment(data.date).year()}
            </h3>

            {data.modules.map((module, key) => (
              <Module key={key} module={module} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobilePost;
