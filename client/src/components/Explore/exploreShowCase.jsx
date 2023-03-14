import { Link } from "react-router-dom";

import { VscVerifiedFilled } from "react-icons/vsc";

const ExploreShowCase = ({ image, pic }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="w-11/12 md:w-full mx-auto outline-none flex-shrink-0
       rounded-xl flex flex-col shadow-sm
        shadow-gray-400 cursor-pointer 
        md:h-[26rem] h-[24rem] justify-end bg-no-repeat bg-cover bg-center"
    >
      <div className="w-full px-5 py-3">
        <div className="w-full py-2 text-sm flex justify-between">
          <div className="flex flex-col">
            <img
              src={pic}
              className="h-14 w-14 border-[0.1rem] border-[#f7fbfa] rounded-lg"
            />
            <h1 className="font-semibold text-[#f7fbfa] text-3xl flex flex-col">
              Cosmos Oddities by <span>Mercedes Jelinek</span>
            </h1>
            <p className="font-medium text-[#f7fbfa] text-lg flex items-center gap-1">
              By BrainDrops <VscVerifiedFilled />
            </p>
            <p className="font-medium text-[#f7fbfa] text-lg">
              24 items . 0.0195 ETH
            </p>
          </div>
          <div className="md:flex flex-col justify-end hidden">
            <Link
              to={"/"}
              className="text-md font-medium bg-[#f7fbfa] p-3 rounded-lg
              text-lg hover:text-[#202025] hover:backdrop-blur-0 hover:backdrop-filter-none
              hover:bg-opacity-100
              shadow-md z-10 text-[#f7fbfa] backdrop-filter backdrop-blur-lg bg-opacity-30"
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreShowCase;
