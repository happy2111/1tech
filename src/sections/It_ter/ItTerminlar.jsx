import React from 'react'
import icon from '../../assets/icon.png'

function ItTerminlar() {
    let dataes = [
        { id: '1' , image: `${icon}` ,title: 'UTM', text: 'VPN (Virtual Private Network) — bu internet orqali xavfsiz va shifrlangan aloqa o‘rnatish imkonini beradigan texnologiya. ', href: '' },
        { id: '2' , image: `${icon}` ,title: 'UTM', text: 'VPN (Virtual Private Network) — bu internet orqali xavfsiz va shifrlangan aloqa o‘rnatish imkonini beradigan texnologiya. ', href: '' },
        { id: '2' , image: `${icon}` ,title: 'UTM', text: 'VPN (Virtual Private Network) — bu internet orqali xavfsiz va shifrlangan aloqa o‘rnatish imkonini beradigan texnologiya. ', href: '' },
      ]
  return (
    <div className='flex items-center lg:h-[800px] '>
        <div className="container">
            <div className='lg:pt-[0px] pt-[76px] lg:block flex items-center flex-col'>
                <h1 className='lg:text-left text-center font-bold text-[45px] text-[#1dcd8d]'>IT terminlar</h1>
                <p className='text-white lg:text-left text-center text-[20px] lg:w-[792.2px] md:w-[500px] w-[300px] '>IT terminlarni o‘rganish axborot texnologiyalari sohasida ishlashni osonlashtiradi, chunki ular orqali professional terminologiyani tushunish va undan samarali foydalanish mumkin bo‘ladi.</p>
            </div>  
            <div className='flex flex-wrap lg:justify-between justify-evenly lg:mt-[126px] mt-[70px]'>
                {dataes.map((item,index) => (
                    <div key={index} className='mb-[40px] w-[367.1px] h-[320.2px] rounded-[40px] p-[30px] overflow-hidden  bg-[#737678]'>
                        <img className='h-[73.6px] ' src={item.image} alt="icon" />
                        <h1 className='text-[25px] font-bold text-[#1dcd8d] mt-[11px]'>
                            {item.title}
                        </h1>
                        <p className='text-[14px] text-white'>
                            {item.text}
                        </p>
                        <div className="">
                            <button className=' text-[#02c37e] bg-[#1a2529] font-semibold text-[14px] mt-[30px] p-2 rounded-full'><a href="">READ MORE</a></button>

                        </div>
                  </div>
                ))}
            </div>
        </div>        
    </div>
  )
}

export default ItTerminlar