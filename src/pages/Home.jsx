import React from "react";
import NavBar from "../components/NavBar";
import SwipersImages from "../components/SwipersImages";
import AboutInHome from "../components/AboutInHome";
import StudentLife from "../components/HomePage/StudentLife";
import StudentProfileCard from "../components/HomePage/StudnetProfileCard";
import Facilities from "../components/HomePage/Facilities";
const Home = () => {
  return (
    <div className="relative w-full h-full mx-auto overflow-hidden">
      <div className="h-[80vh] overflow-hidden relative">
        {/* <SwipersImages /> */}
        <img
          src="/home.jpeg"
          alt="home"
          className="md:absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>
      <div className="z-20 md:mx-16 relative h-[25vh] mt-8">
        <div className="w-full md:w-[75%] h-full md:absolute ml-3 overflow-clip shadow-lg p-3  bg-gray-100 text-white  md:-top-[100px]">
          <span className="text-2xl mx-auto w-full text-left  md:top-[20px] font-medium md:absolute text-black">
            Welcome to Springdale Public School, where we nurture young minds
            for a brighter future.
          </span>
          <p className="mx-auto md:block hidden w-[90%] text-left ml-3 mr-3 md:bottom-[20px] md:absolute font-medium text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nisi
            culpa sit hic animi, perferendis mollitia pariatur porro deserunt
            tempora asperiores cum doloremque beatae amet rerum quo explicabo
            praesentium provident? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Labore nisi culpa sit hic animi, perferendis
            mollitia pariatur porro deserunt tempora asperiores cum doloremque
            beatae amet rerum quo explicabo praesentium provident?
          </p>
        </div>
      </div>
      <div className="mt-20">
        {/* About SPS section */}
        <AboutInHome />
      </div>
      <div className="mt-20">
        {/* About SPS section */}
        <StudentLife />
      </div>
      <div className="mt-20">
        {/* About SPS section */}
        <StudentProfileCard />
      </div>
      <div className="mt-20">
        {/* About SPS section */}
        <Facilities />
      </div>
    </div>
  );
};

export default Home;
