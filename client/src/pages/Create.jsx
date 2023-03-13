import { useState } from "react";
import { RxLapTimer } from "react-icons/rx";
import { BsFillTagsFill } from "react-icons/bs";

const Create = () => {
  const [fixed, setFixed] = useState(true);

  return (
    <div className="md:w-[60%] w-[90%] mx-auto">
      <div className="md:w-1/2 w-full flex flex-col md:gap-5 gap-3">
        <h1 className="font-semibold text-4xl">Create New Item</h1>

        <div className="w-full flex flex-col gap-1">
          <h1 className="text-xl">Put on marketplace</h1>
          <p className="gray-text">
            {fixed
              ? "Enter price to allow users instantly purchase your NFT"
              : "Set a period of time for which buyers can place bids"}
          </p>
          <div className="flex w-full mt-2 md:gap-10 gap-5">
            <div
              onClick={() => setFixed(true)}
              className={`w-1/2 border-[0.15rem] rounded-lg flex flex-col justify-center items-center  ${
                !fixed ? "border-gray-800" : "border-gray-300"
              } cursor-pointer p-4 text-md font-medium`}
            >
              <BsFillTagsFill className="mb-2" size={25} />
              <p>Fixed</p>
              <p>price</p>
            </div>

            <div
              onClick={() => setFixed(false)}
              className={`w-1/2 border-[0.15rem]  rounded-lg flex flex-col justify-center items-center  ${
                fixed ? "border-gray-800" : "border-gray-300"
              } cursor-pointer p-4 text-md font-medium`}
            >
              <RxLapTimer className="mb-2" size={25} />
              <p>Timed</p>
              <p>auction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
