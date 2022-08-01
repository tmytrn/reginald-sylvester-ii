import Module from "./modules";
import moment from "moment";

const Post = ({ data }) => {
  return (
    <div className="hidden md:flex flex-col ml-auto mr-0 relative w-full overflow-visible ">
      <div className="px-4  pt-32 mb-12">
        {/* <a
      className="hidden sm:block text-regi-red text-3xl font-sans font-medium text-right uppercase ml-auto mr-0 pb-8"
      href="/"
    >
      Index
    </a> */}
        {data && (
          <div>
            <h3 className="pt-[4px] text-2xl uppercase font-bold pb-4">
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

export default Post;
