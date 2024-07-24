import React from 'react';
import Card from './Card';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const facilities = [{
    name: 'Transport',
    link: '#',
    description: 'The transportation of students is quick and convenient due to a fleet of comfortable and deluxe buses on a contract basis.',
    imageUrl: '/bus.jpg'
  },
  {
    name: 'Campus',
    link: '#',
    description: 'The campus has been modeled to facilitate the finest educational services and enhance all-round development of children.',
    imageUrl: '/public/campus.jpeg'
  },
  {
    name: 'library',
    link: '#',
    description: 'Our Library is well endowed with a large collection of books in all the functional areas & well-equipped Senior library and a Junior Library',
    imageUrl: '/public/campus.jpeg'
  },
  {
    name: 'Labs',
    link: '#',
    description: 'Well-planned, spacious and adequately equipped science lab with latest instruments, gadgets, equipment, charts and models to experiment.',
    imageUrl: '/public/labs.jpeg'
  },]

const Facilities = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-3xl font-bold text-center mb-8'>Facilities</h2>
	  <div className=' w-full'> 
	  <Swiper
        // spaceBetween={1}
        // slidesPerView={3}
		breakpoints={{
			320: {
			  slidesPerView: 1,
			},
			768: {
			  slidesPerView: 2,
			},
			1024: {
			  slidesPerView: 3,
			},
		  }}
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 5000, // 2 seconds
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions
          stopOnLastSlide:false,
        }}
        modules={[Autoplay]}
		className='  md:w-full'
      >
		

        {facilities.map((facility, index) => (
          <SwiperSlide className='  flex flex-wrap ' key={index}>
            <Card 
			swiper={true}
              name={facility.name}
              imageUrl={facility.imageUrl}
              description={facility.description}
              link={facility.link}
            />
          </SwiperSlide>
        ))}
	
      </Swiper>
	  </div>
   
    </div>
  );
}

export default Facilities;
