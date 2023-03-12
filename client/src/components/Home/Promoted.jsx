import { AiFillEye } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";

const Promoted = ({ image }) => {
  return (
    <div className="w-2/3 flex-shrink-0 md:w-1/3 lg:w-1/4 rounded-xl flex flex-col shadow-sm shadow-gray-400 cursor-pointer hover:md:-translate-y-[5px]">
      <img
        src={image}
        className="rounded-xl w-full object-center h-52 md:h-72"
        alt=""
      />
      <div className="w-full px-5 py-3 h-52 flex flex-col text-xl gap-2 justify-center">
        <div className="w-full">
          <p className="text-muted text-sm text-gray-500">
            kyit mintable store
          </p>
          <h1 className="font-semibold">Moonbird Oddities</h1>
        </div>
        <div className="w-full py-2 text-sm flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="md:text-xl text-lg font-medium flex items-center">
                <FaEthereum />
                <span>0.15</span>
              </p>
              <p className="md:text-xl text-lg mx-auto font-medium text-gray-500">
                ($33)
              </p>
            </div>

            <div className="flex justify-center items-center">
              <AiFillEye size={25} />
              <p className="text-lg font-medium">14</p>
            </div>
          </div>
          <div className="flex  mt-4 gap-2 items-center">
            <img src={image} className="h-12 w-12 rounded-full" alt="" />
            <p className="text-sm md:text-lg font-medium">artcher_artworks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
