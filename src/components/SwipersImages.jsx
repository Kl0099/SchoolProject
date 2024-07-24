// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2000, // 2 seconds
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions
      }}
      modules={[Autoplay]}
      className="top-0 absolute z-0"
    >
      <SwiperSlide>
        <div className=" w-screen h-screen">
          <img
            src="/public/images.jpg"
            alt="images"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-screen h-screen">
          <img
            src="/public/sportsday.webp"
            alt="images"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-screen h-screen">
          <img
            src="/public/images.jpg"
            alt="images"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
