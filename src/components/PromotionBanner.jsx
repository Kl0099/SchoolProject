import React from "react";
import { Link } from "react-router-dom";

const PromotionBanner = ({ text, text1, text2, isAbsolute = false }) => {
  return (
    <div
      className={`overflow-hidden ${
        isAbsolute === true ? "absolute top-[80px]" : ""
      } w-full bg-gray-200  text-black`}
    >
      <div className="animate-marquee whitespace-nowrap">
        <span className="inline-block text-2xl p-2 mr-16">{text}</span>
        <span className="inline-block text-2xl p-2 mr-16">{text1}</span>
        <span className="inline-block text-2xl p-2 mr-16">{text2}</span>
        {/* <span className="inline-block mr-10">
          Welcome to Springdale Public School, where we nurture young minds for
          a brighter future
        </span> */}
      </div>
    </div>
  );
};

export default PromotionBanner;
