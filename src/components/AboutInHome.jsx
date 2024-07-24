import React from "react";
import { Link } from "react-router-dom";

const AboutInHome = () => {
  return (
    <div className="bg-gray-50 md:p-8 shadow-lg rounded-lg mx-4 md:mx-16">
      <div className="text-left">
        <div className="text-3xl p-2 md:text-4xl font-bold text-gray-900">
          About Us
        </div>
        <div className="h-1 bg-gray-200 w-1/4 mx-auto mt-2"></div>
      </div>
      <div className="flex flex-col md:flex-row mt-8">
        <div className="md:w-1/2 p-4">
          <img
            src="/about_home.jpeg"
            alt="Springdale Public School Building"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 p-4 flex flex-col ">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Springdale Public School is a modern and progressive institution;
              right from its inception in 1990 it’s a vision translated into
              reality with a mission to create leaders, winners and achievers in
              a global world. It embodies the very philosophy of our reverend
              founder. Bhatnagar to shape up and mould students in such a manner
              that they are dedicated to the cause of the overall progress of
              the society, blending traditions with progressive change.
            </p>
            <Link
              to="/about/history"
              className="inline-block mt-4 bg-yellow-500 text-black py-2 px-4 rounded shadow-md hover:bg-yellow-600"
            >
              Read more →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-green-600 text-2xl mr-2"></i>
              <span className="text-gray-700">Security</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-lightbulb text-green-600 text-2xl mr-2"></i>
              <span className="text-gray-700">Skill Boosters</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-book text-green-600 text-2xl mr-2"></i>
              <span className="text-gray-700">Library</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-flask text-green-600 text-2xl mr-2"></i>
              <span className="text-gray-700">Labs</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-desktop text-green-600 text-2xl mr-2"></i>
              <span className="text-gray-700">Computer Lab</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-university text-green-600 text-2xl mr-2"></i>
              <span className="text-gray-700">Campus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInHome;
