import React from "react";
import CampusSection from "./CampusSection";

const InfrastructureSection = ({
  title,
  description,
  imgUrl,
  campus = false,
}) => {
  return (
    <>
      <div className="bg-gray-200 md:p-8 p-4 my-4 rounded-lg mx-4 md:mx-16">
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
          <div className="md:w-1/3 mt-2  flex flex-col">
            <p>{description}</p>
          </div>
        </div>
      </div>
      {/* {campus === true && (
        <>
          <CampusSection
            title="State-of-the-art Science and Computer Labs"
            description="Our science and computer labs are equipped with the latest technology and instruments to provide students with hands-on learning experiences."
            imgUrl={imgUrl}
          />
          <CampusSection
            title="Spacious and Well-equipped Classrooms"
            description="Our classrooms are designed to provide a conducive learning environment, equipped with modern amenities and ample space for students."
            imgUrl={imgUrl}
          />
          <CampusSection
            title="Library with a Vast Collection of Books and Digital Resources"
            description="The library offers a wide range of books and digital resources to support the academic needs and interests of students."
            imgUrl={imgUrl}
          />
          <CampusSection
            title="Sports Facilities Including a Playground, Gymnasium, and Swimming Pool"
            description="Our sports facilities include a playground, gymnasium, and swimming pool, providing students with ample opportunities for physical activities and sports."
            imgUrl={imgUrl}
          />
        </>
      )} */}
    </>
  );
};

export default InfrastructureSection;
