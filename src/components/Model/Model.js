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
            className=" bg-modelbg  flex justify-between  p-[3rem]
            fixed top-0 left-0 w-[100%] h-[100%] z-40 "
            variants={backdrop}
            inital="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-[#eee] rounded-[20px]
              fixed left-0 right-0 w-[60%]
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
                  className=" text-h1 text-center font-bold  mb-4 font-title tracking-wider "
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
              <motion.form className="flex   flex-col">
                <div className="w-full ">
                  <form className=" rounded-[30px] px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                      <label
                        class="block bg-transparent text-lg text-purple font-semibold font-title tracking-wider  mb-2"
                        for="username"
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
                        className="block bg-transparent border-none border-b-[1px] border-[purple] text-lg text-purple font-semibold font-title tracking-wider  mb-2"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        className=" appearance-none  border-b-[1px] w-full  px-3 bg-transparent  border-[purple] leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block bg-transparent border-none border-b-[1px] border-[purple] text-lg text-purple font-semibold font-title tracking-wider  mb-2"
                        for="email"
                      >
                        Subject
                      </label>
                      <input
                        className=" appearance-none  border-b-[1px] w-full  px-3 bg-transparent  border-[purple] leading-tight focus:outline-none focus:shadow-outline"
                        id="text"
                        type="text"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block bg-transparent border-none border-b-[1px] border-[purple] text-lg text-purple font-semibold font-title tracking-wider  mb-2"
                        for="text"
                      >
                        Message
                      </label>
                      <textarea  rows={3} style={{resize:"none"}}
                        className=" appearance-none  border-b-[1px] w-full  px-3 bg-transparent  border-[purple] leading-tight focus:outline-none focus:shadow-outline"
                        id="text"
                      ></textarea>
                    </div>
                      <button
                        className="bg-purple flex justify-between py-2 capitalize items-center hover:bg-lightpurple transition-all duration-[0.6s] text-white font-bold  px-7 rounded-[20px] focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        send <icons.IoMdSend className="ml-3" />
                      </button>
                  </form>
                </div>
              </motion.form>
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
