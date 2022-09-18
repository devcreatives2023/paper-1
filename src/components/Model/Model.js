import React from "react";
import { ContextProvider } from "../../context/Context";
import { motion, AnimatePresence } from "framer-motion";
import { icons, images } from "../../contstants";
const backdrop = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforChildren",
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforChildren",
      staggerChildren: 0.4,
    },
  },
};

const modal = {
  visible: {
    opacity: 1,
    y: "100px",
    transition: {
      type: "string",
      ease: "easeInOut",
      duration: "2",
    },
  },
  hidden: {
    opacity: 0,
    y: "-200px",
    transition: {
      type: "string",
      ease: "easeInOut",
      duration: "2",
    },
  },
};

const Model = () => {
  const { model, closeModel } = React.useContext(ContextProvider);
  return (
    <>
      {model ? (
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="bg-modelbg  flex justify-between  p-[3rem]
            fixed top-0 left-0 w-[100%] h-[100%] z-40 "
            variants={backdrop}
            inital="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-white  rounded-[20px]
              fixed left-5 md:left-8 xl:left-0 lg:left-0 xl:right-0 lg:right-0 w-[90%] xl:w-[60%] lg:w-[60%]
              top-0 m-auto
              z-10
             flex flex-col
              p-5 "
              inital="hidden"
              animate="visible"
              variants={modal}
            >
              <div>
                <h1
                  style={{ textShadow: "1px 3px 3px gray" }}
                  className=" text-2xl xl:text-h1 text-center font-bold  mb-4 font-title tracking-wider "
                >
                  Contact with us
                </h1>
                <motion.button
                  onClick={closeModel}
                  className=" border-none  absolute  top-5 right-5  outline-none text-purple shadow-main p-3 bg-[#eee] rounded-full text-2xl "
                >
                  <icons.GiCrossMark />
                </motion.button>
              </div>
              <>
                <div className=" grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-2  ">
                  
                  <form className=" rounded-[30px]  px-8 pt-6 pb-8 mb-4 grid-cols-2
                   xl:grid-cols-1 lg:grid-cols-1 ">
                    <div className="mb-4">
                      <label
                        className="block bg-transparent text-lg text-purple font-semibold font-title tracking-wider  "
                        htmlFor="username"
                      >
                        Name
                      </label>
                      <input
                        className=" appearance-none  border-b-[1px] w-full  px-3 bg-transparent  border-[purple] leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block bg-transparent border-none border-b-[1px] border-lightpurple text-lg text-purple font-semibold font-title tracking-wider  "
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className=" appearance-none  border-b-[1px] w-full  px-3 bg-transparent  border-lightpurple leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block bg-transparent border-none border-b-[1px] border-lightpurple text-lg text-purple font-semibold font-title tracking-wider  "
                        htmlFor="email"
                      >
                        Subject
                      </label>
                      <input
                        className=" appearance-none  border-b-[1px] w-full  px-3 bg-transparent  border-lightpurple leading-tight focus:outline-none focus:shadow-outline"
                        id="text"
                        type="text"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block bg-transparent border-none border-b-[1px] border-lightpurple text-lg text-purple font-semibold font-title tracking-wider  "
                        htmlFor="text"
                      >
                        Message
                      </label>
                      <textarea
                        rows={3}
                        style={{ resize: "none" }}
                        className=" appearance-none  border-b-[1px] w-full  px-3 bg-transparent  border-lightpurple leading-tight focus:outline-none focus:shadow-outline"
                        id="text"
                      ></textarea>
                    </div>
                    <div className="flex justify-between">
                      <button
                        className="bg-purple flex justify-between py-3 capitalize items-center hover:bg-lightpurple transition-all duration-[0.6s] text-white font-bold  px-7 rounded-[20px] focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        send <icons.IoMdSend className="ml-3" />
                      </button>
                    </div>
                  </form>

                  <div className=" grid-cols-1 mt-[-40px] -mr-10 hidden xl:inline-block lg:inline-block">
                    <div className="absolute right-20 top-[190px] z-50 bg-purple text-white w-[47px] h-[47px] rounded-full flex items-center justify-center text-2xl">   <icons.BsInstagram /></div>
                    <div className="absolute right-[120px] top-[90px] z-50 bg-[pink] text-white w-[37px] h-[37px] rounded-full flex items-center justify-center text-lg">   <icons.BsFillTelephoneOutboundFill /></div>
                    <img src={images.c1} className="rounded-[40px]" />
                  </div>
                </div>
              </>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : (
        ""
      )}
    </>
  );
};

export default Model;
