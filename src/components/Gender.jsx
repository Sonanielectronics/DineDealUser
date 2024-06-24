import React, { useState , useEffect} from "react";
import { useParams } from 'react-router-dom';
import { CiWallet } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import male from "../assets/images/Male.png"
import female from "../assets/images/Femalee.png"
import { FaArrowRight } from "react-icons/fa";
import { useLocation , useNavigate } from "react-router-dom";

const Gender = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSubmit = () => {
    
    if(selectedGender == "male"){
      localStorage.setItem("ApiGender",1)
    }else{
      localStorage.setItem("ApiGender",2)
    }

    if(selectedGender){
      navigate(`/review/${id}`);
    }else{
      alert("Please Fill All Fields");
    }
   
    
  };

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
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
        <div className="flex flex-col justify-center items-center p-5 text-white mt-20">
          <div className="text-lg font-bold  flex text-center mb-10">What is your Gender?</div>
          <div className="flex m-5">
            <img
              src={male}
              className={`h-28 w-30 cursor-pointer ${selectedGender === 'male' ? 'bg-fuchsia-300 bg-opacity-30 rounded-lg' : 'bg-transparent'}`}
              onClick={() => handleSelectGender('male')}
            />
            <img
              src={female}
              className={`h-28 w-30 mx-5 cursor-pointer ${selectedGender === 'female' ? 'bg-fuchsia-300 bg-opacity-30 rounded-lg' : 'bg-transparent'}`}
              onClick={() => handleSelectGender('female')}
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[90px] mb-[50px]">
          <button
            className="h-20 w-20 bg-red-600 rounded-full  bg-gradient-to-r from-fuchsia-300 to-fuchsia-500"
            onClick={handleSubmit}
          >
            <FaArrowRight className="text-white text-3xl ml-6 font-bold flex justify-center items-center" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gender;
