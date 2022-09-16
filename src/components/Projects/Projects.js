import React from "react";
import { data, icons} from "../../contstants";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="flex items-center justify-center -mt-[90px] md:mt-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {data.projects.map((item, index) => {
          return (
            <div
              key={index}
              className=" rounded-[30px]   w-[330px] h-[380px] border shadow  overflow-hidden "
            >
              <div className=" overflow-hidden">
                <motion.img
                  src={item.img}
                  className="rounded-t-lg h-[220px] cursor-pointer object-cover w-screen"
                  inital={{ scale: 1.1 }}
                  whileHover={{ scale: 1.1, rotate: "2deg" }}
                  transition={{ duration: 2, type: "spring" }}
                />
              </div>
              <div className="p-[1rem] cursor-pointer">
                <h3 className=" font-semibold text-lg">{item.name}</h3>
                <div className="grid grid-cols-5 mt-2 gap-3">
                  <div className=" col-span-1">
                    <img
                      src={item.developerimg}
                      className=" rounded-[50%] w-[57px] h-[57px]
            "
                    />
                  </div>
                  <div className=" col-span-3 mt-2">
                    <h5 className=" font-semibold text-lg">{item.devname}</h5>
                    <p className="text-[gray] text-sm"> {item.date}</p>
                  </div>
                  <div className="col-span-1 mt-5 flex justify-center items-center  w-[35px] h-[35px] shadow-main rounded-[50%] p-1 bg-white" >
<icons.FcAddImage />
                     </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
