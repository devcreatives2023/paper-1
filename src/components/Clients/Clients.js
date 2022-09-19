import React from "react";
import { images } from "../../contstants";
import { motion } from "framer-motion";
const Clients = () => {
  return (
    <div className="text-center leading-10  mt-[100px] xl:mt-0 lg:mt[60px] h-[55vh] xl:h-[60vh]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[25px] lg:text-[2rem] xl:text-h1 font-title  tracking-wider ">
          Clients
        </h1>
        <p className=" tracking-wide text-sm xl:text-lg  mt-3">
          Leo vel fringilla est ullamcorper. Tincidunt eget nullam non nisi.
        </p>
        <div className="w-[60px] mt-2 ml-[10px] bg-lightpurple h-[1px]" />
      </div>

      <div className="flex justify-center items-center">
        <motion.div
          initial={{ x: -40, opacity: 0.6 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 0 }}
          transition={{ duration: 2, type: "tween" }}
          className="grid grid-rows-4 grid-cols-3  xl:w-[60%] p-4 gap-[25px] mt-10"
        >
          <div className=" row-span-4">
            <div className="row-span-2 mt-7  bg-[#eee]  shadow- justify-center g   flex items-center rounded-[20px]  h-[80px]  xl:h-[100px] lg:h-[100px] md:h-[90px]">
              <img src={images.logo3} className='w-[100px] h-[100x] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] object-cover flex justify-center items-center' />
            </div>
            <div className="row-span-2 mt-7  bg-[#eee] h-[80px]  justify-center  xl:h-[100px] lg:h-[100px] md:h-[90px] shadow-lg flex items-center rounded-[20px] ">
              <img src={images.logo3} className='w-[100px] h-[100x] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] object-cover flex justify-center items-center' />
            </div>
          </div>
          <div className="row-span-4">
            <div className="row-span-2 mt-7 bg-[#eee] h-[80px]   justify-center xl:h-[100px] lg:h-[100px] md:h-[90px]  shadow-lg flex items-center rounded-[20px] ">
              <img src={images.logo3} className='w-[100px] h-[100x] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] object-cover flex justify-center items-center' />
            </div>
            <div className="row-span-2 mt-7 bg-[#eee] h-[80px]   justify-center xl:h-[100px] lg:h-[100px] md:h-[90px]  shadow-lg flex items-center rounded-[20px] ">
              <img src={images.logo3} className='w-[100px] h-[100x] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] object-cover flex justify-center items-center' />
            </div>
          </div>
          <div className="row-span-4">
            <div className="row-span-2 mt-7 bg-[#eee] h-[80px]   justify-center xl:h-[100px] lg:h-[100px] md:h-[90px] shadow-lg flex items-center rounded-[20px] ">
              <img src={images.logo3} className='w-[100px] h-[100x] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] object-cover flex justify-center items-center' />
            </div>
            <div className="row-span-2 mt-7  bg-[#eee] h-[80px]  justify-center   xl:h-[100px] lg:h-[100px] md:h-[90px]  shadow-lg flex items-center rounded-[20px] ">
              <img src={images.logo3} className='w-[100px] h-[100x] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] object-cover flex justify-center items-center' />
            </div>
          </div>
        </motion.div>
        <div></div>
      </div>
    </div>
  );
};

export default Clients;
