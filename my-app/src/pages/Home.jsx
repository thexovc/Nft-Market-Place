import ghost from "../assets/apex.jpg";
import p1 from "../assets/coc.jpg";
import p2 from "../assets/codm.jpg";
import p3 from "../assets/ghost.jpg";
import p4 from "../assets/pubg.jpg";

const Home = () => {
  return (
    <div className="w-full py-28 md:py-32  bg-[#F7FBFA] dark:bg-[#202025]">
      <div className=" w-[90%] mx-auto flex md:flex-row-reverse flex-col">
        <div className="md:w-1/2 w-full md:px-10 px-2">
          <img
            className="rounded-xl object-center w-full md:w-5/6 mx-auto h-[300px] md:h-[350px]"
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

      <div className="w-[90%] py-5 md:py-20 mx-auto flex flex-col gap-5">
        <div className="w-full md:w-2/5 text-xs md:text-md flex md:justify-between gap-5">
          <a className="bg-blue-100  font-medium dark:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            All
          </a>
          <a className="hover:bg-blue-100  font-medium dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            Art
          </a>
          <a className="hover:bg-blue-100  font-medium dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            Gaming
          </a>

          <a className="hover:bg-blue-100  font-medium dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            Photography
          </a>

          <a className="hidden md:block hover:bg-blue-100 font-medium dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            PFPs
          </a>

          <a className="hidden md:block hover:bg-blue-100 font-medium dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            MemberShips
          </a>
        </div>

        {/* card collection */}
        <div className="w-full flex gap-5">
          {/* card start */}
          <div className="w-2/3 md:w-1/5 rounded-xl flex flex-col shadow-xl cursor-pointer hover:md:-translate-y-[5px]">
            <img src={p3} className="rounded-xl object-center h-52" alt="" />
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
          {/* card end */}
          {/* card start */}
          <div className="w-2/3 md:w-1/5 hidden md:flex rounded-xl flex-col shadow-xl cursor-pointer hover:md:-translate-y-[5px]">
            <img src={p2} className="rounded-xl object-center h-52" alt="" />
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
          {/* card end */}
          {/* card start */}
          <div className="w-2/3 md:w-1/5 hidden md:flex rounded-xl flex-col shadow-xl cursor-pointer hover:md:-translate-y-[5px]">
            <img src={ghost} className="rounded-xl object-center h-52" alt="" />
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
          {/* card end */}
          {/* card start */}
          <div className="w-2/3 md:w-1/5 hidden md:flex rounded-xl flex-col shadow-xl cursor-pointer hover:md:-translate-y-[5px]">
            <img src={p1} className="rounded-xl object-center h-52" alt="" />
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
          {/* card end */}
          {/* card start */}
          <div className="w-2/3 md:w-1/5 hidden md:flex rounded-xl flex-col shadow-xl cursor-pointer hover:md:-translate-y-[5px]">
            <img src={p4} className="rounded-xl object-center h-52" alt="" />
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
          {/* card end */}
        </div>
      </div>
    </div>
  );
};

export default Home;
