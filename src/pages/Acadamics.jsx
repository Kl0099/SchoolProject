import React from "react";
import Acadamicss from "../components/Acadamics";

const Academics = ({ title, component }) => {
  return (
    <div className="bg-gray-400">
      <div className="shadow-lg opacity-90 w-full h-[250px] overflow-hidden relative">
        <img
          src="/Aboutuspage.png"
          alt="about"
          className="absolute top-0 z-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-2 md:left-[100px] md:-mt-[100px] z-20 absolute text-white">
        <span className="text-4xl">{title}</span>
      </div>
      {/* <Acadamicss /> */}
      {component}
    </div>
  );
};

export default Academics;
