import React from "react";
import { Link } from "react-router-dom";
import { Waves } from "../../components";
import { images, icons } from "../../contstants";
const Header = () => {
  return (
    <header className="h-section">
      <Waves deg="360deg" />
      <div className="absolute  z-20 left-0 right-0">
        <div className=" left-[340px] absolute top-10 font-bold flex shadow-xl text-white">
          TECHBOOM <icons.GiSonicBoom />
        </div>
        <ul className="grid grid-cols-3 text-[#eee] absolute top-12 right-[350px] gap-6">
          <li className=" hover:text-white shadow-xl text-lg">
            <Link to=""> Home </Link>{" "}
          </li>
          <li className=" hover:text-white shadow-xl text-lg">
            <Link to=""> Blog </Link>{" "}
          </li>
          <li className=" hover:text-white shadow-xl text-lg">
            <Link to=""> Contact </Link>{" "}
          </li>
        </ul>
        <div className="mt-[150px] text-center text-white p-4">
          <h1
            style={{ textShadow: "1px 3px 3px gray" }}
            className=" text-xl text-white tracking-wide  font-bold capitalize  flex items-center justify-center font-title"
          >
            We Are Techboom
          </h1>
          <p className=" text-purple">
            Of is het nu Lorum Ipsem, Lorum Ipsom, Lorem Ipsom? Nee, officieel
            is het “Lorum Ipsem”.
          </p>
          <button
            className="text-[22px] rounded-[30px] hover:bg-lightpurple bg-purple mt-16 
            px-[75px] p-2 font-semibold  transition-all duration-[0.6s]"
            style={{ boxShadow: "inset 0px 0px 1px 2px  white" }}
          >
            Let's Talk
          </button>
        </div>
      </div>

      <div className="absolute z-30 left-[10px]  top-[218px]">
        <img src={images.gh1} />
      </div>
      <div className="absolute z-30 right-[120px]  top-[160px]  w-[15%]">
        <img src={images.gh2} />
      </div>

    </header>
  );
};

export default Header;
