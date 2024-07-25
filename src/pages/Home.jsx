import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SwipersImages from "../components/SwipersImages";
import AboutInHome from "../components/AboutInHome";
import StudentLife from "../components/HomePage/StudentLife";
import StudentProfileCard from "../components/HomePage/StudnetProfileCard";
import Facilities from "../components/HomePage/Facilities";
import Facalty from "../components/Facalty";
import ConfirmationModal from "../components/Modal";
import { Link } from "react-router-dom";
import RegisterForm from "./Registration";
import PromotionBanner from "../components/PromotionBanner";
const Home = () => {
  const [modal, setModal] = useState(null);
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
      <div className=" lg:z-20 overflow-clip relative shadow-lg bg-white lg:bottom-[100px] min-h-[25vh] md:mx-16  mt-8">
        <div className="w-full  h-full lg:absolute text-left  lg:text-center  ml-3  p-3   text-white">
          <span className=" text-lg lg:text-2xl w-full mb-2  font-medium  text-black">
            Welcome to Springdale Public School, where we nurture young minds
            for a brighter future.
          </span>
          <p className=" text-sm md:text-lg w-[90%] text-left mt-4 font-medium text-black">
            Springdale Public School, established in 1990, is dedicated to
            fostering an environment of academic excellence and holistic
            development. Our mission is to cultivate leaders, achievers, and
            compassionate individuals who can thrive in a global society. We
            offer a comprehensive education that combines rigorous academics,
            cutting-edge technology, and a wide range of extracurricular
            activities.
          </p>
        </div>
      </div>
      <PromotionBanner
        text={"Welcome to Springdale Public School "}
        text1={"Admission Form Availability: March 1st"}
        text2={
          "Last Date for Submission: March 31st &&  Announcement of Results: April 30th"
        }
        isAbsolute={true}
      />

      <div className="mt-10">
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
        <Facalty />
      </div>
      <div className="mt-20">
        {/* About SPS section */}
        <Facilities />
      </div>
      {modal && (
        <ConfirmationModal
          setModal={setModal}
          modal={modal}
          children={<RegisterForm />}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default Home;
