import { useState } from "react";
import { RxLapTimer } from "react-icons/rx";
import { BsFillTagsFill } from "react-icons/bs";
import Upload from "../components/Create/Upload";
import Collection from "../components/Create/Collection";

const Create = () => {
  const [fixed, setFixed] = useState(true);

  return (
    <div className="md:w-[60%] w-[90%] mx-auto mb-10">
      <div className="md:w-2/3 mx-auto w-full flex flex-col md:gap-5 gap-3">
        <h1 className="font-semibold text-4xl">Create New Item</h1>

        <Upload />

        <div className="w-full flex flex-col gap-1">
          <h1 className="text-xl">Put on marketplace</h1>
          <p className="gray-text">
            {fixed
              ? "Enter price to allow users instantly purchase your NFT"
              : "Set a period of time for which buyers can place bids"}
          </p>
          <div className="flex w-full mt-2  gap-5">
            <div
              onClick={() => setFixed(true)}
              className={`w-1/2 border-[0.15rem] rounded-lg flex flex-col justify-center items-center  ${
                fixed
                  ? "border-gray-800 dark:border-gray-300"
                  : "border-gray-300 dark:border-gray-800"
              } cursor-pointer p-4 text-md font-medium`}
            >
              <BsFillTagsFill className="mb-2" size={25} />
              <p>Fixed</p>
              <p>price</p>
            </div>

            <div
              onClick={() => setFixed(false)}
              className={`w-1/2 border-[0.15rem]  rounded-lg flex flex-col justify-center items-center  ${
                !fixed
                  ? "border-gray-800 dark:border-gray-300"
                  : "border-gray-300 dark:border-gray-800"
              } cursor-pointer p-4 text-md font-medium`}
            >
              <RxLapTimer className="mb-2" size={25} />
              <p>Timed</p>
              <p>auction</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <h1 className="text-lg font-medium">Price</h1>
          <div className="flex w-full gap-2 justify-between border-[0.05rem] items-center  border-gray-400 p-2 rounded-xl">
            <input
              className="h-full w-full p-2 bg-transparent focus:outline-none"
              type="number"
              min={0}
              placeholder="Enter price"
            />
            <div className="text-right">
              <p> ETH</p>
            </div>
          </div>

          {/* price */}
          <div className="flex w-full gap-2 flex-col justify-between border-[0.05rem] border-[#686a6c] p-3 rounded-xl">
            <div className="flex justify-between">
              <div className="gray-text text-left">
                <p>Price</p>
                <p>Kyit fee ?</p>
              </div>
              <div className="text-right">
                <p>--- ETH</p>
                <p>1%</p>
              </div>
            </div>
            <hr className="dark-text" />
            <div className="flex w-full justify-between">
              <div className="gray-text text-left">
                <p>Enter price</p>
              </div>
              <div className="text-right">
                <p> ETH</p>
              </div>
            </div>
          </div>
          {/* price */}

          {/* collection */}
          <Collection />
          {/* collection */}

          <h1 className="text-md font-medium">Name</h1>
          <div className="flex w-full gap-2 justify-between border-[0.05rem] items-center  border-gray-400 p-2 rounded-xl">
            <input
              className="h-full w-full p-2 bg-transparent focus:outline-none"
              type="text"
              placeholder="e.g. Redeemable Pass"
            />
          </div>

          <h1 className="text-md font-medium">
            Description <span className="gray-text">(optional)</span>
          </h1>
          <div className="flex w-full gap-2 justify-between border-[0.05rem] items-center  border-gray-400 p-2 rounded-xl">
            <input
              className="h-full w-full p-2 bg-transparent focus:outline-none"
              type="text"
              placeholder="e.g. After purchasing you'll be able to redeem your pass"
            />
          </div>

          {/* button */}
          <button
            className="w-[30%] mt-2 border-[#202025] dark:border-[#F7FBFA] border-[0.125rem] 
               px-5 py-3 rounded-2xl hover:bg-[#202025] hover:text-[#F7FBFA] 
              dark:hover:bg-[#F7FBFA] dark:hover:text-[#202025] cursor-pointer"
          >
            Create
          </button>
          {/* button */}
        </div>
      </div>
    </div>
  );
};

export default Create;
