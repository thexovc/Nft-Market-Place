import { useState } from "react";
import { RxLapTimer } from "react-icons/rx";
import { BsFillTagsFill } from "react-icons/bs";
import Upload from "../components/Create/Upload";
import Collection from "../components/Create/Collection";

const Create = () => {
  const [fixed, setFixed] = useState(true);

  return (
    <div className="md:w-[60%] w-[90%] mx-auto">
      <div className="md:w-1/2 w-full flex flex-col md:gap-5 gap-3">
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

        <div className="w-full flex flex-col gap-3">
          <h1 className="text-lg font-medium">Price</h1>
          <div className="flex w-full justify-between border-[0.05rem] border-gray-400 p-3 rounded-xl">
            <div className="gray-text text-left">
              <p>Enter price</p>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Create;
