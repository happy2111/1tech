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
import { motion } from 'framer-motion' 
function CardDetail() {
  // ****fetching
  const [data2, setData ] = useState([]);
  const url = `https://onetec.pythonanywhere.com/articles/`

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error loading data");
        const data = await response.json(); 
        setData(data)
        // console.log(data);
      }catch (error) {
        console.log("Error: ", error);
      }
    }

    fetchAsync();
  }, []);
  


  // useEffect(() => {
  //   fetch("https://onetec.pythonanywhere.com/articles/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.results);
  //     });
  // }, []);

  const { id } = useParams();
  const card = data2.find((item) => item.id === parseInt(id));
  console.log(card);
  
  if (!card)
    return (
      <div className="h-lvh">
        {" "}
        <section class="dots-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </section>
      </div>
    );
  // ****fetching

  // ****text

  const TruncatedText = ({ text, maxLength }) => {
    const truncated =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return <p className="text-[14px] text-black curlor-pointer">{truncated}</p>;
  };
  // ****text

  // ****swiper chenger
  // const [slidesPerView, setSlidesPerView] = useState(3);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setSlidesPerView(window.innerWidth <= 620 ? 1 : 3);
  //   };

  //   // Установить значение при загрузке компонента
  //   handleResize();

  //   // Обновлять значение при изменении ширины экрана
  //   window.addEventListener('resize', handleResize);

  //   // Удалить обработчик при размонтировании компонента
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  // ****swiper chenger


  const cardAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: custom => ({
      opacity: 1,
      x: 0,
      // transition: {delay: custom * 0.2,type: "spring"} 
      transition: {delay: custom * 0.4, type: "spring", stiffness: 80,}
    }),
  }
  const cardAnimation2 = {
    hidden: { opacity: 0, x: 50 },
    visible: custom => ({
      opacity: 1, 
      x: 0,
      // transition: {delay: custom * 0.2,type: "spring"} 
      transition: {delay: custom * 0.4, type: "spring", stiffness: 80,}
    }),
  }





  // const { default: axios } = require('axios'); 

  // Init a bigData array to push new data on each iteration
  // const bigData = [];
  
  // async function fetchAllPaginateData(
  //     pageKey = 0 /** init by default page index 0 */,
  // ) {
  //     try {
  //         const fetchURL = `https://onetec.pythonanywhere.com/articles/?page=${pageKey}`;
  //         const response = await axios.get(fetchURL);
  //         const { data } = response;
  //         const { totalPages } = data; // Your api should give you a total page count, result or something to setup your iteration
  
  //         bigData.push(data); // push on big data response data
  
  //         // if current page isn't the last, call the fetch feature again, with page + 1
  //         if (
  //             pageKey < totalPages &&
  //             pageKey < 10 // (this is a test dev condition to limit for 10 result) */
  //         ) {
  //             pageKey++;
  //             await new Promise((resolve) => setTimeout(resolve, 200)); // setup a sleep depend your api request/second requirement.
  //             console.debug(pageKey, '/', totalPages);
  //             return await fetchAllPaginateData(pageKey);
  //         }
  
  //         console.clear();
  //         return console.info('Data complete.');
  //     } catch (err) {
  //         console.error(err);
  //     }
  // };
  // fetchAllPaginateData();

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
          <motion.div initial="hidden" whileInView="visible" className="lg:w-[802.1px] lg:min-h-[398.9px] bg-white rounded-[40px] p-[39px] overflow-y-auto">
            <img src="" className="h-[41.8px]" alt="" />  
            <motion.h1 variants={cardAnimation} custom={1} className="font-semibold text-[28px]">{card.title}</motion.h1>
            <motion.p variants={cardAnimation} custom={2}>{card.description_uz}</motion.p>
          </motion.div>
          {/* left  */}
          {/* right  */}
          <motion.div initial="hidden" whileInView="visible" className="mb-[50px]">
            <motion.img custom={2} variants={cardAnimation2} src={detail_anim} className="max-h-[400px]"  alt="" />
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
            spaceBetween={30}
            pagination={{
              type: 'fraction',
              // clickable: true,
              // dynamicMainBullets: 4
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            {data2.map((item, index, card) => (
              <SwiperSlide
                key={item.id}
                className="select-none   mb-[40px] w-[340px] min-h-[300.2px] rounded-[40px] p-[30px] overflow-hidden  bg-[#737678] "
              >
                {/* <img className='h-[73.6px] '  src={item.icon} alt="icon" /> */}
                <div className="cursor-pointer">
                  <div>
                    <h1 className="text-[25px] font-bold text-[#1dcd8d] mt-[11px]">
                      {item.title}
                    </h1>

                    <TruncatedText text={item.description_uz} maxLength={100} />
                  </div>
                  <div className="md:mt-[20%] mt-[50px] w-[250px] inline-block h-[50px] py-2 bg-[#1a2529] active:opacity-15 hover:bg-[#02c37e] hover:text-[#1a2529] text-[#02c37e]  rounded-full">
                    <Link
                      to={`../card/${item.id}`}
                      className="  font-semibold text-[14px] mt-[30px] p-3 "
                    >
                      BATAFSIL
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* bottom */}
      </div>

      {/* <h1>{card.title}</h1>
      <p>{card.detail}</p> */}
    </div>
  );
}

export default CardDetail;
