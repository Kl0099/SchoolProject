import React from "react";
import Card from "./HomePage/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const facalty = [
  {
    imageUrl: "/studentImage.jpg",
    link: "#",
    name: "John Doe",
    description:
      "Principal with an M.Ed and 20 years of experience in educational administration. John is dedicated to fostering a positive and effective learning environment.",
  },
  {
    imageUrl: "/randomsir1.jpg",
    link: "#",
    name: "Jane Smith",
    description:
      "Vice Principal with an M.Sc. in Physics and 15 years of teaching experience. Jane is passionate about advancing science education and supporting both students and teachers.",
  },
  {
    imageUrl: "/randomTeacher1.jpg",
    link: "#",
    name: "Emily Johnson",
    description:
      "English Teacher with an M.A. in English and 10 years of teaching experience. Emily focuses on enhancing students' literary skills and promoting a love for reading.",
  },
  {
    imageUrl: "/randomsir1.jpg",
    link: "#",
    name: "Michael Brown",
    description:
      "Mathematics Teacher with an M.Sc. in Mathematics and 8 years of teaching experience. Michael is committed to helping students develop strong problem-solving skills and a deep understanding of mathematics.",
  },
  {
    imageUrl: "/studentImage.jpg",
    link: "#",
    name: "Sophia Davis",
    description:
      "Science Teacher with an M.Sc. in Chemistry and 12 years of teaching experience. Sophia is dedicated to engaging students in scientific inquiry and exploration.",
  },
  {
    imageUrl: "/randomsir1.jpg",
    link: "#",
    name: "David Wilson",
    description:
      "Computer Science Teacher with a B.Tech in Computer Science and 5 years of teaching experience. David is enthusiastic about introducing students to the world of technology and coding.",
  },
];

const Facalty = () => {
  return (
    <div className="container mx-auto flex items-center flex-col px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Facalty</h2>
      <div className=" w-[100%] md:w-[80%]">
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
            stopOnLastSlide: false,
          }}
          modules={[Autoplay]}
          className="  md:w-full"
        >
          <div className=" flex justify-center">
            {" "}
            {facalty.map((facility, index) => (
              <SwiperSlide
                className="   flex flex-wrap "
                key={index}
              >
                <Card
                  swiper={true}
                  name={facility.name}
                  imageUrl={facility.imageUrl}
                  description={facility.description}
                  link={facility.link}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Facalty;
