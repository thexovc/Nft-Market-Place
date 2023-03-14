const CollectionList = (props) => {
  return (
    <div className="w-full flex justify-between items-center">
      <p className="w-1/12 gray-text text-lg font-medium">{props.num}</p>

      <div className="w-7/12 flex gap-2 items-center">
        <img
          src={props.image}
          className="w-14 h-14 rounded-lg border-[0.12rem]"
        />
        <div className="flex flex-col">
          <p className="md:text-xl  truncate md:w-60 w-28  font-medium">
            {props.name}
          </p>
          <p className="md:hidden gray-text text-sm">Floor:{props.price}</p>
        </div>
      </div>
      <div className="w-2/12 font-medium hidden md:flex">
        <p>{props.price} ETH</p>
      </div>
      <div className="w-4/12 md:w-2/12 font-medium flex justify-end md:justify-start">
        <p>{props.volume} ETH</p>
      </div>
    </div>
  );
};

export default CollectionList;
