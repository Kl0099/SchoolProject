import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";
import PrincipleMessage from "../components/AboutUs/PrincipleMessage";
import History from "../components/AboutUs/History";
import Missionandvission from "../components/AboutUs/MissionAndVission";
import InfrastructureSection from "../components/InfrastructureSection";
const InfrastructureArray = [
  {
    name: "Campus",
    link: "/infrastructure/campus",
    description:
      "Campus with over two acres of lush green,pollution free environment,outdoor & indoor games,un-interrupted power supply and centally air-conditioned for pre-primary classes with excellent interior.Each day is a new challenge. At the end of the day every small victory is one to savour, and every defeat a huge lesson. The biggest learning at Spring Dale School, has been how to manage time efficiently. The rigorous schedule here teaches how to handle multiple tasks at the same time. Apart from academics there are co-curricular activities, clubs and societies and sports and games which make one feel that there’s never a dull moment.",
    imgUrl: "/campus.jpeg",
  },
  {
    name: "Lab",
    link: "/infrastructure/lab",
    description:
      "Separate labs for physics,chemistry,biology and mathematics. The labs have the most modern equipments and as per prescribe norms & standards.Labs are spacious enough for the students to work comfortably.",
    imgUrl: "/labs.jpeg",
  },
  {
    name: "Library",
    link: "/infrastructure/library",
    description:
      "Our Library is well endowed with a large collection of books in all the functional areas & well-equipped Senior library and a Junior Library. These includes a range of encyclopedias reference books classics and present day fiction. These are extremely useful in helping students with reference projects, deemed mandatory by the CICSE. A plethora of Indian and international books and periodicals are available to help students keep abreast of current affairs.",
    imgUrl: "/library.jpeg",
  },
  {
    name: "Transport",
    link: "/infrastructure/transport",
    description:
      "The School has its own fleet of deluxe air-conditioned buses. All the buses are running on CNG mode and are equipped with the latest communication facilities like mobile phones – in case of any delays or unforeseen events, a message gets flashed to the school, which in turn informs the parents, and initiates action for backup transportation measures, if required. Each bus has a driver, conductor and a security guard, for complete safety and security of the children. The routes and timings of the entire fleet of buses are monitored by a well trained staff.",
    imgUrl: "/bus.jpg",
  },
];

const Infrastructure = () => {
  const [name, setname] = useState("");
  const param = useLocation();
  // console.log(param.pathname);

  useEffect(() => {
    let res = InfrastructureArray.filter(
      (item) => item.link === param.pathname
    );
    // console.log("yes this is :", res);
    setname(res[0].name);
  }, [param]);

  return (
    <div className=" bg-gray-400">
      <div className=" shadow-lg opacity-90 w-full h-[250px] overflow-hidden relative ">
        <img
          src="/Aboutuspage.png"
          alt="about"
          className=" h-full w-full object-cover absolute top-0 z-0"
        />
      </div>
      <div className=" p-2  md:left-[100px] md:-mt-[100px] z-20 md:absolute  text-white ">
        <span className="text-4xl">
          {" "}
          {name === InfrastructureArray[0].name
            ? `${InfrastructureArray[0].name}`
            : name === InfrastructureArray[1].name
            ? `${InfrastructureArray[1].name}`
            : name === InfrastructureArray[2].name
            ? `${InfrastructureArray[2].name}`
            : `${InfrastructureArray[3].name}`}
        </span>
        <p className=" mt-4">{`Home / Infrastructure / ${name}`}</p>
      </div>
      <div className=" mt-1">
        {name === InfrastructureArray[0].name ? (
          <InfrastructureSection
            campus={true}
            title={InfrastructureArray[0].name}
            description={InfrastructureArray[0].description}
            imgUrl={InfrastructureArray[0].imgUrl}
          />
        ) : name === InfrastructureArray[1].name ? (
          <InfrastructureSection
            title={InfrastructureArray[1].name}
            description={InfrastructureArray[1].description}
            imgUrl={InfrastructureArray[1].imgUrl}
          />
        ) : name === InfrastructureArray[2].name ? (
          <InfrastructureSection
            title={InfrastructureArray[2].name}
            description={InfrastructureArray[2].description}
            imgUrl={InfrastructureArray[2].imgUrl}
          />
        ) : (
          <InfrastructureSection
            title={InfrastructureArray[3].name}
            description={InfrastructureArray[3].description}
            imgUrl={InfrastructureArray[3].imgUrl}
          />
        )}
      </div>
    </div>
  );
};

export default Infrastructure;
