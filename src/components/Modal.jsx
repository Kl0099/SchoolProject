// import IconBtn from "./IconBtn";
import React from "react";
// import { FaCross } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const ConfirmationModal = ({ children, setModal, modal }) => {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto text-black bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="md:w-11/12  rounded-lg  border-richblack-400 p-2  md:p-6">
        <RxCross1
          size={25}
          className=" mb-2 cursor-pointer"
          onClick={() => setModal(null)}
        />
        {/* <p className="text-2xl font-semibold text-richblack-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
          exercitationem.
        </p>
        <p className="mt-3 mb-5 leading-6 text-richblack-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
          voluptates!
        </p>
        <div className="flex items-center gap-x-4">
          <button
            className="cursor-pointer rounded-md  py-[8px] px-[20px] font-semibold "
            // onClick={modalData?.btn2Handler}
          >
            {"button"}
          </button>
        </div> */}
        {children}
      </div>
    </div>
  );
};

export default ConfirmationModal;
