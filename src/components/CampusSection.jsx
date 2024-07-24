import React from "react";

const CampusSection = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-gray-200 p-8 my-4 rounded-lg mx-4 md:mx-16">
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </div>
        <div className="h-1 bg-gray-200 w-1/4 mx-auto mt-2"></div>
      </div>
      <div className="flex flex-col items-start justify-evenly md:flex-row mt-8">
        <div className="md:w-1/3">
          <img
            src={imgUrl}
            alt={title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/3 flex flex-col">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CampusSection;
