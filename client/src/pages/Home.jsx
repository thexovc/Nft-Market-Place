import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import ghost from "../assets/apex.jpg";
import p1 from "../assets/ghost.jpg";
import p2 from "../assets/pubg.jpg";
import p3 from "../assets/coc.jpg";
import p4 from "../assets/codm.jpg";
import CardColl from "../components/Home/CardColl";
import Promoted from "../components/Home/Promoted";

const Home = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

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

      <div className="w-[90%] py-5 md:pt-20 mx-auto flex flex-col gap-5">
        <h1 className="text-2xl font-medium">Explore</h1>

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
      </div>

      {/* featured collection */}
      <div className="md:w-full w-[95%] mx-auto px-3 gap-2 flex items-center">
        {/* collection start */}
        <MdChevronLeft
          onClick={slideLeft}
          className="hidden cursor-pointer opacity-50 hover:opacity-100 md:flex"
          size={45}
        />
        <div
          id="slider"
          className="w-full md:py-5 py-2 mx-auto overflow-x-auto scroll-smooth scrollbar-hide flex flex-row gap-5"
        >
          <CardColl image={p2} />
          <CardColl image={ghost} />
          <CardColl image={p1} />
          <CardColl image={p3} />
          <CardColl image={p4} />
          <CardColl image={p1} />
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="hidden cursor-pointer opacity-50 hover:opacity-100 md:flex"
          size={45}
        />
        {/* collection end */}
      </div>
      <div className="w-full py-4 justify-center flex">
        <button className="px-5 py-2 font-medium rounded-xl shadow-gray-600 dark:shadow-gray-200 shadow-sm">
          Show more
        </button>
      </div>
      {/* featured end */}

      {/* promoted start */}
      <div className="w-[90%] md:pt-10 pt-5 mx-auto flex flex-col gap-5">
        <h1 className="text-2xl font-medium">Promoted Creations</h1>
      </div>
      <div className="w-[95%] md:w-full px-3 flex flex-col pt-4 gap-5 mx-auto">
        <div className="md:w-full w-full mx-auto gap-2 flex items-center">
          <MdChevronLeft
            onClick={slideLeft}
            className="hidden cursor-pointer opacity-50 hover:opacity-100 md:flex"
            size={45}
          />
          <div
            id="slider"
            className="w-full md:py-5 py-2 mx-auto overflow-x-auto scroll-smooth scrollbar-hide flex flex-row gap-5"
          >
            <Promoted image={p1} />
            <Promoted image={ghost} />
            <Promoted image={p2} />
            <Promoted image={p3} />
            <Promoted image={p4} />
          </div>
          <MdChevronRight
            onClick={slideRight}
            className="hidden cursor-pointer opacity-50 hover:opacity-100 md:flex"
            size={45}
          />
          {/* collection end */}
        </div>
      </div>
      {/* promoted end */}
    </div>
  );
};

export default Home;
