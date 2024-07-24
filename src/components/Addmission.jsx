import React from "react";

const Admission = () => {
  return (
    <div className="bg-gray-400">
      <div className="p-8 bg-white mt-16 rounded-lg mx-4 md:mx-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Admission Process
        </h2>
        <p className="text-gray-700 mb-4">
          We are excited to welcome new students to our school community. Our
          admissions process is straightforward and designed to ensure that we
          find the best fit for each student.
        </p>
        <p className="text-gray-700 mb-4">
          Admission forms are available for download from our website. Please
          submit the completed form along with the required documents to the
          school office during working hours.
        </p>
        <p className="text-gray-700 mb-4">
          If you have any questions or need assistance during the application
          process, our admissions team is here to help. Contact us at
          admissions@schoolname.com or call (123) 456-7890.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Admission Criteria
        </h2>
        <p className="text-gray-700 mb-4">
          Admission is based on merit and the availability of seats. For certain
          grades, entrance tests may be conducted to assess the suitability of
          applicants.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Merit-based selection process</li>
          <li>Entrance tests for certain grades</li>
          <li>Availability of seats in the desired grade</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Important Dates
        </h2>
        <p className="text-gray-700 mb-4">
          Please take note of the following important dates for the admission
          process:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Additional Information
        </h2>
        <p className="text-gray-700 mb-4">
          We encourage prospective students and parents to visit our campus to
          learn more about our programs and facilities. Campus tours are
          available by appointment. Please contact the school office to schedule
          a visit.
        </p>
        <p className="text-gray-700 mb-4">
          For more information about our school, including our mission, values,
          and academic programs, please explore our website or get in touch with
          our admissions team.
        </p>
      </div>
    </div>
  );
};

export default Admission;
