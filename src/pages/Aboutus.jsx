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
const AboutUsLinks = [
  { name: "Mission & Vision", link: "/about/mission-vision" },
  { name: "History", link: "/about/history" },
  { name: "Principal’s Message", link: "/about/principle-message" },
];

const Aboutus = () => {
  const [name, setname] = useState("");
  const param = useLocation();
  // console.log(param.pathname);

  useEffect(() => {
    let res = AboutUsLinks.filter((item) => item.link === param.pathname);
    // console.log("yes this is :", res);
    setname(res[0].name);
  }, [param]);

  return (
    <div className=" bg-white">
      <div className=" shadow-lg  border-2  opacity-90 w-full h-[250px] overflow-hidden relative ">
        <img
          src="/Aboutuspage.png"
          alt="about"
          className=" h-full w-full object-cover absolute top-0 z-0"
        />
      </div>
      <div className=" p-2  md:left-[100px] md:-mt-[100px] z-20 md:absolute  md:text-white ">
        <span className="text-4xl">
          {" "}
          {name === AboutUsLinks[0].name
            ? `${AboutUsLinks[0].name}`
            : name === AboutUsLinks[1].name
            ? `${AboutUsLinks[1].name}`
            : `${AboutUsLinks[2].name}`}
        </span>
        <p className=" mt-4">{`Home / About / ${name}`}</p>
      </div>
      <div className=" mt-1">
        {name === AboutUsLinks[0].name ? (
          <Missionandvission />
        ) : name === AboutUsLinks[1].name ? (
          <History />
        ) : name === AboutUsLinks[2].name ? (
          <PrincipleMessage />
        ) : (
          `${AboutUsLinks[2].name}`
        )}
      </div>
    </div>
  );
};

export default Aboutus;
