import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import e1 from "../assets/explore/e1.avif";
import e2 from "../assets/explore/e2.avif";

import p6 from "../assets/p6.avif";
import p1 from "../assets/p1.avif";
import p5 from "../assets/p5.avif";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.avif";
import CollectionList from "../components/Explore/collectionList";
import ExploreShowCase from "../components/Explore/exploreShowCase";

const Explore = () => {
  const [width, setWidth] = useState(0);

  const slideLeft1 = () => {
    let lP = width * 0.9;
    let slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft - lP;
  };

  const slideRight1 = () => {
    let lP = width * 0.9;
    let slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft + lP;
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Call the function initially to set the window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex flex-col -mt-5">
      {/* collection start */}
      <div className="w-full mx-auto">
        <div className="w-[98%] mx-auto px-3 gap-2 flex items-center">
          <MdChevronLeft
            onClick={slideLeft1}
            className="hidden cursor-pointer opacity-50 hover:opacity-100 md:flex"
            size={45}
          />
          <div
            id="slider1"
            className="w-full md:py-5 py-2 mx-auto overflow-x-auto scroll-smooth scrollbar-hide flex flex-row gap-5"
          >
            <ExploreShowCase image={e2} pic={e1} />
            <ExploreShowCase image={e1} pic={e2} />
            <ExploreShowCase image={p3} pic={e2} />
            <ExploreShowCase image={p5} pic={e1} />
            <ExploreShowCase image={e1} pic={e2} />
            <ExploreShowCase image={p4} pic={e1} />
          </div>
          <MdChevronRight
            onClick={slideRight1}
            className="hidden cursor-pointer opacity-50 hover:opacity-100 md:flex"
            size={45}
          />
        </div>
      </div>
      {/* collection end */}

      <div className="w-[90%] py-5  mx-auto flex flex-col gap-5">
        <h1 className="text-2xl font-medium">Explore</h1>

        <div className="w-full md:w-2/5 text-xs md:text-md flex md:justify-between gap-5">
          <a className="bg-blue-100 outline-none  font-medium dark:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            All
          </a>
          <a className="hover:bg-blue-100 outline-none  font-medium dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            Art
          </a>
          <a className="hover:bg-blue-100 outline-none  font-medium dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            Gaming
          </a>

          <a className="hover:bg-blue-100 outline-none  font-medium dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            Photography
          </a>

          <a className="hidden md:block hover:bg-blue-100 outline-none font-medium dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            PFPs
          </a>

          <a className="hidden md:block hover:bg-blue-100 outline-none font-medium dark:hover:text-[#202025] cursor-pointer rounded-md md:px-4 px-3 py-1">
            MemberShips
          </a>
        </div>

        {/* trending and all */}
        <div className="w-full pt-5">
          <div className="flex md:flex-row flex-col  md:border-b-2 pb-2">
            <div className="md:w-1/2 w-full flex justify-between  items-center border-b-2 pb-2 md:border-b-0 md:pb-0">
              <div className="flex gap-5 items-center">
                <h1 className="text-3xl hover:text-gray-400 cursor-pointer font-medium">
                  Trending
                </h1>
                <h1 className="text-gray-400 cursor-pointer hover:text-[#202025] text-3xl font-medium">
                  Top
                </h1>
              </div>
              <div className="flex md:hidden items-center">
                <button className="border-[0.12rem]  p-2 font-medium rounded-lg text-sm">
                  View all
                </button>
              </div>
            </div>

            <div className="md:w-1/2 w-full flex gap-2 md:gap-4 items-center md:justify-end justify-between pt-2 md:pt-0 font-medium">
              <select className="p-2 divide-y-2 cursor-pointer bg-transparent rounded-lg border-[0.12rem] md:w-auto w-1/2  ">
                <option value="24h" className="rounded-lg border-[0.12rem]">
                  24h
                </option>
                <option value="6h" className="rounded-lg border-[0.12rem] ">
                  6h
                </option>
                <option value="1h" className="rounded-lg border-[0.12rem] ">
                  1h
                </option>
              </select>

              <select className="md:hidden p-2 divide-y-2 bg-transparent rounded-lg border-[0.12rem] md:w-auto w-1/2  ">
                <option value="24h" className="rounded-lg border-[0.12rem] ">
                  All chains
                </option>
                <option
                  value="Ethereum"
                  className="rounded-lg border-[0.12rem] "
                >
                  Ethereum
                </option>
                <option
                  value="BNB Chain"
                  className="rounded-lg border-[0.12rem] "
                >
                  BNB Chain
                </option>
                <option
                  value="Arbitrum"
                  className="rounded-lg border-[0.12rem] "
                >
                  Arbitrum
                </option>
              </select>

              <button className="hidden md:flex border-[0.12rem] md:w-auto w-1/2  p-2 font-medium rounded-lg text-sm">
                View all
              </button>
            </div>
          </div>
        </div>
        {/* trending and all */}

        {/* collection list */}
        <div className="w-full flex flex-col">
          <div className="md:w-1/2 w-full gap-2 flex flex-col">
            <div className="w-full uppercase flex text-sm justify-between gray-text font-medium">
              <p className="md:w-4/6 cursor-pointer ml-2 text-xs">collection</p>
              <p className="md:w-1/6 hidden md:flex cursor-pointer text-xs">
                floor price
              </p>
              <p className="md:w-1/6 cursor-pointer w-2/6 flex justify-end md:justify-start text-xs">
                volume
              </p>
            </div>

            {/* list */}
            <div className="w-full flex flex-col gap-3">
              <CollectionList
                num={1}
                image={p1}
                name="TwelvePepe"
                price={0.04}
                volume={375}
              />
              <CollectionList
                num={1}
                image={p4}
                name="Seizon"
                price={0.04}
                volume={375}
              />
              <CollectionList
                num={1}
                image={p3}
                name="variant modifiers to target media queries"
                price={0.04}
                volume={375}
              />
            </div>
            {/* list */}
          </div>
        </div>
        {/* collection list */}
      </div>
    </div>
  );
};

export default Explore;
