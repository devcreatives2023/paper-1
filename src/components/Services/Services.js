import React from "react";
import { data } from "../../contstants";
const Services = () => {
  return (
    <div className=" h-[90vh] md:h-[70vh] xl:h-section  lg:h-section">
      <div className="flex  items-center justify-center">
        <h1 className="text-h1 font-title  tracking-wider ">
          What We Do
          <div className="w-[60px] ml-[100px] 
          bg-lightpurple h-[1px]" />
        </h1>
      </div>
      <div className="flex  justify-center items-center">
        <div className="grid  grid-cols-2 xl:grid-cols-3 lg:grid-cols-3  gap-3 xl:gap-10 mt-10 text-center">
          {data.services.map((items, index) => {
            return (
              <div key={index} className=" xl:w-[250px] lg:w-[250px]  flex flex-col justify-between items-center">
             <div
             className="w-[80px] flex shadow-main items-center justify-center  rounded-[50%] p-4 bg-[#eee]">
              <img src={items.icon}  className="bg-white  border-2 rounded-[50%] p-1" />
              </div>   
                <h2 className=" font-semibold text-lg py-1">{items.name} </h2>
                <p className="text-sm   text-[gray]">{items.text} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
