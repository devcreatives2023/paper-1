import React from "react";
import { images } from "../../contstants";
const Clients = () => {
  return (
    <div className="   text-center leading-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-h1 font-title  tracking-wider ">Clients</h1>
        <p className=" tracking-wide">
          Leo vel fringilla est ullamcorper. Tincidunt eget nullam non nisi.
        </p>
        <div className="w-[60px] mt-2 ml-[10px] bg-lightpurple h-[1px]" />
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-rows-3 grid-cols-5 w-[60%] gap-5 mt-10">
          <div className="row-span-3  shadow-lg mt-[80px] bg-[#eee] h-[100px]  flex items-center rounded-[20px] ">
            <img src={images.logo1} className="" />
          </div>
          <div className="row-span-1  bg-[#eee]  shadow-lg h-[100px]  flex items-center rounded-[20px] ">
            <img src={images.logo2} className="" />
          </div>
          <div className="row-span-1  bg-[#eee] h-[100px]  shadow-lg flex items-center rounded-[20px] ">
            <img src={images.logo3} className="" />
          </div>
          <div className="row-span-1 bg-[#eee] h-[100px]  shadow-lg flex items-center rounded-[20px] ">
            <img src={images.logo3} className="" />
          </div>
          <div className="row-span-3 bg-[#eee] mt-[80px] h-[100px]  shadow-lg flex items-center rounded-[20px] ">
            <img src={images.logo4} className="" />
          </div>
          <div className="row-span-1 bg-[#eee] h-[100px]  shadow-lg flex items-center rounded-[20px] ">
            <img src={images.logo3} className="" />
          </div>
          <div className="row-span-1 bg-[#eee] h-[100px]  shadow-lg flex items-center rounded-[20px] ">
            <img src={images.logo3} className="" />
          </div>
          <div className="row-span-1  bg-[#eee] h-[100px]  shadow-lg flex items-center rounded-[20px] ">
            <img src={images.logo3} className="" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Clients;
