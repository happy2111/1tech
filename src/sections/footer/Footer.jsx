import React from 'react'
import footer_anim from "../../assets/footer_anim.gif"

function Footer() {
  return (
    <div id='footer'  className='h-[110vh] flex items-center lg:p-0 pb-[50px] '>
        <div className="container">
            <div className='flex lg:justify-between items-center lg:flex-row flex-col' >
                <div className='lg:w-[50%]'>
                    <img src={footer_anim} className='md:h-[614.4px] ' alt="animation" />
                </div>
                <div className='lg:w-[50%] flex flex-col justify-center lg:pl-[120px]'>
                    <h1 className='text-white  font-bold text-[45px]'>Contact Us</h1>
                    <div className='px-3'>
                        <h3 className='text-[#1dcd8d]  font-semibold mt-[33px]'>PHONE</h3>
                        <a href="tel:+998 71 200 00 77" className=' font-semibold text-white' >+998 71 200 00 77</a>
                        <h3 className='mt-[73px] text-[#1dcd8d]  font-semibold'>EMAIL</h3>
                        <a href="" className=' font-semibold text-white'>1.tech.uz@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer