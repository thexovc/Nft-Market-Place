import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Essential/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Essential/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#F7FBFA] dark:bg-[#202025] text-[#202025] dark:text-[#f7fbfa]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
