import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import { delay, motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-regular-svg-icons";
function ItTerminlar() {
  const add_text = "Eng ko’p qidirilganlar < >";
  const [data2, setData2] = useState([]);

  let limit = 3;
  const url = `https://onetec.pythonanywhere.com/articles/top-searched/?limit=${limit}`;

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Ошибка при загрузке данных");
        const data = await response.json();
        setData2(data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };
    fetchAsync();
  }, []);

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
              className="relative mb-[40px] w-[367px] h-[390px] rounded-[40px] p-[30px] overflow-hidden  bg-[#737678] "
            >
              <div className="flex justify-between items-start">
                <img className="h-[73.6px] ml-[-20px]" src={icon} alt="icon" />
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faEye} size="lg" style={{color: "#63E6BE",}} />
                  <p className="text-white ml-2">
                    {item.search_count}
                  </p>
                </div>
              </div>

              <h1 className="text-[25px] font-bold text-[#1dcd8d] mt-[11px]">
                {item.title}
              </h1>
              {/* <p className='text-[14px] text-white'>
                            {item.description_uz}
                        </p> */}
              <TruncatedText text={item.description_uz} maxLength={100} />


              <div className="absolute bottom-6 left-[50%] translate-x-[-50%]">
                  <Link
                    to={`/card/${item.id}`}
                    className="w-[250px] flex justify-center items-center h-[50px] bg-[#1a2529] active:opacity-15 hover:bg-[#02c37e] hover:text-[#1a2529] text-[#02c37e] rounded-full font-semibold text-[14px] m-0 p-0"
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
