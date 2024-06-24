import React, { useState ,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { CiWallet } from "react-icons/ci";
import { FaRupeeSign, FaYenSign } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import buisness from "../assets/images/buisness1.png";
import job from "../assets/images/job.png";
import student from "../assets/images/student.png";
import other from "../assets/images/other.png";
import { useLocation, useNavigate } from "react-router-dom";

import { BASE_URL } from "../main";

const Profession = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  const [selectedProfession, setSelectedProfession] = useState(null);

  const handleSelectedProfession = (selectedProfession) => {
    setSelectedProfession(selectedProfession);
  };

  const handleSubmit = () => {

    if (selectedProfession == null) {
      alert("Please Fill All Fields");
    } else {
      localStorage.setItem("Profession",selectedProfession);
      navigate(`/review/${id}`);
    }

  };

  useEffect(() => {

    document.body.style.backgroundImage = "linear-gradient(to bottom, #251A6D, #F79CBC)";

}, []);

  return (
    <div className="flex flex-col justify-center items-center w-[20%] m-auto">
      <div className="mt-10 bg-gradient-to-t from-[#251A6D] to-[#F79CBC]">
        <div className="flex flex-row justify-between ">
          <div className="mt-5 bg-pink-300 rounded-2xl h-8 w-8 text-white mx-3 font-extrabold flex justify-center items-center">
            <IoIosArrowBack />
          </div>
          <div className="bg-pink-300 flex flex-row  ml-24 justify-between px-1 text-white w-28 rounded-lg m-5 float-right py-2">
            <div className="font-bold">
              <CiWallet className="text-2xl " />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row ">
                <FaRupeeSign className="mt-1 font-bold" />
                <span className="font-bold">500</span>
              </div>
              <span className="text-xs">Wallet Balance</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5 text-white mt-8">
          <div className="text-base font-bold  flex  px-8 mb-3">
            Select your profession
          </div>
          <div className="flex mx-5 my-3">
            <img
              src={buisness}
              className={`h-28 w-44 ${
                selectedProfession === "business"
                  ? "bg-fuchsia-300 bg-opacity-30 rounded-lg"
                  : "bg-transparent"
              }`}
              onClick={() => handleSelectedProfession("business")}
            />
            <img
              src={job}
              className={`h-28 w-30 mx-5 ${
                selectedProfession === "job"
                  ? "bg-fuchsia-300 bg-opacity-30 rounded-lg"
                  : "bg-transparent"
              }`}
              onClick={() => handleSelectedProfession("job")}
            />
          </div>
          <div className="flex mx-5 my-3">
            <img
              src={student}
              className={`h-28 w-44 ${
                selectedProfession === "student"
                  ? "bg-fuchsia-300 bg-opacity-30 rounded-lg"
                  : "bg-transparent"
              }`}
              onClick={() => handleSelectedProfession("student")}
            />
            <img
              src={other}
              className={`h-28 w-30 mx-5 ${
                selectedProfession === "other"
                  ? "bg-fuchsia-300 bg-opacity-30 rounded-lg"
                  : "bg-transparent"
              }`}
              onClick={() => handleSelectedProfession("other")}
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[40px] mb-[25px]">
          <button
            className="h-20 w-20 bg-red-600 rounded-full  bg-gradient-to-r from-fuchsia-300 to-fuchsia-500"
            onClick={handleSubmit}
          >
            <FaArrowRight className="text-white text-3xl ml-6 font-bold flex justify-center items-center" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profession;
