import React from "react";
import { Link } from "react-router-dom";
import { Waves } from "../../components";
import { motion } from "framer-motion";
import { images, icons } from "../../contstants";
import { ContextProvider } from "../../context/Context";

const Header = ({ title, text, btn }) => {
const {openModel,model}=React.useContext(ContextProvider)
  return (
    <header className="h-[45vh] md:h-[30vh] xl:h-section lg:h-section">
      <Waves deg="360deg" />
      <div className="absolute  z-20 left-0 right-0">
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0 }}
          transition={{ type: "spring", duration: 1, delay: "1" }}
          className=" xl:left-[340px] md:left-[100px] left-[20px] absolute top-10 font-bold flex shadow-xl text-white"
        >
          TECHBOOM <icons.GiSonicBoom />
        </motion.div>

        <ul className="grid xl:grid-cols-3  text-center grid-cols-3 text-[#eee] absolute top-[35px] xl:top-12 right-5 xl:right-[350px] gap-2 xl:gap-6">
          <motion.li
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0 }}
            transition={{ type: "spring", duration: 2, delay: "1" }}
            className=" hover:text-white shadow-xl text-lg"
          >
            <Link to="/"> Home </Link>
          </motion.li>
          <motion.li
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0 }}
            transition={{ type: "spring", duration: 3, delay: "1.2" }}
            className=" hover:text-white shadow-xl text-lg"
          >
            <Link to="/blog"> Blog </Link>
          </motion.li>
          <motion.li
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0 }}
            transition={{ type: "spring", duration: 4, delay: "1.3" }}
            className=" hover:text-white shadow-xl text-lg"
          >
            <button onClick={openModel} className=' border-none  outline-none'>{model?<icons.MdConnectWithoutContact fontSize={30} /> :"Contact"}</button>
             {/* <Link to="/contact">Contact</Link> */}
          </motion.li>
        </ul>
        
        <div
          className="mt-[130px] xl:mt-[150px] lg:mt-[150px]  md:mt-[90px] text-center
         text-white p-4"
        >
          <h1
            style={{ textShadow: "1px 3px 3px gray" }}
            className=" text-[2rem] xl:text-xl
            lg:text-[3rem]
            text-black lg:text-white md:text-white xl:text-white tracking-wide 
            font-bold capitalize  flex items-center justify-center font-title"
          >
            {title}
          </h1>
          {text ? (
            <p className=" text-purple text-sm xl:text-lg">
              Of is het nu Lorum Ipsem, Lorum Ipsom, Lorem Ipsom? Nee, officieel
              is het “Lorum Ipsem”.
            </p>
          ) : (
            ""
          )}
          {btn ? (
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
              className="xl:text-[22px] rounded-[30px] hover:bg-lightpurple bg-purple mt-[10px] md:mt-[17px] xl:mt-16 
            px-[20px] xl:px-[75px] p-2 font-semibold  transition-all duration-[0.6s]"
              style={{ boxShadow: "inset 0px 0px 1px 2px  white" }}
            >
              Let's Talk
            </motion.button>
          ) : (
            ""
          )}
        </div>
      </div>

      <div
        className="absolute hidden lg:hidden  xl:inline-block z-30 xl:left-[30px] -left-[10px] 
       top-[218px] xl:top-[218px] lg:top-[91px] lg:left-[50px]"
      >
        <img src={images.gh1} className="w-[340px] lg:inline-block lg:w-[80%] xl:w-[350px] " />
      </div>
      <div
        className="absolute z-30 right-[40px] hidden sm:hidden  
        md:hidden xl:inline-block lg:hidden top-[260px] xl:top-[160px] w-[60%] 
        xl:right-[70px]
         xl:w-[15%] 
         lg:w-[200px]
         lg:top-[100px]
         lg:right-[120px]
         
         "
      >
        <img
          src={images.gh2}
          className="w-[340px] lg:rotate-[7deg]  "
        />
      </div>
    </header>
  );
};

export default Header;
