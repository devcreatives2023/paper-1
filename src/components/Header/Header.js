import React from "react";
import { Link } from "react-router-dom";
import { Waves } from "../../components";
import { images, icons } from "../../contstants";
const Header = () => {
  return (
    <header className="h-[60vh] md:h-[30vh] xl:h-section lg:h-section">
      <Waves deg="360deg" />
      <div className="absolute  z-20 left-0 right-0">
        <div className=" xl:left-[340px] md:left-[140px] left-[20px] absolute top-10 font-bold flex shadow-xl text-white">
          TECHBOOM <icons.GiSonicBoom />
        </div>
        <ul className="grid xl:grid-cols-3 grid-cols-3 text-[#eee] absolute top-[35px] xl:top-12 right-5 xl:right-[350px] gap-2 xl:gap-6">
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
        <div className="mt-[110px] xl:mt-[150px] md:mt-[90px] text-center text-white p-4">
          <h1
            style={{ textShadow: "1px 3px 3px gray" }}
            className=" text-[2rem] xl:text-xl text-black lg:text-white md:text-white xl:text-white tracking-wide 
            font-bold capitalize  flex items-center justify-center font-title"
          >
            We Are Techboom
          </h1>
          <p className=" text-purple text-sm xl:text-lg">
            Of is het nu Lorum Ipsem, Lorum Ipsom, Lorem Ipsom? Nee, officieel
            is het “Lorum Ipsem”.
          </p>
          <button
            className="xl:text-[22px] rounded-[30px] hover:bg-lightpurple bg-purple mt-[10px] xl:mt-16 
            px-[20px] xl:px-[75px] p-2 font-semibold  transition-all duration-[0.6s]"
            style={{ boxShadow: "inset 0px 0px 1px 2px  white" }}
          >
            Let's Talk
          </button>
        </div>
      </div>

      <div className="absolute hidden xl:inline-block z-30 left-[30px]  top-[218px]">
        <img src={images.gh1} />
      </div>
      <div className="absolute z-30 right-[110px]  visible sm:invisible lg:invisible md:invisible xl:visible lg:visible   top-[260px] xl:top-[160px] w-[60%]  xl:w-[15%]">
        <img src={images.gh2} />
      </div>

    </header>
  );
};

export default Header;
