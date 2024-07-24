import React from "react";

const Missionandvission = () => {
  return (
    <div className="bg-white p-8  border rounded-lg mx-4 md:mx-16 mt-8 shadow-lg">
      <div className="bg-gray-400 p-4 text-white text-lg font-bold text-center rounded-t-lg">
        Vision and Mission
      </div>
      <div className="p-8 text-left">
        <h2 className="text-lg font-semibold mb-8">
          Here Are Some Of The Lines For About Vision and Mission.
        </h2>
        <div className="flex flex-col text-left">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Vision</h3>
            <p className="text-gray-700  mx-auto">
              To be an Organization of Unmatched Excellence and to inspire
              learning to meet National and Global needs by developing Physical,
              Emotional, Social and Intellectual Well being of students with
              regard to Quality Education, Innovation, Skill and Research and
              also to uphold the Ideologies of Arya Samaj and Vedic Heritage.
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Mission</h3>
            <p className="text-gray-700  mx-auto">
              <strong>We, at SPS are committed –</strong>
              <br />
              <br />
              <ul className="list-disc list-inside text-left">
                <li>
                  To create a challenging learning environment that encourages
                  high expectations for success.
                </li>
                <li>
                  To inspire students to achieve the highest standards of
                  intellectual and personal development through a stimulating
                  and comprehensive curriculum.
                </li>
                <li>
                  To provide individualized education that addresses students’
                  unique learning styles, cultivates independent thought and
                  promotes the building of character, enabling them to
                  contribute to society in meaningful and positive ways.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missionandvission;
