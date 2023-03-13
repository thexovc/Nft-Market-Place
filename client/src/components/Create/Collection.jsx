import { BsCollection, BsPlusCircleFill } from "react-icons/bs";

const Collection = () => {
  return (
    <div className="w-full flex flex-col gap-1">
      <h1 className="text-xl">Choose collection</h1>

      <div className="flex w-full mt-2 gap-5">
        <div
          className={`w-1/2 border-[0.15rem] rounded-lg flex flex-col justify-center items-center ${
            false
              ? "border-gray-800 dark:border-gray-300"
              : "border-gray-300 dark:border-gray-800"
          } cursor-pointer p-4 text-md font-medium`}
        >
          <BsPlusCircleFill className="mb-2" size={25} />
          <p>Create</p>
          <p>ERC-721</p>
        </div>

        <div
          className={`w-1/2 border-[0.15rem] rounded-lg flex flex-col justify-center items-center ${
            true
              ? "border-gray-800 dark:border-gray-300"
              : "border-gray-300 dark:border-gray-800"
          } cursor-pointer p-4 text-md font-medium`}
        >
          <BsCollection className="mb-2" size={25} />
          <p>KYIT</p>
          <p>kyiyi</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
