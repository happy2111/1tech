import { useParams } from 'react-router-dom';
import { data } from '../json/data'
import detail_anim from '../assets/detail_anim.gif'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import ScrollToTop from '../ScrollToTop';


function CardDetail() {
  const { id } = useParams();
  const card = data.find((item) => item.id === parseInt(id));

  if (!card) return <div>Карточка не найдена</div>;

  return (
    <div className='bg-[#ccf3e5] pt-[28px]' >
        <ScrollToTop/>
        <div className="container">

        <Link to="../" className='detail__back-btn'>
        <button className='lg:m-0 ml-[30px] mb-[30px] '>
          <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className=''><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
          <span>Back</span>
        </button>
        </Link>
            {/* top */}
            <div className='flex justify-between items-center lg:flex-row flex-col lg:p-0 px-[30px]'>
                {/* left  */}
                    <div className='lg:w-[802.1px] lg:h-[398.9px] bg-white rounded-[40px] p-[39px] overflow-y-auto'>
                        <img src="" className='h-[41.8px]' alt="" />   
                        <h1 className='font-semibold text-[28px]'>{card.title}</h1>
                        <p>{card.detail}</p>
                    </div>
                {/* left  */}
                {/* right  */}
                  <div>
                    <img src={detail_anim} alt="" />
                  </div>
                {/* right  */}
            </div>
            
            {/* bottom */}
            <div>
            <div className='flex flex-wrap lg:justify-between justify-evenly '>
                {data.map((item, index, card) => (
                    <div key={item.id} className='mb-[40px] w-[367.1px] h-[320.2px] rounded-[40px] p-[30px] overflow-hidden  bg-[#737678] '>
                        <img className='h-[73.6px] '  src={item.icon} alt="icon" />
                        <h1 className='text-[25px] font-bold text-[#1dcd8d] mt-[11px]'>
                            {item.title}
                        </h1>
                        <p className='text-[14px] text-white'>
                            {item.text}
                        </p>
                        <div className="mt-6">
                            <Link to={`../card/${item.id}`} className=' text-[#02c37e] bg-[#1a2529] font-semibold text-[14px] mt-[30px] p-2 rounded-full'>READ MORE</Link>
                        </div>
                  </div>
                ))}
            </div>
            </div>
            {/* bottom */}
        </div>



      {/* <h1>{card.title}</h1>
      <p>{card.detail}</p> */}
    </div>
  );
}

export default CardDetail;
