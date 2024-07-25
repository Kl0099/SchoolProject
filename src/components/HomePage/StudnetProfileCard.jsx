import React from "react";
import Card from "./Card";

const profiles = [
  {
    name: "John Smith",
    description:
      "John Smith's dedication and passion for mathematics have earned him the prestigious title of National Level Math Olympiad Winner. Competing against the brightest minds from across the country, John demonstrated exceptional problem-solving skills, logical reasoning, and analytical thinking. His achievement is a testament to his hard work, perseverance, and the quality education provided by our school.",
    imageUrl: "/randomstudent2.jpg",
    link: "#",
  },
  {
    name: "Sarah Lee",
    description:
      "Sarah Lee's remarkable talent and unwavering commitment to swimming have led her to win the Gold Medal at the State Swimming Championship. Her rigorous training regimen, combined with her determination and focus, has propelled her to the top of the competition. Sarah's achievement highlights her exceptional athletic abilities and the strong support system provided by our school's sports program.",
    imageUrl: "/randomstudent3.jpg",
    link: "#",
  },
  {
    name: "Tech Innovators Club",
    description:
      "The Tech Innovators Club has once again showcased their ingenuity and teamwork by winning the Inter-School Robotics Competition. This group of talented students collaborated to design and build a highly advanced robot that outperformed those from other schools. Their victory reflects not only their technical skills but also their creativity, collaboration, and problem-solving abilities.This group of talented students collaborated to design and build ",
    imageUrl: "/studentImage.jpg",
    link: "#",
  },
];

const StudentProfileCard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Student Achievements
      </h2>
      <div className="flex flex-wrap md:justify-center -mx-4">
        {profiles.map((profile, index) => (
          <Card
            name={profile.name}
            key={index}
            description={profile.description}
            link={profile.link}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentProfileCard;
