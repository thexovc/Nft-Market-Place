import ghost from "../assets/apex.jpg";

const Home = () => {
  return (
    <div className="w-full py-10 md:py-20 bg-[#F7FBFA] dark:bg-[#202025]">
      <div className=" w-[90%] mx-auto flex md:flex-row-reverse flex-col">
        <div className="md:w-1/2 w-full md:px-10 px-2">
          <img
            className="rounded-xl object-cover w-full h-[350px]"
            src={ghost}
            alt=""
          />
        </div>
        <div className="md:w-1/2 w-full px-2 md:px-10 py-10 flex flex-col gap-5 justify-center">
          <h1 className="md:text-5xl text-4xl font-medium">
            KYIT <br className="md:hidden" /> MARKET PLACE
          </h1>

          <h1 className="text-xl text-gray-400">
            Enforced royalties. Zero code. Zero cost.
          </h1>

          <div className="flex gap-3">
            <button
              className="border-[#202025] dark:border-[#F7FBFA] border-[0.125rem] 
               px-5 py-3 rounded-2xl hover:bg-[#202025] hover:text-[#F7FBFA] 
              dark:hover:bg-[#F7FBFA] dark:hover:text-[#202025] cursor-pointer"
            >
              Explore
            </button>

            <button
              className="border-[#202025] dark:border-[#F7FBFA] border-[0.125rem] 
               px-5 py-3 rounded-2xl hover:bg-[#202025] hover:text-[#F7FBFA] 
              dark:hover:bg-[#F7FBFA] dark:hover:text-[#202025] cursor-pointer"
            >
              Connect wallet
            </button>
          </div>
        </div>
      </div>

      <div className="w-[90%] py-20 mx-auto flex">
        <div className="w-full md:w-2/5 text-xs md:text-md flex md:justify-between gap-5 backdrop-blur-[8px]">
          <a className="bg-blue-100 dark:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            All
          </a>
          <a className="hover:bg-blue-100 dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            Art
          </a>
          <a className="hover:bg-blue-100 dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            Gaming
          </a>

          <a className="hover:bg-blue-100 dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            Photography
          </a>

          <a className="hidden md:block hover:bg-blue-100 dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            PFPs
          </a>

          <a className="hidden md:block hover:bg-blue-100 dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            MemberShips
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
