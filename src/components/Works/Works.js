import React from "react";
import { data, images } from "../../contstants";
const Works = () => {
  return (
    <div className="mt-[50px] ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-h1 capitalize font-title  tracking-wider ">
          Our Latest Works
        </h1>
        <div className="w-[60px] mt-2 ml-[10px] bg-lightpurple h-[1px]" />
      </div>

      <div
        className="cards  mt-[10px] rounded-[20px] flex flex-col justify-center 
      items-center m-auto  "
      >
        <div className="grid grid-cols-2  bg-work shadow  mt-10  rounded-[20px] justify-between  w-[60%]">
          {/* first */}
          <div className="w grid-cols-1 flex flex-col justify-center items-center">
            <h1 className=" tracking-wider text-h1 capitalize font-semibold  font-title">
              Lorem Ipsum
            </h1>
            <h3 className=" capitalize"> Development</h3>
            <button className=" font-semibold rounded-[20px] shadow-secondary  bg-white p-3 px-10 mt-4">
              view project
            </button>
          </div>
          <div className="grid-cols-1">
            <img src={images.w1} className=" rounded-[20px]  object-cover " />
          </div>
        </div>
        {/* second */}
        <div className="grid grid-cols-2 bg-work shadow  mt-10  rounded-[20px] justify-between  w-[60%]">
          <div className="  grid-cols-1">
            <img src={images.w1} className=" rounded-[20px]  object-cover " />
          </div>
          <div className="w grid-cols-1 flex flex-col justify-center items-center">
            <h1 className=" tracking-wider text-h1 capitalize font-semibold  font-title">
              Lorem Ipsum
            </h1>
            <h3 className=" capitalize"> Development</h3>
            <button className=" font-semibold rounded-[20px] shadow-secondary  bg-white p-3 px-10 mt-4">
              view project{" "}
            </button>
          </div>
        </div>
        {/* third */}
        <div className="grid grid-cols-2 bg-work shadow  mt-10  rounded-[20px] justify-between  w-[60%]">
          <div className="w grid-cols-1 flex flex-col justify-center items-center">
            <h1 className=" tracking-wider text-h1 capitalize font-semibold  font-title">
              Lorem Ipsum
            </h1>
            <h3 className=" capitalize"> Development</h3>
            <button className=" font-semibold rounded-[20px] shadow-secondary  bg-white p-3 px-10 mt-4">
              view project{" "}
            </button>
          </div>
          <div className="  grid-cols-1">
            <img src={images.w1} className=" rounded-[20px]  object-cover " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
