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
    y: "200px",
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
            fixed top-0 left-0 w-[100%] h-[100%] z-40  "
            variants={backdrop}
            inital="hidden"
            animate="visible"
            // exit="hidden"
            exit={{
              y:-100,opacity:0
            }}
          >
            <motion.div
              className="bg-[#eee] rounded-[20px] fixed left-0 right-0 w-[900px]
              top-0 m-auto
              z-10
              p-5 flex justify-center items-center"
              inital="hidden"
              animate="visible"
              variants={modal}
              // exit="hidden"
              exit={{
                y:-100,opacity:0
              }}
            >
              {/* <div className="bg-purple w-[100px] h-[100px] rounded-full absolute -left-10 top-0 z-0"></div> */}
              <motion.form
              >
                <div className="flex justify-around h-[50vh]">
                  <h1 className=" text-h1 text-center">ContactInfo</h1>
                  <motion.button
                    onClick={closeModel}
                    className=" border-none  absolute  top-5 right-5 outline-none text-purple shadow-main p-3 bg-[#eee] rounded-full text-2xl "
                  >
                    <icons.GiCrossMark />
                  </motion.button>
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
