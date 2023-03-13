import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Essential/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Footer from "./components/Essential/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#F7FBFA] dark:bg-[#202025] text-[#202025] dark:text-[#f7fbfa]">
      <Navbar />
      <div className="w-full pt-28 pb-10 md:pt-32 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create/erc-721" element={<Create />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
