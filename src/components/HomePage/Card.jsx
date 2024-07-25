import React from "react";

const Card = ({ imageUrl, link, name, description, swiper }) => {
  const truncateDescription = (desc) => {
    const maxLength = 100;
    if (desc.length > maxLength) {
      return `${desc.substring(0, maxLength)}...`;
    }
    return desc;
  };
  return (
    <div
      className={`${
        swiper === true ? "min-w-full" : "w-full"
      } lg:w-1/3 sm:w-1/2 justify-center   px-4 mb-8`}
    >
      <div className="bg-white   rounded-lg overflow-hidden shadow-lg">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="md:p-6 p-2 flex flex-col items-start ">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-700 mb-4 text-justify">
            {" "}
            {truncateDescription(description)}
          </p>
          <a
            href={link}
            className="text-blue-600 font-semibold"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
