import React from "react";
import { data, images } from "../../contstants";
const Projects = () => {
  return (
    <div className="p-[2rem]">
      {/* {data.projects.map((item,index)=>{key={index}
return ( */}
      <div className=" rounded-[30px] w-[350px] border shadow bg-[#eee] ">
        <img src={images.w1} className=' h-[220px] object-cover w-screen'/>
        <div className="p-[1rem]">
          <h3 className=" font-semibold text-lg">Movie ticket app case </h3>
          <div className="grid grid-cols-5 mt-2">
        <div className=" col-span-1"><img src={images.w2}  className=' rounded-[50%] w-[57px] h-[57px]
            '/>  </div>
            <div className=" col-span-3 mt-2">
              <h5 className=" font-semibold ">ALi</h5>
              <p> May 19 2020</p>
            </div>
          </div>
        </div>
      </div>
      {/* )


})} */}
    </div>
  );
};

export default Projects;
