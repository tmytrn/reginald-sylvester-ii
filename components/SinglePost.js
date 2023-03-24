import { useState } from "react";
import Dot from "svg/Dot";
const SinglePost = ({
  name,
  postContent,
  setShowPost,
  setCurrentPost,
  setIsCVActive,
  setIsBioActive,
  currentPost,
}) => {
  const [isPostActive, setIsPostActive] = useState(false);
  return (
    <div
      className=""
      onClick={() => {
        setShowPost(true);
        setCurrentPost(postContent);
        setIsCVActive(true);
        setIsBioActive(false);
      }}>
      <a
        className={`flex justify-between border-b-2 border-black pt-3 pb-1 align-middle cursor-pointer text-sm font-medium uppercase ${
          currentPost == postContent ? "text-regi-red border-regi-red" : " "
        }`}>
        {name}
        <span
          className={`w-2.5 h-2.5 text-center mt-[-2px] mb-auto isOpen ? "fill-regi-red border-regi-red" : " "`}>
          <Dot color={currentPost == postContent ? "#540d08" : "#000"} />
        </span>
      </a>
    </div>
  );
};

export default SinglePost;
