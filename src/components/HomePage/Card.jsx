import React from 'react';

const Card = ({ imageUrl, link, name, description , swiper}) => {
  return (
    <div className={`${swiper === true ? "min-w-full" : "w-full"} md:w-1/3 px-4 mb-8`}>
      <div className='bg-white  rounded-lg overflow-hidden shadow-lg'>
        <img 
          src={imageUrl} 
          alt={name} 
          className='w-full h-48 object-cover'
        />
        <div className='p-6'>
          <h3 className='text-xl font-bold mb-2'>{name}</h3>
          <p className='text-gray-700 mb-4'>{description}</p>
          <a href={link} className='text-blue-600 font-semibold'>
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
