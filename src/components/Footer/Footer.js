import React from "react";
import { Waves } from "../../components";
import { icons } from "../../contstants";
const Footer = () => {
  return (
    <div className=" relative z-0">
      <div className="realtive ">
        <Waves deg="180deg" />
      </div>
      <div className="  flex justify-center left-0 right-0 xl:top-[300px] items-center xl:mt-10 md:top-[150px] absolute">
        <div className=" absolute top-0">
          <h1
            style={{ textShadow: "1px 3px 3px gray" }}
            className="text-[1rem] xl:text-[3.5rem] lg:text-[3rem] md:text-[2rem] text-center capitalize font-title xl:shadow-lg mt-[0px]  xl:-mt-[10px] xl:text-white lg:text-white "
          >
            Intersted In working with us ?
          </h1>
          <div className="flex justify-center items-center">
            <button className=" bg-purple hover:bg-lightpurple transition-[0.6s] shadow-secondary shadow-white text-white text-center px-10 p-2 xl:px-20 rounded-[20px] xl:p-3 mt-6 ">
              Lets Talk
            </button>
          </div>

            <ul className="flex justify-center xl:mt-5 mt-2">
              <li className=" text-[18px] xl:text-[24px] mx-2 cursor-pointer shadow-main rounded-[50%] p-4  text-purple bg-[#eee]">
                <icons.BsInstagram />
              </li>
              <li className=" text-[18px] xl:text-[24px] mx-2 cursor-pointer shadow-main rounded-[50%] p-4 bg-[#eee]   text-purple">
                <icons.MdOutlineSportsVolleyball />
              </li>
              <li className="text-[18px] xl:text-[24px] mx-2 cursor-pointer shadow-main rounded-[50%] p-4 bg-[#eee]   text-purple">
                <icons.BsBehance />
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Footer;
