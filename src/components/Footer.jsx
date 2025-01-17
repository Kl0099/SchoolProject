import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ConfirmationModal from "./Modal";
import ContactUs from "./Contactus";

const Footer = () => {
  const [modal, setModal] = useState(null);
  const contactInfo = [
    { icon: FaPhone, text: "+1 (123) 456-7890" },
    { icon: FaEnvelope, text: "info@springdale.edu" },
    { icon: FaGlobe, text: "spskidz.com" },
  ];

  const quickLinks = [
    { name: "Curriculum", url: "/infrastructure/campus" },
    { name: "Admission", url: "/admission" },
    { name: "About Us", url: "/about/history" },
    { name: "Academics", url: "/acadamics" },
  ];

  const exploreLinks = ["Campus", "Library", "Labs", "Gallery", "Contact Us"];

  const socialIcons = [
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaYoutube,
    FaWhatsapp,
  ];
  const openContacUsForm = () => {
    setModal("data");
  };

  return (
    <div className=" bg-gray-100 text-slate-700 mt-1 py-10 px-2">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-20 mb-4"
          />
          <h3 className="text-lg font-semibold">SPRINGDALE PUBLIC SCHOOL</h3>
          <p className="  w-full text-center md:w-[60%] ">
            Springdale Public School, 123 Education Lane, Cityville, State, ZIP
            Code
          </p>
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-center mt-2"
            >
              <info.icon className="mr-2" />
              <span>{info.text}</span>
            </div>
          ))}
          <div className="flex mt-4 space-x-4">
            {socialIcons.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col mb-6">
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col mb-6">
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            {exploreLinks.map((link, index) => (
              <li
                onClick={
                  link === "Contact Us"
                    ? openContacUsForm
                    : (e) => e.preventDefault()
                }
                className={`${
                  link === "Contact Us" ? "cursor-pointer" : "cursor-pointer"
                }`}
                key={index}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <iframe
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9080488076463!2d-46.63420758548641!3d-23.55260338468598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c5ecb94fd7%3A0x0!2zMjPCsDMzJzA5LjkiUyA0NsKwMzgnMTEuNSJX!5e0!3m2!1sen!2sbr!4v1594551540984!5m2!1sen!2sbr"
            width="250"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
      {modal && (
        <ConfirmationModal
          setModal={setModal}
          modal={modal}
          children={<ContactUs />}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default Footer;
