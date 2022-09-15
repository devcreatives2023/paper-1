import React from "react";
import { Waves } from "../../components";

const Footer = () => {
  return (
    <div className=" relative z-0">
      <div>
        <Waves deg="180deg" />
      </div>
      <div className="  flex justify-center left-0 right-0 top-[300px] items-center mt-10 absolute">
        <div className=" absolute top-0">
          <h1
            style={{ textShadow: "1px 3px 3px gray" }}
            className=" text-[3.5rem] text-center capitalize font-title shadow-lg  text-white "
          >
            Intersted In working with us ?
          </h1>
          <div className="flex justify-center items-center">
            <button className=" bg-purple hover:bg-lightpurple transition-[0.6s] shadow-secondary shadow-white text-white text-center px-20 rounded-[20px] p-3 mt-6 ">
              Lets Talk
            </button>
          </div>

          <div className="flex items-center justify-around ">  </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
