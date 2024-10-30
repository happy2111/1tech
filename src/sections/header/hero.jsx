import React from 'react'
import header_anim from '../../assets/header_anim.gif'
import { ReactTyped } from "react-typed";
import { motion, useScroll} from 'framer-motion'



const cardVariantsRight = {
    offscreen: {
        y: -200,
        opacity: 0.1
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 3
        },
        opacity: 1
    }
  }
  const cardVariantsLeft = {
    offscreen: {
        y: -200,
        opacity: 0.2
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        },
        opacity: 1
    }
  }


function hero() {
  return (
    <div className="hero h-[100vh] lg:flex items-center">
        <div className="container">
            <div className='lg:flex justify-between flex-wrap lg:h-[800px] lg:pt-0 pt-24'>
                {/* <span style={{ color: 'transparent' }} className="bg-clip-text"> {"<"} Hello,  <ReactTyped strings={["IT Terminlari"]} typeSpeed={100} loop  cursorChar=" />"showCursor={true}/></span> */}
                <div className="hero__left lg:w-[50%] flex justify-center lg:items-start items-center flex-col lg:m-0 md:mt-[40px] mt-[30px]">
                    
                    <h1  className='md:text-[80px] text-[45px] font-bold whitespace-nowrap lg:text-left text-center'><ReactTyped strings={["IT Terminlari "]} typeSpeed={150}  loop cursorChar="#" showCursor={true}/></h1>

                    <p className='tracking-tighter md:leading-10 md:text-[35px] text-[18px] leading-5 font-semibold'>IT terminlarini oddiy va <br /> tushunarli o’rganing!</p>
                    <button className='lg:mt-[208px] mt-[80px]'><a href="/read-more" className='text-[#02c37e] p-4 rounded-full bg-[#1a2529] md:text-[18px] font-semibold '>BATAFSIL</a></button>
                </div>
                <motion.div  initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} className=" lg:m-0 mt-[50px] hero__right lg:w-[50%] flex items-center justify-center">
                    <img src={header_anim} className='' alt="" />
                </motion.div>
            </div>
        </div>
    </div>
)
}

export default hero