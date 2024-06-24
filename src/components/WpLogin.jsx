import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WpLogin = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [wpNumber, setWpNumber] = useState("");
  const [otp, setOtp] = useState(new Array(5).fill(""));

  const handleChange = (el, index) => {
    if (isNaN(el.value)) return false;
    setOtp([...otp.map((data, i) => (i === index ? el.value : data))]);
    if (el.nextSibling) {
      el.nextSibling.focus();
    }
  };

  const handleOTP = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/customer/sendRegistrationOTP`,
        {
          whatsappNumber: wpNumber,
        }
      );

      toast(`${response.data.data.code} OTP Send Successfully`);
    } catch (error) {
      console.log(error);
      alert("Please first enter your contact number");
    }
  };

  const resendOTP = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/customer/sendRegistrationOTP`,
        {
          whatsappNumber: wpNumber,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${BASE_URL}/api/customer/verifyRegistrationOTP`, {
        whatsappNumber: wpNumber,
        code: otp.join(""),
      });

      const requestData = {
        whatsappNumber: wpNumber,
        restaurantID: "66386f69c4871a2a547d30d5",
      };
      fetch(`${BASE_URL}/api/customer/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((responseData) => {
          localStorage.setItem("ApiWhatsappNumber", wpNumber);

          if (responseData.code == 200) {
            localStorage.setItem("Token", responseData.data.token);
          }

          if (responseData.code == 200) {
            if (responseData.data.updateCount == 1) {
              localStorage.setItem(
                "ApiBirthday",
                responseData.data.dateOfBirth
              );
              localStorage.setItem("ApiGender", responseData.data.gender);
              localStorage.setItem(
                "ApiEmailId",
                responseData.data.googleSignInToken
              );
              localStorage.setItem("ApiName", responseData.data.name);
              localStorage.setItem(
                "ApiResidentialArea",
                responseData.data.area.address
              );
              localStorage.setItem(
                "Latitude",
                responseData.data.area.latLng.lat
              );
              localStorage.setItem(
                "Longitude",
                responseData.data.area.latLng.lng
              );

              navigate(`/relationstatus/${id}`);
            } else if (responseData.data.updateCount == 2) {
              localStorage.setItem(
                "ApiBirthday",
                responseData.data.dateOfBirth
              );
              localStorage.setItem("ApiGender", responseData.data.gender);
              localStorage.setItem(
                "ApiEmailId",
                responseData.data.googleSignInToken
              );
              localStorage.setItem("ApiName", responseData.data.name);
              localStorage.setItem(
                "ApiResidentialArea",
                responseData.data.area.address
              );
              localStorage.setItem(
                "Latitude",
                responseData.data.area.latLng.lat
              );
              localStorage.setItem(
                "Longitude",
                responseData.data.area.latLng.lng
              );
              localStorage.setItem(
                "ApiRelationStatus",
                responseData.data.relationShipStatus
              );
              localStorage.setItem(
                "ApiAnniversary",
                responseData.data.anniversary
              );
              localStorage.setItem("ApiAgeGroup", responseData.data.ageGroup);

              navigate(`/competitor/${id}`);
            } else {
              localStorage.setItem(
                "ApiBirthday",
                responseData.data.dateOfBirth
              );
              localStorage.setItem("ApiGender", responseData.data.gender);
              localStorage.setItem(
                "ApiEmailId",
                responseData.data.googleSignInToken
              );
              localStorage.setItem("ApiName", responseData.data.name);
              localStorage.setItem(
                "ApiResidentialArea",
                responseData.data.area.address
              );
              localStorage.setItem(
                "Latitude",
                responseData.data.area.latLng.lat
              );
              localStorage.setItem(
                "Longitude",
                responseData.data.area.latLng.lng
              );
              localStorage.setItem(
                "ApiRelationStatus",
                responseData.data.relationShipStatus
              );
              localStorage.setItem(
                "ApiAnniversary",
                responseData.data.anniversary
              );
              localStorage.setItem("ApiAgeGroup", responseData.data.ageGroup);
              localStorage.setItem(
                "ApiHaveFoodDeliveryApp",
                responseData.data.haveFoodDeliveryApp
              );
              localStorage.setItem("Profession", responseData.data.profession);

              navigate(`/review/${id}`);
            }
          } else {
            navigate(`/signin/${id}`);
          }
        })
        .catch((error) => {
          console.error("API call error:", error);
        });
    } catch (error) {
      console.log("Error: ", error);
      alert(
        "Please verify your contact number",
        "An unexpected error occurred."
      );
    }
  };

  useEffect(() => {

    const currentUrl = window.location.href; // Full URL
    const pathname = window.location.pathname; // Path name
    const searchParams = window.location.search; // Query string
    const hash = window.location.hash; // Hash

    console.log(currentUrl,"currentUrl");
    console.log(pathname,"pathname");
    console.log(searchParams,"searchParams");
    console.log(hash,"hash");

    document.body.style.backgroundImage =
      "linear-gradient(to top, #35BCCB, #19155F)";
      
  }, []);

  return (
    <>
      <style>
        {`
          /* Chrome, Safari, Edge, Opera */
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
          }

          /* Firefox */
          input[type="number"] {
              -moz-appearance: textfield;
          }
        `}
      </style>
      <div className="flex justify-center items-center w-[15%] m-auto">
        <div className="mt-10 bg-gradient-to-b from-[#35BCCB] to-[#19155F] ">
          {/* WhatsApp Number Input */}
          <div className=" mt-3 p-7 text-white flex text-center">
            Complete the steps to get restaurant discounts Like Amazon vouchers
            and many more!!
          </div>
          <div className="flex flex-col items-start ml-8 mb-4 ">
            <div className="text-white mb-2">WhatsApp Number</div>
            <div className="flex flex-row pr-5">
              <input
                type="text"
                className="bg-blue-300 w-12 h-10 mr-4 rounded-lg text-white placeholder-white  p-2"
                placeholder="+91"
                disabled={true}
              />
              <input
                type="number"
                value={wpNumber}
                className="bg-blue-300 w-52 h-10 mr-4 rounded-lg text-white placeholder-white  p-3"
                placeholder="Enter your No."
                onChange={(e) => {
                  setWpNumber(e.target.value); // Update WhatsApp number state
                }}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <ToastContainer />
            <button
              className="bg-sky-500 m-3 px-7 py-2 rounded-lg text-white"
              onClick={handleOTP}
            >
              Send OTP
            </button>
          </div>

          {/* OTP Input */}
          <div className="flex flex-col ml-8 items-start ">
            <div className="text-white mb-2">OTP</div>
            <div className="w-[80%]  flex flex-row justify-between gap-4">
              {otp.map((data, i) => {
                return (
                  <input
                    type="text"
                    name="otp"
                    className=" bg-blue-300 text-white font-bold w-10 h-10 text-lg rounded-lg text-center"
                    maxLength={1}
                    key={i}
                    value={data}
                    onChange={(e) => handleChange(e.target, i)} // Update OTP state
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>
          </div>

          {/* Resend OTP Link */}
          <div className="flex justify-end mr-10 text-xs text-white mt-2">
            Didn't receive a OTP?{" "}
            {/* <span className="underline font-bold text-cyan-300 gap-1">
              {" "}
              Resend OTP
            </span> */}
            <button
              className="underline font-bold text-cyan-300 gap-1"
              onClick={resendOTP}
            >
              Resend OTP
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center mt-[120px] mb-[30px]">
            <button
              className="h-20 w-20 bg-red-600 rounded-full  bg-gradient-to-r from-blue-300 to-blue-500"
              onClick={handleSubmit}
            >
              <FaArrowRight className="text-white text-3xl ml-6 font-bold flex justify-center items-center" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WpLogin;
