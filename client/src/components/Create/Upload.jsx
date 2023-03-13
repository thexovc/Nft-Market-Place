import React from "react";

const Upload = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h1>Upload a file</h1>

      <div
        className="w-[95%] mx-auto border-dashed border-[0.1rem] 
      border-[#686a6c] rounded-xl flex flex-col 
      justify-center items-center gray-text p-6 gap-5"
      >
        <p className="text-lg text-center">
          {" "}
          PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
        </p>

        <button className="dark-text dark:bg-color font-medium bg-gray-300 p-2 rounded-lg">
          Choose File
        </button>
      </div>
    </div>
  );
};

export default Upload;
