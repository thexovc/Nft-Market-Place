import { Link } from "react-router-dom";
import logo from "../../assets/codm.jpg";
import { CgMenuLeft, CgTrending } from "react-icons/cg";
import { MdWindow } from "react-icons/md";
import { motion } from "framer-motion";

import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav
        className="w-[100%] mx-auto flex px-[1.5rem] md:divide-x-2 md:px-[2.5rem]
       h-[4.5rem] border-b-2 text-[#010101] dark:text-[#f2f3f4] 
       dark:divide-gray-400 dark:border-gray-400
       fixed top-0 z-10 bg-[#F7FBFA] dark:bg-[#202025]"
      >
        <div className="w-1/2 justify-start flex items-center ">
          <img className="h-8 w-auto" src={logo} alt="Logo" />
          <span className="font-medium text-xl tracking-tight ml-2">KYIT</span>
        </div>

        <div className="w-1/2 md:hidden flex items-center justify-end  text-sm uppercase font-medium gap-10">
          <CgMenuLeft
            onClick={handleToggle}
            className="text-2xl cursor-pointer"
          />
        </div>

        <div className="w-1/2 px-2 hidden md:flex justify-end items-center md:gap-4 lg:gap-10 md:text-sm uppercase font-medium">
          <a>Discover</a>
          <a>Feed</a>
          <a
            className="border-[#202025] dark:border-[#F7FBFA] border-[0.125rem] 
          lg:px-6 md:text-xs md: px-1 lg:text-sm py-3 rounded-lg hover:bg-[#202025] hover:text-[#F7FBFA] 
          dark:hover:bg-[#F7FBFA] dark:hover:text-[#202025] cursor-pointer"
          >
            Connect Wallet
          </a>
          <a>menu</a>
        </div>
      </nav>

      {toggle && (
        <div className="w-screen backdrop-blur-[8px] md:hidden fixed top-0 z-50 h-screen text-[#f2f3f4] dark:text-[#202025] flex flex-col">
          <div
            className="h-2/5 backdrop-blur-[8px] "
            onClick={handleToggle}
          ></div>

          {/* nav */}
          <motion.div
            whileInView={{ y: [0, -40, -10, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
            className="h-3/5 backdrop-blur-[8px]"
          >
            <div
              className="w-full h-full text-xl font-semibold bg-[#202025] dark:bg-[#f2f3f4] rounded-t-3xl
             flex px-[1.5rem] flex-col justify-between py-[2.5rem]"
            >
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200 p-2 rounded-lg">
                <CgTrending className="font-bold text-2xl" />
                <a>Feeds</a>
              </div>

              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200 p-2 rounded-lg">
                <CgTrending className="font-bold text-2xl" />
                <a>Drops</a>
              </div>

              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200 p-2 rounded-lg">
                <CgTrending className="font-bold text-2xl" />
                <a>Worlds</a>
              </div>

              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200 p-2 rounded-lg">
                <CgTrending className="font-bold text-2xl" />
                <a>Trending</a>
              </div>

              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200 p-2 rounded-lg">
                <MdWindow className="font-bold text-2xl" />
                <a>Browse</a>
              </div>
              <button
                className="bg-[#F7FBFA] py-3 rounded-2xl text-[#202025] 
              dark:bg-[#202025] dark:text-[#F7FBFA]"
              >
                Connect
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;
