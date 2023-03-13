const CardColl = ({ image }) => {
  return (
    <div className="w-5/6 outline-none flex-shrink-0 md:w-1/3 lg:w-1/4 rounded-xl flex flex-col shadow-sm shadow-gray-400 cursor-pointer hover:md:-translate-y-[5px]">
      <img
        src={image}
        className="rounded-t-xl w-full object-center h-52 md:h-64"
        alt=""
      />
      <div className="w-full px-5 py-3">
        <h1 className="font-semibold">Moonbird Oddities</h1>
        <div className="w-full py-2 text-sm flex justify-between">
          <div className="flex flex-col">
            <p className="text-gray-400 text-xs">FLOOR</p>
            <p className="text-md font-medium">0.15 ETH</p>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-400 text-xs">TOTAL VOLUME</p>
            <p className="text-md font-medium">143 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardColl;
