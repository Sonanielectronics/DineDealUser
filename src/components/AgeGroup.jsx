import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { CiWallet } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const AgeGroup = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);

  const handleSubmit = () => {

      if(selectedAgeGroup == null){
        alert("Please Fill All Fields");
      }else {

        if (selectedAgeGroup == "20 or Below") {
          localStorage.setItem("ApiAgeGroup", 1)
        } else if (selectedAgeGroup == "21-30") {
          localStorage.setItem("ApiAgeGroup", 2)
        } else if (selectedAgeGroup == "31-40") {
          localStorage.setItem("ApiAgeGroup", 3)
        } else if (selectedAgeGroup == "41-50") {
          localStorage.setItem("ApiAgeGroup", 4)
        } else {
          localStorage.setItem("ApiAgeGroup", 5)
        }

        navigate(`/review/${id}`)
        
      }
  };

  const handleAgeGroupSelect = (ageGroup) => {
    setSelectedAgeGroup(ageGroup);
  };

  const ageGroupStyles = (ageGroup) => {
    return ageGroup === selectedAgeGroup
      ? "bg-blue-400 rounded-lg text-white"
      : "text-white";
  };

  useEffect(() => {

       document.body.style.backgroundImage = "linear-gradient(to top, #35BCCB, #19155F)";

  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-[20%] m-auto">
      <div className="mt-10 bg-gradient-to-b from-[#35BCCB] to-[#19155F]">
        <div className="flex flex-row justify-between ">
          <div className="mt-5 bg-blue-300 rounded-2xl h-8 w-8 text-white mx-3 font-extrabold flex justify-center items-center">
            <IoIosArrowBack />
          </div>
          <div className="bg-blue-300 flex flex-row  ml-24 justify-between px-1 text-white w-28 rounded-lg m-5 float-right py-2">
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
        <div className="flex flex-col justify-center items-center  text-white mt-14">
          <div className="text-lg font-bold  flex text-center px-10">
            Which age group you are in?
          </div>
          <div className="flex m-5">
            <div className="flex flex-col mx-5  text-center">
              <p
                className={`my-2 text-sm cursor-pointer ${ageGroupStyles('20 or Below')}`}
                onClick={() => handleAgeGroupSelect('20 or Below')}
              >
                20 or Below
              </p>
              <p
                className={`my-2 text-sm cursor-pointer ${ageGroupStyles('21-30')}`}
                onClick={() => handleAgeGroupSelect('21-30')}
              >
                21-30
              </p>
              <p
                className={`my-2 text-sm cursor-pointer ${ageGroupStyles('31-40')}`}
                onClick={() => handleAgeGroupSelect('31-40')}
              >
                31-40
              </p>
              <p
                className={`my-2 text-sm cursor-pointer ${ageGroupStyles('41-50')}`}
                onClick={() => handleAgeGroupSelect('41-50')}
              >
                41-50
              </p>
              <p
                className={`my-2 text-sm cursor-pointer ${ageGroupStyles('50 & Above')}`}
                onClick={() => handleAgeGroupSelect('50 & Above')}
              >
                50 & Above
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[70px] mb-[40px]">
          <button
            className="h-20 w-20 bg-red-600 rounded-full  bg-gradient-to-r from-blue-300 to-blue-500"
            onClick={handleSubmit}
          >
            <FaArrowRight className="text-white text-3xl ml-6 font-bold flex justify-center items-center" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeGroup;
