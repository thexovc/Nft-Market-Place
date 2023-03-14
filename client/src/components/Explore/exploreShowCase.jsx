import { Link } from "react-router-dom";

import { VscVerifiedFilled } from "react-icons/vsc";

const ExploreShowCase = ({ image }) => {
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
              src={image}
              className="h-14 w-14 border-[0.1rem] border-white rounded-lg"
            />
            <h1 className="font-semibold text-white text-3xl flex flex-col">
              Cosmos Oddities by <span>Mercedes Jelinek</span>
            </h1>
            <p className="font-medium text-white text-lg flex items-center gap-1">
              By BrainDrops <VscVerifiedFilled />
            </p>
            <p className="font-medium text-white text-lg">
              24 items . 0.0195 ETH
            </p>
          </div>
          <div className="md:flex flex-col justify-end bg-gray-100 hidden">
            <Link
              to={"/"}
              className="text-md font-medium bg-transparent shadow-md z-10 text-black blur-sm"
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
