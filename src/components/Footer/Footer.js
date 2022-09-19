import React from "react";
import { Waves } from "../../components";
import { icons } from "../../contstants";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className=" relative z-0 bottom-0">
      <div className="realtive bottom-0 ">
        <Waves deg="180deg" />
      </div>
      <div className="flex justify-center left-0 right-0 xl:top-[200px] items-center
      text-center
      xl:mt-10 md:top-[150px] absolute">
        <div
          className=" absolute -top-10 xl:top-10 shadow-xl lg:shadow-none p-2
        md:shadow-none
        xsm:shadow-none
        "
        >
          <motion.h1
            style={{ textShadow: "1px 3px 3px gray" }}
            initial={{ y: -60, opacity: 0.6 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 0 }}
            transition={{ duration: 3, type: "spring" }}
            className="text-[1rem] xl:text-[3.5rem] lg:text-[3rem]
             md:text-[2rem]
             text-center tracking-wider capitalize font-title  mt-[0px] 
              xl:-mt-[20px] xl:text-white
              md:mt-[50px]
              lg:mt-[140px]
             lg:text-white "
          >
            Intersted In working with us ?
          </motion.h1>
          <div className="flex justify-center items-center">
            <motion.button
              initial={{
                boxShadow: "inset 0px 0px 1px 2px  white",
                background: "#7329ac",
              }}
              whileHover={{
                boxShadow: "inset 2px 4px 5px gray",
                background: "#eee",
                color: "black",
              }}
              exit={{
                boxShadow: "inset 0px 0px 1px 2px  white",
                background: "#7329ac",
              }}
              className=" bg-purple hover:bg-lightpurple transition-[0.6s] 
            shadow-secondary shadow-white text-white text-center px-10 p-2
            text-[16px]
            xl:px-20
             rounded-[20px] xl:p-3 xl:mt-6 lg:mt-7 m-2 mt-4 md:mt-6 
             "
            >
              Lets Talk
            </motion.button>
          </div>

          <ul
            className="flex justify-center xl:mt-[85px] 
          lg:mt-[100px]
          mt-[12px] m-4 
          md:mt-[50px]
          "
          >
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
