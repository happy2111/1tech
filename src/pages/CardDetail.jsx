import { useParams } from "react-router-dom";
import detail_anim from "../assets/detail_anim.gif";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
function CardDetail() {
  const [data2, setData] = useState([]);
  const url = `https://onetec.pythonanywhere.com/articles/`;

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error loading data");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchAsync();
  }, []);

  const { id } = useParams();
  const card = data2.find((item) => item.id === parseInt(id));
  console.log(card);

  if (!card)
    return (
      <div className="card-d-loader h-lvh lg:w-full relative">
        <div class="boxes">
          <div class="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  // ****fetching

  // ****text

  const TruncatedText = ({ text, maxLength }) => {
    const truncated =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return <p className="text-[14px] text-black curlor-pointer">{truncated}</p>;
  };
  const cardAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.4, type: "spring", stiffness: 80 },
    }),
  };
  const cardAnimation2 = {
    hidden: { opacity: 0, x: 50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.4, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <div className="md:h-[120vh] bg-[#ccf3e5] pt-[28px] ">
      <ScrollToTop />
      <div className="container ">
        <Link to="../" className="detail__back-btn">
          <button className="lg:m-0 ml-[30px] mb-[30px] ">
            <svg
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 1024 1024"
              className=""
            >
              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
            </svg>
            <span>Back</span>
          </button>
        </Link>
        {/* top */}
        <div className="flex justify-between items-center lg:flex-row flex-col lg:p-0 px-[30px]">
          {/* left  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="lg:w-[802.1px] lg:min-h-[398.9px] bg-white rounded-[40px] p-[39px] overflow-y-auto"
          >
            <img src="" className="h-[41.8px]" alt="" />
            <motion.h1
              variants={cardAnimation}
              custom={1}
              className="font-semibold text-[28px]"
            >
              {card.title}
            </motion.h1>
            <motion.p variants={cardAnimation} custom={2}>
              {card.description_uz}
            </motion.p>
          </motion.div>
          {/* left  */}
          {/* right  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="mb-[50px]"
          >
            <motion.img
              custom={2}
              variants={cardAnimation2}
              src={detail_anim}
              className="max-h-[400px]"
              alt=""
            />
          </motion.div>
          {/* right  */}
        </div>

        {/* bottom */}
        <div className="lg:p-0 px-7">
          <Swiper
            breakpoints={{
              0: { slidesPerView: 1 }, // Ширина экрана 0px и выше
              480: { slidesPerView: 2 }, // Ширина экрана 620px и выше
              850: { slidesPerView: 3 }, // Ширина экрана 620px и выше
            }}
            autoHeight={false}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            {data2.map((item, index, card) => (
              <SwiperSlide
                key={item.id}
                className="cursor-grab active:cursor-grabbing relative select-none mb-[40px] w-[340px] h-[370.2px] rounded-[40px] p-[30px] overflow-hidden  bg-[#737678] "
              >
                <div className="" style={{ userSelect: "none" }}>
                  <div>
                    <h1 className="text-[25px] font-bold text-[#1dcd8d] mt-[11px]">
                      {item.title}
                    </h1>

                    <TruncatedText text={item.description_uz} maxLength={100} />
                  </div>
                    <Link
                      to={`../card/${item.id}`}
                      className="absolute left-[50%] translate-x-[-50%] bottom-9 w-[250px] flex justify-center items-center h-[50px] bg-[#1a2529] active:opacity-15 hover:bg-[#02c37e] hover:text-[#1a2529] text-[#02c37e]  rounded-full font-semibold text-[14px] "
                    >
                      BATAFSIL
                    </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* bottom */}
      </div>
    </div>
  );
}

export default CardDetail;
