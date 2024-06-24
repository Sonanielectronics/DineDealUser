import React, { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CiWallet } from "react-icons/ci";
import { FaRupeeSign, FaYenSign } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import do1 from "../assets/images/yes1.png";
import dont from "../assets/images/no.png";
import { FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Competitor = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  const [appInstalled, setAppInstalled] = useState(null);

  const handleSubmit = () => {

    if (appInstalled == null) {
      alert("Please Fill All Fields");
    } else {
      localStorage.setItem("ApiHaveFoodDeliveryApp", appInstalled)
      navigate(`/profession/${id}`)
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
        <div className="flex flex-col justify-center items-center p-5 text-white mt-11">
          <div className="text-lg font-bold  flex text-center px-10 mb-3">Do you have a food delivery app in your phone?</div>
          <div className="flex m-5">
            <img
              src={do1}
              className={`h-28 w-44 ${appInstalled === true ? 'bg-fuchsia-300 bg-opacity-30 rounded-lg' : 'bg-transparent'}`}
              alt="Yes"
              onClick={() => setAppInstalled(true)}
            />
            <img
              src={dont}
              className={`h-28 w-30 mx-5 ${appInstalled === false ? 'bg-fuchsia-300 bg-opacity-30 rounded-lg' : 'bg-transparent'}`}
              alt="No"
              onClick={() => setAppInstalled(false)}
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[70px] mb-[40px]">
          <button
            className="h-20 w-20 bg-red-600 rounded-full bg-gradient-to-r from-fuchsia-300 to-fuchsia-500"
            onClick={handleSubmit}
          >
            <FaArrowRight className="text-white text-3xl ml-6 font-bold flex justify-center items-center" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Competitor;
