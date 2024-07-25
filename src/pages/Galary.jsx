import React from "react";

const images = [
  {
    src: "/chess.jpg",
    alt: "Image 1",
    description:
      "Congratulations for remarkable achievement in the chess championship.",
  },
  {
    src: "/about_home.jpeg",
    alt: "Image 2",
    description: "Mother's Day Celebration by Senior Wing 2024.",
  },
  {
    src: "/about_home.jpeg",
    alt: "Image 3",
    description:
      "Springdalians won consolation prize in 'Sit & Draw' competition held at Panorma Kurukshetra.",
  },
  {
    src: "/trophy.jpg",
    alt: "Image 4",
    description: "Celebrating labour's day in School 2024.",
  },
  {
    src: "/campus.jpeg",
    alt: "Image 5",
    description: "Earth day celebration 2024.",
  },
  {
    src: "/trophy.jpg",
    alt: "Image 6",
    description: "Baisakhi celebration 2024.",
  },
];

const Gallery = () => {
  return (
    <>
      <div className=" shadow-lg  border-2  opacity-90 w-full h-[250px] overflow-hidden relative ">
        <img
          src="/Aboutuspage.png"
          alt="about"
          className=" h-full w-full object-cover absolute top-0 z-0"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <div
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            key={index}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto"
            />
            <p className="p-4 text-center text-sm">{image.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
