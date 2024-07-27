import React from 'react';
import { useNavigate } from 'react-router-dom';

const Body = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chapter');
  };

  return (
    <div className='flex flex-col gap-4 mt-28 justify-center items-center px-4 md:px-0'>
      <h1 className='shadow-xl text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-200'>
        "जीवन का एक ही सार होता है 'श्रीम‌द्भागवत गीता',"
      </h1>
      <h1 className='shadow-xl text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-200'>
        "यही सार यदि जीवन का आधार बन जाए तो जीवन सफल बन जाता है।"
      </h1>
      <button onClick={handleClick} className='w-[120px] sm:w-[140px] h-[40px] sm:h-[50px] mt-10 bg-white rounded-2xl text-lg sm:text-xl'>
        Read Now
      </button>
    </div>
  );
}

export default Body;
