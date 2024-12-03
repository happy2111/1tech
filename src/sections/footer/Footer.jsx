import React from "react";
import footer_anim from "../../assets/footer_anim.gif";
import { motion } from "framer-motion";

function Footer() {
  const cardAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      // transition: {delay: custom * 0.2,type: "spring"}
      transition: { delay: custom * 0.4, type: "spring", stiffness: 80 },
    }),
  };
  return (
    <div id="footer" className="h-[110vh] flex items-center lg:p-0 pb-[50px] ">
      <div className="container">
        <div className="flex lg:justify-between items-center lg:flex-row flex-col">
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="lg:w-[50%]"
          >
            <motion.img
              variants={cardAnimation}
              custom={1}
              src={footer_anim}
              className="md:h-[614.4px] "
              alt="animation"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="lg:w-[50%] flex flex-col justify-center lg:pl-[120px]"
          >
            <motion.h1
              variants={cardAnimation}
              custom={2}
              className="text-white  font-bold text-[45px]"
            >
              Contact Us
            </motion.h1>
            <motion.div className="px-3">
              <motion.div variants={cardAnimation} custom={3}>
                <h3 className="text-[#1dcd8d]  font-semibold mt-[33px]">
                  PHONE
                </h3>
                <a
                  href="tel:+998 71 200 00 77"
                  className=" font-semibold text-white"
                >
                  +998 71 200 00 77
                </a>
              </motion.div>
              <motion.div variants={cardAnimation} custom={4}>
                <h3 className="mt-[73px] text-[#1dcd8d]  font-semibold">
                  EMAIL
                </h3>
                <a href="" className=" font-semibold text-white">
                  1.tech.uz@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
