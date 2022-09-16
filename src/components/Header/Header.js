import React from "react";
import { Link } from "react-router-dom";
import { Waves } from "../../components";
import { motion } from "framer-motion";
import { images, icons } from "../../contstants";
const Header = () => {
  return (
    <header className="h-[75vh] md:h-[40vh] xl:h-section lg:h-section">
      <Waves deg="360deg" />
      <div className="absolute  z-20 left-0 right-0">
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0 }}
          transition={{ type: "spring", duration: 1, delay: "1" }}
          className=" xl:left-[340px] md:left-[140px] left-[20px] absolute top-10 font-bold flex shadow-xl text-white"
        >
          TECHBOOM <icons.GiSonicBoom />
        </motion.div>
        <ul className="grid xl:grid-cols-3 grid-cols-3 text-[#eee] absolute top-[35px] xl:top-12 right-5 xl:right-[350px] gap-2 xl:gap-6">
          <motion.li
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0 }}
            transition={{ type: "spring", duration: 2, delay: "1" }}
            className=" hover:text-white shadow-xl text-lg"
          >
            <Link to="/"> Home </Link>{" "}
          </motion.li>
          <motion.li
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0 }}
            transition={{ type: "spring", duration: 3, delay: "1.2" }}
            className=" hover:text-white shadow-xl text-lg"
          >
            <Link to=""> Blog </Link>{" "}
          </motion.li>
          <motion.li
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0 }}
            transition={{ type: "spring", duration: 4, delay: "1.3" }}
            className=" hover:text-white shadow-xl text-lg"
          >
            <Link to=""> Contact </Link>{" "}
          </motion.li>
        </ul>
        <div className="mt-[110px] xl:mt-[150px] md:mt-[90px] text-center text-white p-4">
          <h1
            style={{ textShadow: "1px 3px 3px gray" }}
            className=" text-[2rem] xl:text-xl
            lg:text-[3rem]
            text-black lg:text-white md:text-white xl:text-white tracking-wide 
            font-bold capitalize  flex items-center justify-center font-title"
          >
            We Are Techboom
          </h1>
          <p className=" text-purple text-sm xl:text-lg">
            Of is het nu Lorum Ipsem, Lorum Ipsom, Lorem Ipsom? Nee, officieel
            is het “Lorum Ipsem”.
          </p>
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
            className="xl:text-[22px] rounded-[30px] hover:bg-lightpurple bg-purple mt-[10px] xl:mt-16 
            px-[20px] xl:px-[75px] p-2 font-semibold  transition-all duration-[0.6s]"
            style={{ boxShadow: "inset 0px 0px 1px 2px  white" }}
          >
            Let's Talk
          </motion.button>
        </div>
      </div>

      <div className="absolute hidden xl:inline-block z-30 left-[30px]  top-[218px]">
        <img src={images.gh1} />
      </div>
      <div
        className="absolute z-30 right-[110px]  visible sm:invisible  
      md:invisible xl:visible lg:invisible   top-[260px] xl:top-[160px] w-[60%] 
       xl:w-[15%] "
      
      >
        <img src={images.gh2} />
      </div>
    </header>
  );
};

export default Header;
