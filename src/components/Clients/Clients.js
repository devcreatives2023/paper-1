import React from "react";
import { images } from "../../contstants";
const Clients = () => {
  return (
    <div className="text-center leading-10  mt-[100px] xl:mt-0 lg:mt-0 h-[55vh] xl:h-[60vh]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-h1 font-title  tracking-wider ">Clients</h1>
        <p className=" tracking-wide text-sm xl:text-lg  mt-3">
          Leo vel fringilla est ullamcorper. Tincidunt eget nullam non nisi.
        </p>
        <div className="w-[60px] mt-2 ml-[10px] bg-lightpurple h-[1px]" />
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-rows-3 grid-cols-5  xl:w-[60%] p-4 gap-5 mt-10">
          <div className="row-span-3  shadow-lg xl:mt-[80px] mt-[60%] bg-[#eee] h-[80px]  xl:h-[100px] lg:h-[100px] md:h-[90px]  flex items-center rounded-[20px] ">
            <img src={images.logo1} className="" />
          </div>
          <div className="row-span-1  bg-[#eee]  shadow-lg   flex items-center rounded-[20px]  h-[80px]  xl:h-[100px] lg:h-[100px] md:h-[90px]">
            <img src={images.logo2} className="" />
          </div>
          <div className="row-span-1  bg-[#eee] h-[80px]  xl:h-[100px] lg:h-[100px] md:h-[90px] shadow-lg flex items-center rounded-[20px] ">
            <img src={images.logo3} className="" />
          </div>
          <div className="row-span-1 bg-[#eee] h-[80px]  xl:h-[100px] lg:h-[100px] md:h-[90px]  shadow-lg flex items-center rounded-[20px] ">
            <img src={images.logo3} className="" />
          </div>
          <div className="row-span-3 bg-[#eee] xl:mt-[80px] mt-[60%] h-[80px]  xl:h-[100px] lg:h-[100px] md:h-[90px]  shadow-lg flex items-center rounded-[20px] ">
            <img src={images.logo4} className="" />
          </div>
          <div className="row-span-1 bg-[#eee] h-[80px]  xl:h-[100px] lg:h-[100px] md:h-[90px]  shadow-lg flex items-center rounded-[20px] ">
            <img src={images.logo3} className="" />
          </div>
          <div className="row-span-1 bg-[#eee] h-[80px]  xl:h-[100px] lg:h-[100px] md:h-[90px] shadow-lg flex items-center rounded-[20px] ">
            <img src={images.logo3} className="" />
          </div>
          <div className="row-span-1  bg-[#eee] h-[80px]   xl:h-[100px] lg:h-[100px] md:h-[90px]  shadow-lg flex items-center rounded-[20px] ">
            <img src={images.logo3} className="" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Clients;
