 import React from "react";
import header_anim from "../../assets/header_anim.gif";
import { ReactTyped } from "react-typed";
import { delay, motion, useScroll } from "framer-motion";
import { Link } from "react-scroll";

// const textAnimation = {
//         hidden: { opacity: 0, x: -50 },
//         visible: custom => ({
//           opacity: 1,
//           x: 0,
//           // transition: {delay: custom * 0.2,type: "spring"}
//           transition: {delay: custom * 0.2, type: "spring", stiffness: 80,}
//         }),
//       }
//   const textAnimation = {
//     hidden: { opacity: 0, y: -50 },
//     visible: custom => ({
//       opacity: 1,
//       y: 0,
//       // transition: {delay: custom * 0.2,type: "spring"}
//       transition: {delay: custom * 0.2, type: "spring", stiffness: 80,}
//     }),
//   }

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    // transition: {delay: custom * 0.2,type: "spring"}
    transition: { delay: custom * 0.4, type: "spring", stiffness: 80 },
  }),
};

function hero() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="hero h-[100vh] lg:flex items-center"
    >
      <div className="container">
        <div className="lg:flex justify-between flex-wrap lg:h-[800px] lg:pt-0 pt-24">
          {/* <span style={{ color: 'transparent' }} className="bg-clip-text"> {"<"} Hello,  <ReactTyped strings={["IT Terminlari"]} typeSpeed={100} loop  cursorChar=" />"showCursor={true}/></span> */}
          <div className="hero__left lg:w-[50%] flex justify-center lg:items-start items-center flex-col lg:m-0 md:mt-[40px] mt-[30px]">
            <motion.h1
              variants={textAnimation}
              custom={1}
              className="md:text-[80px] text-[45px] font-bold whitespace-nowrap lg:text-left text-center"
            >
              <ReactTyped
                strings={["IT Terminlari "]}
                typeSpeed={150}
                cursorChar="#"
                showCursor={true}
              />
            </motion.h1>

            <motion.p
              variants={textAnimation}
              custom={2}
              className="tracking-tighter md:leading-10 md:text-[35px] text-[18px] leading-5 font-semibold"
            >
              IT terminlarini oddiy va <br /> tushunarli o’rganing!
            </motion.p>
            <motion.button
              variants={textAnimation}
              custom={2}
              className=" lg:mt-[208px] mt-[80px]"
            >
              <Link
                to="about"
                offset={10}
                smooth={true}
                spy={true}
                className="text-[#02c37e] hover:p-5  p-4 rounded-full bg-[#1a2529] md:text-[18px] font-semibold "
              >
                BATAFSIL
              </Link>
            </motion.button>
          </div>
          <motion.div
            variants={textAnimation}
            custom={3}
            className=" lg:m-0 mt-[50px] hero__right lg:w-[50%] flex items-center justify-center"
          >
            <img src={header_anim} className="" alt="" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default hero;
