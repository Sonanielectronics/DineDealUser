import React, { useState ,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { CiWallet } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import single from "../assets/images/Frame11.png";
import taken from "../assets/images/Frame.png";
import { FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const RelationStatus = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {

    if (selectedOption == null) {
      alert("Please Fill All Fields");
    } else {

      if (selectedOption == "taken") {
        localStorage.setItem("ApiRelationStatus", 2)
        navigate(`/anniversary/${id}`)
      } else {
        localStorage.setItem("ApiRelationStatus", 1)
        navigate(`/agegroup/${id}`);
      }

    }

  };

  useEffect(() => {

    document.body.style.backgroundImage = "linear-gradient(to top, #35BCCB, #19155F)";

}, []);

  return (
    <div className="flex flex-col justify-center items-center w-[20%] m-auto">
      <div className="mt-10 bg-gradient-to-b from-[#35BCCB] to-[#19155F]">
        <div className="flex flex-row justify-between">
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
        <div className="flex flex-col justify-center items-center p-5 text-white mt-20">
          <div className="text-lg font-bold  flex text-center">What is your Relationship Status?</div>
          <div className="flex m-5">
            <img
              src={single}
              className={`h-28 w-30 cursor-pointer ${selectedOption === "single" ? 'bg-cyan-400 bg-opacity-30 rounded-lg' : 'bg-transparent'}`}
              onClick={() => handleOptionClick("single")}
              alt="Single"
            />
            <img
              src={taken}
              className={`h-28 w-30 mx-5 cursor-pointer ${selectedOption === "taken" ? 'bg-cyan-400 bg-opacity-30 rounded-lg' : 'bg-transparent'}`}
              onClick={() => handleOptionClick("taken")}
              alt="Taken"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[100px] mb-[50px]">
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

export default RelationStatus;
