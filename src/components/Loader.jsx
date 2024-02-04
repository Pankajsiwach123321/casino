import React from "react";

const Loader = () => {
  return (
    <div>
      <div className=" min-h-screen fixed top-0 left-0 bg-[#00141B] z-[40] w-full flex justify-center items-center">
        <div className=" w-16 h-16 border-[5px] border-t-[#F5DEAB] border-b-[#BA3090] border-l-[#482EBB] border-r-[#E0506C] border-black animate-spin rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
