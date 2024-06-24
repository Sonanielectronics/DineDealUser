import React, { useState , useEffect} from "react";
import { useParams } from 'react-router-dom';
import { CiWallet } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import jan from "../assets/images/January.png";
import feb from "../assets/images/Febuary.png";
import mar from "../assets/images/March.png";
import apr from "../assets/images/april.png";
import may from "../assets/images/may.png";
import jun from "../assets/images/june.png";
import jul from "../assets/images/july.png";
import aug from "../assets/images/august.png";
import sep from "../assets/images/september.png";
import oct from "../assets/images/octomber.png";
import nov from "../assets/images/november.png";
import dec from "../assets/images/december.png";
import { useLocation , useNavigate } from "react-router-dom";

const Birthday = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [monthColors, setMonthColors] = useState({
    January: false,
    February: false,
    March: false,
    April: false,
    May: false,
    June: false,
    July: false,
    August: false,
    September: false,
    October: false,
    November: false,
    December: false
  });

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleMonthSelection = (month) => {
    const updatedMonthColors = Object.keys(monthColors).reduce(
      (acc, key) => ({
        ...acc,
        [key]: key === month ? true : false
      }),
      {}
    );
    setSelectedMonth(month);
    setMonthColors(updatedMonthColors);
  };
  
  const handleSubmit = () => {
   
    if(selectedMonth == "January"){
      localStorage.setItem("ApiBirthMonth",1)
    }else if(selectedMonth == "February"){
      localStorage.setItem("ApiBirthMonth",2)
    }else if(selectedMonth == "March"){
      localStorage.setItem("ApiBirthMonth",3)
    }else if(selectedMonth == "April"){
      localStorage.setItem("ApiBirthMonth",4)
    }else if(selectedMonth == "May"){
      localStorage.setItem("ApiBirthMonth",5)
    }else if(selectedMonth == "June"){
      localStorage.setItem("ApiBirthMonth",6)
    }else if(selectedMonth == "July"){
      localStorage.setItem("ApiBirthMonth",7)
    }else if(selectedMonth == "August"){
      localStorage.setItem("ApiBirthMonth",8)
    }else if(selectedMonth == "September"){
      localStorage.setItem("ApiBirthMonth",9)
    }else if(selectedMonth == "October"){
      localStorage.setItem("ApiBirthMonth",10)
    }else if(selectedMonth == "November"){
      localStorage.setItem("ApiBirthMonth",11)
    }else{
      localStorage.setItem("ApiBirthMonth",12)
    }

    localStorage.setItem("ApiBirthDate",selectedDate)
   
    if(selectedDate && selectedMonth){
      navigate(`/gender/${id}`);
    }else{
      alert("Please Fill All Fields");
    }

  }

  const containerStyle1 = {
    overflowY: "scroll" /* Enable scrolling */,
    msOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,
  };
  const containerStyle2 = {
    overflowY: "scroll" /* Enable scrolling */,
    msOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,
    marginTop: "0px" /* Margin top value */
  };
  const webkitScrollbarStyle = {
    display: "none",
  };

  useEffect(() => {

    document.body.style.backgroundImage = "linear-gradient(to top, #35BCCB, #19155F)";

}, []);

  return (
    <div className="flex flex-col justify-center items-center w-[20%] m-auto">
      <div className="mt-10 bg-gradient-to-b from-[#35BCCB] to-[#19155F] px-3">
        <div className="flex flex-row justify-between">
          <div className="mt-5 bg-blue-300 rounded-2xl h-8 w-8 text-white mx-3 font-extrabold flex justify-center items-center">
            <IoIosArrowBack />
          </div>
          <div className="bg-blue-300 flex flex-row ml-24 justify-between px-1 text-white w-28 rounded-lg m-2 float-right py-2">
            <div className="font-bold">
              <CiWallet className="text-2xl " />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <FaRupeeSign className="mt-1 font-bold" />
                <span className="font-bold">500</span>
              </div>
              <span className="text-xs">Wallet Balance</span>
            </div>
          </div>
        </div>
        <div className="text-white w-60 ml-5 ">
          <div className="text-lg font-bold text-center px-5">
            When is your Birthday?
          </div>
          <div className="flex flex-row px-3 overflow-x-scroll" style={containerStyle1}>
          <style>
                  {`
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
    `}
                </style>
            {[...Array(31).keys()].map((date) => (
              <p
                key={date + 1}
                className={`mx-3 my-5 cursor-pointer ${
                  selectedDate === date + 1 && "bg-blue-300 px-2 rounded-lg"
                }`}
                onClick={() => handleDateSelection(date + 1)}
              >
                {date + 1}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-3 mt-8 w-80 h-80 overflow-scroll  overflow-x-hidden" style={containerStyle2 }>
        <style>
                  {`
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
    `}
                </style>
          {[
            { month: "January", image: jan },
            { month: "February", image: feb },
            { month: "March", image: mar },
            { month: "April", image: apr },
            { month: "May", image: may },
            { month: "June", image: jun },
            { month: "July", image: jul },
            { month: "August", image: aug },
            { month: "September", image: sep },
            { month: "October", image: oct },
            { month: "November", image: nov },
            { month: "December", image: dec }
          ].map(({ month, image }) => (
            <div
              key={month}
              className={` h-20 w-20 rounded-xl cursor-pointer ${
        monthColors[month] ? "bg-[rgba(255,255,255,0.4)]" : "bg-[rgba(255,255,255,0.1)]"
              } cursor-pointer`}
              onClick={() => handleMonthSelection(month)}
            >
              <img src={image} className="h-11 w-11" alt={month} />
              <p className="text-white text-xs text-center mt-1">{month}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-[60px] mb-[40px]">
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

export default Birthday;
