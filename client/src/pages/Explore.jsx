import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import e1 from "../assets/explore/e1.avif";
import e2 from "../assets/explore/e2.avif";

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
    <div className="w-full flex flex-col">
      <div className="w-full mx-auto">
        <div className="w-[98%] mx-auto px-3 gap-2 flex items-center">
          {/* collection start */}
          <MdChevronLeft
            onClick={slideLeft1}
            className="hidden cursor-pointer opacity-50 hover:opacity-100 md:flex"
            size={45}
          />
          <div
            id="slider1"
            className="w-full md:py-5 py-2 mx-auto overflow-x-auto scroll-smooth scrollbar-hide flex flex-row gap-5"
          >
            <ExploreShowCase image={e1} />
            <ExploreShowCase image={e2} />
            <ExploreShowCase image={e1} />
            <ExploreShowCase image={e2} />
            <ExploreShowCase image={e1} />
            <ExploreShowCase image={e2} />
          </div>
          <MdChevronRight
            onClick={slideRight1}
            className="hidden cursor-pointer opacity-50 hover:opacity-100 md:flex"
            size={45}
          />
          {/* collection end */}
        </div>
      </div>

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
      </div>
    </div>
  );
};

export default Explore;
