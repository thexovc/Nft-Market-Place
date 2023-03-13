const Instruction = () => {
  return (
    <div className="w-full flex flex-col gap-10 pt-16">
      <div className="w-[90%] mx-auto gap-3 flex flex-col">
        <h1 className="text-5xl font-bold md:text-8xl">Own your creativity.</h1>
        <p className="gray-text text-xl font-bold md:text-3xl">
          Each web3 community is unique and deserves a custom marketplace with
          its own look, features, fees.
        </p>
      </div>

      {/* section start */}
      <div className="w-[90%] mx-auto pb-5 flex md:flex-row flex-col-reverse gap-5 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h1 className="text-5xl font-bold md:text-8xl">
            Your Collection, your way.
          </h1>
          <p className="gray-text text-xl md:text-2xl">
            In web3, artists are taking back ownership and control over their
            creativity. All collections on Crypter are creator-owned smart
            contracts that will stand the test of time.
          </p>
          <p className="text-xl md:text-2xl">
            - You’ll earn a 10% royalty for all secondary market sales.
          </p>
          <p className="text-xl md:text-2xl">
            - Creativity is valuable on Crypter
          </p>
          <button
            className="w-[40%] md:w-[30%] border-[#202025] dark:border-[#F7FBFA] 
             px-2 py-3 rounded-xl hover:bg-[#202025] hover:text-[#F7FBFA] 
            dark:hover:bg-[#F7FBFA] dark:hover:text-[#202025] cursor-pointer 
            font-medium border-[3px] text-xl"
          >
            Mint
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <video
            className="rounded-2xl"
            autoPlay
            src="https://ui8-crypter-2.herokuapp.com/img/videos/video-1.mp4"
          ></video>
        </div>
      </div>
      {/* section end */}

      {/* section start */}
      <div className="w-[90%] mx-auto pb-5 flex md:flex-row flex-col gap-5 items-center">
        <div className="w-full md:w-1/2">
          <video
            className="rounded-2xl"
            autoPlay
            src="https://ui8-crypter-2.herokuapp.com/img/videos/video-2.mp4"
          ></video>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h1 className="text-5xl font-bold md:text-8xl">Lowest mint fees</h1>
          <p className="gray-text text-xl md:text-2xl">
            Minting an NFT is like adding your signature to a painting. Make
            your mark in web3 with works that are emblematic of your creative
            practice.
          </p>
          <p className="gray-text text-xl md:text-2xl">
            Plus, you’ll earn a 10% royalty for all secondary market sales.
            Forever.
          </p>
          <button
            className="w-[50%] md:w-[30%] border-[#202025] dark:border-[#F7FBFA] 
             px-2 py-3 rounded-xl hover:bg-[#202025] hover:text-[#F7FBFA] 
            dark:hover:bg-[#F7FBFA] dark:hover:text-[#202025] cursor-pointer 
            font-medium border-[3px] text-xl"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      {/* section end */}

      {/* section start */}
      <div className="w-[90%] mx-auto pb-5 flex md:flex-row-reverse flex-col gap-5 items-center">
        <div className="w-full md:w-1/2">
          <video
            className="rounded-2xl"
            autoPlay
            src="https://ui8-crypter-2.herokuapp.com/img/videos/video-3.mp4"
          ></video>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h1 className="text-5xl font-bold md:text-8xl">
            Create together, earn together.
          </h1>
          <p className="gray-text text-xl md:text-2xl">
            Add a Split to your NFT to seamlessly pay creative
            collaborators—photographers, producers, choreographers, dancers,
            poets—and so on.
          </p>
          <p className="gray-text text-xl md:text-2xl">
            You can also use Splits to donate directly to the causes you care
            about most. That’s the web3 way.
          </p>
          <button
            className="w-[50%] md:w-[30%] border-[#202025] dark:border-[#F7FBFA] 
             px-2 py-3 rounded-xl hover:bg-[#202025] hover:text-[#F7FBFA] 
            dark:hover:bg-[#F7FBFA] dark:hover:text-[#202025] cursor-pointer 
            font-medium border-[3px] text-xl"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      {/* section end */}
    </div>
  );
};

export default Instruction;
