import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import { delay, motion } from "framer-motion";
import { ReactTyped } from "react-typed";

function ItTerminlar() {
  const add_text = "Eng ko’p qidirilganlar < >";
  const [data2, setData2] = useState([]);

  let limit = 3
  const url = `https://onetec.pythonanywhere.com/articles/top-searched/?limit=${limit}`

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Ошибка при загрузке данных");
        const data = await response.json();
        setData2(data)
      }catch (error) {
        console.error("Ошибка:", error);
      }
    };
    fetchAsync();
  }, [])




  // useEffect(() => {
  //   fetch("https://onetec.pythonanywhere.com/articles/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.results);
  //     });
  //   fetch("https://onetec.pythonanywhere.com/articles/top-searched/?limit=3")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData2(data)
  //     })
  // }, []);

  


  const TruncatedText = ({ text, maxLength }) => {
    const truncated =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    return <p className="text-[14px] text-white">{truncated}</p>;
  };

  const textAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      // transition: {delay: custom * 0.2,type: "spring"}
      transition: { delay: custom * 0.2, type: "spring", stiffness: 80 },
    }),
  };
  const cardAnimation = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <div className="flex items-center lg:h-[100vh]">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="lg:pt-[100px] pt-[76px] lg:block flex items-center flex-col"
        >
          <motion.h1
            variants={textAnimation}
            custom={1}
            transition={{ type: "spring", stiffness: 80 }}
            className="lg:text-left text-center font-bold text-[45px] text-[#1dcd8d]"
          >
            IT terminlar
          </motion.h1>
          <motion.p
            variants={textAnimation}
            custom={2}
            className="text-white lg:text-left text-center text-[20px] lg:w-[792.2px] md:w-[500px] w-[300px] "
          >
            IT terminlarni o‘rganish axborot texnologiyalari sohasida ishlashni
            osonlashtiradi, chunki ular orqali professional terminologiyani
            tushunish va undan samarali foydalanish mumkin bo‘ladi.
          </motion.p>
          <motion.h1
            variants={textAnimation}
            custom={3}
            className="lg:text-left text-center font-bold md:text-[35px] text-[27px] mt-[60px] text-[#1dcd8d]"
          >
            <ReactTyped
              strings={["Eng ko’p qidirilganlar "]}
              typeSpeed={80}
              cursorChar=" <>"
              showCursor={true}
            />
          </motion.h1>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap lg:justify-between justify-evenly lg:mt-[30px] mt-[50px] md:p-0 px-[30px] lg:mb-[50px] "
        >
          {data2.slice(0, 3).map((item, index, card) => (
            <motion.div
              variants={cardAnimation}
              custom={1}
              key={item.id} 
              className="hover:h-[330px] mb-[40px] w-[367px] h-[320.2px] rounded-[40px] p-[30px] overflow-hidden  bg-[#737678] "
            >
              <img className="h-[73.6px] ml-[-20px]" src={icon} alt="icon" />
              <h1 className="text-[25px] font-bold text-[#1dcd8d] mt-[11px]">
                {item.title}
              </h1>
              {/* <p className='text-[14px] text-white'>
                            {item.description_uz}
                        </p> */}
              <TruncatedText text={item.description_uz} maxLength={100} />
              <div className="mt-6">
                <Link
                  to={`/card/${item.id}`}
                  className=" text-[#02c37e] bg-[#1a2529]  hover:p-3 font-semibold text-[14px] mt-[30px] p-2 rounded-full"
                >
                  BATAFSIL
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ItTerminlar;
