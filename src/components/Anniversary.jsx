import React, { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import { CiWallet } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Anniversary = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  const handleSubmit = () => {

    if (selectedDate == "" || selectedMonth == "" ) {
      alert("Please Fill All Fields");
    } else {

      if (selectedMonth == "January") {
        localStorage.setItem("ApiMonth", 1);
      } else if (selectedMonth == "February") {
        localStorage.setItem("ApiMonth", 2);
      } else if (selectedMonth == "March") {
        localStorage.setItem("ApiMonth", 3);
      } else if (selectedMonth == "April") {
        localStorage.setItem("ApiMonth", 4);
      } else if (selectedMonth == "May") {
        localStorage.setItem("ApiMonth", 5);
      } else if (selectedMonth == "June") {
        localStorage.setItem("ApiMonth", 6);
      } else if (selectedMonth == "July") {
        localStorage.setItem("ApiMonth", 7);
      } else if (selectedMonth == "August") {
        localStorage.setItem("ApiMonth", 8);
      } else if (selectedMonth == "September") {
        localStorage.setItem("ApiMonth", 9);
      } else if (selectedMonth == "October") {
        localStorage.setItem("ApiMonth", 10);
      } else if (selectedMonth == "November") {
        localStorage.setItem("ApiMonth", 11);
      } else {
        localStorage.setItem("ApiMonth", 12);
      }

      localStorage.setItem("ApiDate", selectedDate);

      navigate(`/agegroup/${id}`);
    }

  };

  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const containerStyle = {
    height: "200px",
    overflowY: "scroll" /* Enable scrolling */,
    msOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,
  };
  const webkitScrollbarStyle = {
    display: "none",
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
        <div className="flex flex-col justify-center items-center  text-white mt-16">
          <div className="text-lg font-bold  flex text-center px-12">
            What is your Anniversary
          </div>
          <div className="flex m-5">
            <div className="flex flex-col mx-5  text-center">
              <p className="m-2 mb-5 font-bold">Date</p>
              <div
                className="overflow-y-auto max-h-[130px]"
                style={containerStyle}
              >
                <style>
                  {`
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
    `}
                </style>
                {dates.map((date) => (
                  <p
                    style={{
                      // border: selectedDate === date ? "10px solid red" : "none",
                      borderRadius: "20px",
                      backgroundColor: selectedDate === date ? "#0ea5e9 " : "",
                    }}
                    key={date}
                    className="mb-3"
                    onClick={() => handleDateClick(date)}
                  >
                    {date}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col mx-5   text-center">
              <p className="m-2 mb-5 font-bold">Month</p>
              <div className="overflow-y-auto max-h-[130px]" style={containerStyle}>
                <style>
                  {`
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
    `}
                </style>
                {months.map((month) => (
                  <p
                    style={{
                      // border: selectedMonth === month ? "10px solid red" : "",
                      borderRadius: "20px",
                      backgroundColor: selectedMonth === month ? "#0ea5e9 " : "",
                    }}
                    key={month}
                    className="mb-3"
                    onClick={() => handleMonthClick(month)}
                  >
                    {month}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[80px] mb-[40px]">
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

export default Anniversary;
