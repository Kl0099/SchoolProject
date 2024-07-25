import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "./Modal";
import RegisterForm from "../pages/Registration";

const AboutUsLinks = [
  { name: "Mission & Vision", link: "/about/mission-vision" },
  { name: "History", link: "/about/history" },
  { name: "Principal’s Message", link: "/about/principle-message" },
];

const Infrastructure = [
  { name: "Campus", link: "/infrastructure/campus" },
  { name: "Lab", link: "/infrastructure/lab" },
  { name: "Library", link: "/infrastructure/library" },
  { name: "Transport", link: "/infrastructure/transport" },
];

const NavBar = () => {
  const [modal, setModal] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isInfrastructureOpen, setIsInfrastructureOpen] = useState(false);

  return (
    <nav className="  text-black">
      <div className="container mx-auto flex justify-between items-center h-[70px] px-4">
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              src="/logo.png" // Update this with the actual path to your logo image
              alt="Logo"
              className="w-12 h-12 mr-4"
            />
          </Link>
          <div className=" text-sm lg:text-2xl font-bold">
            SPRINGDALE PUBLIC SCHOOL
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 mx-auto space-x-4">
          {/* About Us */}
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
          {/* Infrastructure */}
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
          {/* Academics */}
          <li>
            <Link
              to={"/acadamics"}
              className="hover:text-gray-300"
            >
              Academics
            </Link>
          </li>
          {/* Admission */}
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
              to="/galary"
              className="hover:text-gray-300"
            >
              Gallery
            </Link>
          </li>
          <li>
            <button
              onClick={() => setModal("data")}
              className="hover:text-gray-300 bg-yellow-500 text-black py-2 px-4 rounded"
            >
              Apply Now
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-gray-50 text-black p-4 space-y-4">
          {/* About Us */}
          <li>
            <button
              className="flex items-center justify-between w-full hover:text-gray-300"
              onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
            >
              About Us
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isAboutUsOpen ? "M6 18L18 6M6 6l12 12" : "M6 9l6 6 6-6"}
                />
              </svg>
            </button>
            {isAboutUsOpen && (
              <ul className="mt-2 space-y-2 bg-white text-black p-2 shadow-lg rounded-lg">
                {AboutUsLinks.map((item, ind) => (
                  <li key={ind}>
                    <Link
                      to={item.link}
                      className="block hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Infrastructure */}
          <li>
            <button
              className="flex items-center justify-between w-full hover:text-gray-300"
              onClick={() => setIsInfrastructureOpen(!isInfrastructureOpen)}
            >
              Infrastructure
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isInfrastructureOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M6 9l6 6 6-6"
                  }
                />
              </svg>
            </button>
            {isInfrastructureOpen && (
              <ul className="mt-2 space-y-2 bg-white text-black p-2 shadow-lg rounded-lg">
                {Infrastructure.map((item, ind) => (
                  <li key={ind}>
                    <Link
                      to={item.link}
                      className="block hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Academics */}
          <li>
            <Link
              to={"/acadamics"}
              className="block hover:text-gray-300"
            >
              Academics
            </Link>
          </li>

          {/* Admission */}
          <li>
            <Link
              to="/admission"
              className="block hover:text-gray-300"
            >
              Admission
            </Link>
          </li>

          <li>
            <Link
              to="#"
              className="block hover:text-gray-300"
            >
              Gallery
            </Link>
          </li>

          <li>
            <button
              onClick={() => setModal("data")}
              className="block hover:text-gray-300 bg-yellow-500 text-black py-2 px-4 rounded"
            >
              Apply Now
            </button>
          </li>
        </ul>
      )}

      {modal && (
        <ConfirmationModal
          setModal={setModal}
          modal={modal}
        >
          <RegisterForm />
        </ConfirmationModal>
      )}
    </nav>
  );
};

export default NavBar;
