import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { CgMenuLeft, CgTrending } from "react-icons/cg";
import { MdWindow } from "react-icons/md";

import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="w-[95%] mx-auto flex px-[1.5rem] md:divide-x-2 md:px-[2.5rem] h-[5.5rem] border-b-2 md:h-[6rem] text-[#010101]">
        <div className="w-1/2 justify-start flex items-center ">
          <img class="h-8 w-auto" src={logo} alt="Logo" />
          <span class="font-medium text-xl tracking-tight ml-2">KYIT</span>
        </div>

        <div className="w-1/2 md:hidden flex items-center justify-end  text-sm uppercase font-medium gap-10">
          <CgMenuLeft
            onClick={handleToggle}
            className="text-2xl cursor-pointer"
          />
        </div>

        <div className="w-1/2 hidden md:flex justify-end items-center md:gap-4 lg:gap-10 md:text-sm uppercase font-medium">
          <a>Discover</a>
          <a>Feed</a>
          <a
            className="border-[#202025] border-[0.125rem] 
          lg:px-8 md:px-5 py-3 rounded-lg hover:bg-[#202025] hover:text-[#F7FBFA] cursor-pointer"
          >
            Connect Wallet
          </a>
          <a>menu</a>
        </div>
      </nav>

      {toggle && (
        <div className="w-screen md:hidden fixed top-0 h-screen text-[#202025] flex flex-col">
          <div
            className="h-2/5 backdrop-blur-[8px] "
            onClick={handleToggle}
          ></div>
          <div className="h-3/5 backdrop-blur-[8px]">
            <div
              className="w-full h-full text-xl font-semibold bg-[#f2f3f4] rounded-t-3xl
             flex px-[1.5rem] flex-col justify-between py-[2.5rem]"
            >
              <div className="flex items-center gap-2">
                <CgTrending className="font-bold text-2xl" />
                <a>Feeds</a>
              </div>

              <div className="flex items-center gap-2">
                <CgTrending className="font-bold text-2xl" />
                <a>Drops</a>
              </div>

              <div className="flex items-center gap-2">
                <CgTrending className="font-bold text-2xl" />
                <a>Worlds</a>
              </div>

              <div className="flex items-center gap-2">
                <CgTrending className="font-bold text-2xl" />
                <a>Trending</a>
              </div>

              <div className="flex items-center gap-2">
                <MdWindow className="font-bold text-2xl" />
                <a>Browse</a>
              </div>
              <button className="bg-[#202025] py-3 rounded-2xl text-[#F7FBFA]">
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
