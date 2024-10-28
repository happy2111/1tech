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
        <Link to="../" className='flex items-center'>
          <FiArrowLeft  className='mr-[5px]'/>
          Back
        </Link>
            {/* top */}
            <div className='flex justify-between items-center'>
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
