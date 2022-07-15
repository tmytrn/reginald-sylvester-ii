import moment from "moment";

const FiftyFifty = ({ data }) => {
  // console.log("fiftyFifty: ", data);
  const { modules } = data;
  return (
    <div className="w-full flex border-b border-black ml-4 pb-2 mb-2">
      {modules ? (
        modules.map((module, key) => (
          <div className="w-1/2">
            <img
              src={module.image.asset.url}
              className="pb-2 first:pl-0 pl-4"
            />
            <div className="">{`${module.title}, ${moment(
              module.date
            ).year()} ${module.etc ? `,${module.etc}` : ""}`}</div>
          </div>
        ))
      ) : (
        <div>no images</div>
      )}
    </div>
  );
};
export default FiftyFifty;
