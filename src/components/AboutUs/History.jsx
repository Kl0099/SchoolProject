import React from "react";

const History = () => {
  return (
    <div className="p-8 rounded-lg mx-4 md:mx-16">
      <div className="text-left">
        <div className="text-xl font-bold text-gray-900">
          Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students.
        </div>
        <p className=" mt-4">
          Springdale Public School is a modern and progressive institution;
          right from its inception in 1990 it’s a vision translated into reality
          with a mission to create leaders, winners and achievers in a global
          world. It embodies the very philosophy of our reverend founder.
          Bhatnagar to shape up and mould students in such a manner that they
          are dedicated to the cause of the overall progress of the society,
          blending traditions with progressive change.
        </p>
        <div className="mt-8">
          <div className="text-green-700 font-semibold border-b-2 border-green-700 inline-block mb-4">
            OUR BIRTH - 1985
          </div>
          <ul className="list-disc ml-6">
            <li>
              The Springdale education project was registered on 13 March 1985
              with the purpose of setting up a school.
            </li>
            <li>
              Nursery School started in Feb 2000 with the blessing of our
              founders.
            </li>
            <li>First wing of building constructed.</li>
            <li>1985 March. 17 - Blessing ceremony of the building.</li>
          </ul>

          <div className="text-green-700 font-semibold border-b-2 border-green-700 inline-block mt-8 mb-4">
            IN 2004-05
          </div>
          <ul className="list-disc ml-6">
            <li>2004 - Upgraded to a Higher Secondary school.</li>
            <li>Additional Floors built.</li>
            <li>
              2004 Oct. 26 - Recognition of the School by the Directorate of
              Education.
            </li>
            <li>Subsequent affiliation of the middle School to C.B.S.E.</li>
            <li>2005 March - First Batch Class X . 100% result.</li>
            <li>Upgradation to Senior Secondary level by CBSE.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
