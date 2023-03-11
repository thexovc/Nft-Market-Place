import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex px-[2.5rem] h-[5.5rem] md:h-[6rem] text-[#010101]">
        <div className="w-1/2 justify-start flex items-center ">
          <img class="h-8 w-auto" src={logo} alt="Logo" />
          <span class="font-medium text-xl tracking-tight ml-2">KYIT</span>
        </div>

        <div className="w-1/2 flex justify-end items-center gap-10 text-sm uppercase font-medium">
          <a>Discover</a>
          <a>Feed</a>
          <a
            className="border-[#202025] border-[0.125rem] 
          px-10 py-3 rounded-lg hover:bg-[#202025] hover:text-[#F7FBFA] cursor-pointer"
          >
            Connect Wallet
          </a>
          <a>menu</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
