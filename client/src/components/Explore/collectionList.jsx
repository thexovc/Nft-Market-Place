const CollectionList = (props) => {
  return (
    <div className="w-full flex">
      <p className="w-1/12">{props.num}</p>

      <div className="w-7/12 bg-gray-300"></div>
      <div className="w-2/12 bg-yellow-300">
        <p>{props.price} ETH</p>
      </div>
      <div className="w-2/12 bg-red-300">
        <p>{props.volume} ETH</p>
      </div>
    </div>
  );
};

export default CollectionList;
