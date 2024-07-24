import React from "react";
import { Link } from "react-router-dom";

const AboutUsLinks = [
  { name: "Mission & Vision", link: "/about/mission-vision" },
  { name: "History", link: "/about/history" },
  { name: "Principal’s Message", link: "/about/principle-message" },
];

const Infrastructure = [
  { name: "Campus", link: "/infrastructure/campus" },
  { name: "Lab", link: "/infrastructure/lab" },
  { name: "Library", link: "/infrastructure/library" },
  {
    name: "Transport",
    link: "/infrastructure/transport",
  },
];

const NavBar = () => {
  // const [isOpen, setIsOpen] = React.useState(false);
  // const toggleDrawer = () => {
  //   console.log("ds");
  //   setIsOpen((prevState) => !prevState);
  // };
  // if (isOpen) {
  //   return (
  //     <Drawer
  //       open={true}
  //       onClose={toggleDrawer}
  //       direction="right"
  //       className="bla bla bla"
  //     >
  //       <div>Hello World</div>
  //     </Drawer>
  //   );
  // }
  return (
    <nav className=" hidden md:block max-w-full mx-auto overflow-hidden  text-white">
      <div className="container absolute z-10 mx-auto flex justify-between items-center h-[90px] px-4">
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              src="/public/logo.png" // Update this with the actual path to your logo image
              alt="Logo"
              className="w-12 h-12 mr-4"
            />
          </Link>
          <div className="text-2xl font-bold">SPRINGDALE PUBLIC SCHOOL</div>
        </div>
        <ul className="flex  gap-5 mx-auto space-x-4">
          {/* about us */}
          <li className="group relative">
            <Link
              to="/about/history"
              className="hover:text-gray-300"
            >
              About Us
            </Link>
            <div className="w-[170px] absolute left-0 z-20 top-full hidden group-hover:block bg-white text-black p-2 shadow-lg">
              <ul>
                {AboutUsLinks.map((item, ind) => (
                  <li
                    className="py-2"
                    key={ind}
                  >
                    <Link
                      to={item.link}
                      className="hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* infrastructure */}
          <li className="group relative">
            <Link
              to="/infrastructure/campus"
              className="hover:text-gray-300"
            >
              Infrastructure
            </Link>
            <div className="w-[170px] absolute left-0 z-20 top-full hidden group-hover:block bg-white text-black p-2 shadow-lg">
              <ul>
                {Infrastructure.map((item, ind) => (
                  <li
                    className="py-2"
                    key={ind}
                  >
                    <Link
                      to={item.link}
                      className="hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* academics */}
          <li>
            <Link
              to={"/acadamics"}
              className="hover:text-gray-300"
            >
              Academics
            </Link>
          </li>
          {/* Addmision */}
          <li>
            <Link
              to="/admission"
              className="hover:text-gray-300"
            >
              Admission
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="hover:text-gray-300"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="hover:text-gray-300 bg-yellow-500 text-black py-2 px-4 rounded"
            >
              Apply Now
            </Link>
          </li>
          <li>
            <Link
              // onClick={() => toggleDrawer()}
              to="#"
              className="hover:text-gray-300 bg-green-500 text-black py-2 px-4 rounded"
            >
              click me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="bla bla bla"
    >
      <div>Hello World</div>
    </Drawer>
  );
};

export default NavBar;
