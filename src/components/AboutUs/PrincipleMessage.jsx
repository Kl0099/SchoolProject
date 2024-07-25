import React from "react";

const PrincipleMessage = () => {
  return (
    <div className=" bg-gray-200 p-8 my-4  rounded-lg mx-4 md:mx-16">
      <div className="text-left">
        <div className="text-3xl md:text-4xl font-bold text-gray-900">
          Principles message
        </div>
        <div className="h-1 bg-gray-200 w-1/4 mx-auto mt-2"></div>
      </div>
      <div className="flex flex-col items-center justify-evenly md:flex-row mt-8">
        <div className="md:w-1/3 md:p-4 pb-3 ">
          <img
            src="/studentImage.jpg"
            alt="Springdale Public School Building"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3 md:pl-5  flex flex-col ">
          <div className=" text-sm mb-1">
            <p className="text-gray-700 leading-relaxed">
              Thus the role and responsibility of the school in the present day
              is to shape a child’s thought process and path to learning .
            </p>
            <p className="text-gray-700 leading-relaxed">
              {" "}
              From Plato to Neighbourhood pre school teacher, both have the same
              goal in their profession to enlighten those who seek knowledge.The
              reason why the years spent in a school is one of the first place
              where a child’s conduct is shaped and future is developed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Excellence neither can be achieved overnight nor a person alone
              can do it. It is a result of consistent effort of all involved in
              the process. I feel strongly that we, as a team, are working hard
              to achieve
            </p>
            <p className="text-gray-700 leading-relaxed">
              they don’t like to be spoon-fed. At SPS we are committed to attain
              an all round development of the student and emphasis academic
              excellence and conduct a host of extracurricular activities to
              cater the child’s social,constructive,artistic and other skills.
              milestones and will keep on working hard.
            </p>
            <p className=" text-xl ">Mrs. Shraddha kapoor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipleMessage;
