import React, { useState,useEffect } from "react";
import { CiWallet } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import single from "../assets/images/Frame1.png";
import taken from "../assets/images/Frame.png";
import { FaArrowRight } from "react-icons/fa"

import axios from 'axios';

const Payment = () => {

  const [Amount, SetAmount] = useState(null);
  const [ReferralCode, SetReferralCode] = useState(null);
  const [LoremIpsum, SetLoremIpsum] = useState(null);

  const handleSubmit = async () => {

    if(Amount == null || ReferralCode == null || LoremIpsum == null){
      alert("Please Fill All Fields");
    }else{

      const options = {
        key: "rzp_test_ARaWgmWNcYFrfX",
        amount: Amount * 100, // Amount in paise (500 INR)
        currency: "INR",
        partial_payment: true,
        name: "Your Company Name",
        description: "Test Payment",
        handler: async function (response) {
          const paymentId = response.razorpay_payment_id;
          const signature = response.razorpay_signature;
          try {
            // Send payment details to backend for verification and capturing
            const response = await fetch(
              "http://localhost:8552/api/restaurants/capturePayment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  paymentId,
                  signature,
                }),
              }
            );
            // Handle success/failure response from backend
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error("Error capturing payment:", error);
          }
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();

    }

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
        <div className="flex flex-col items-start ml-8 mb-4 mt-12">
          <div className="text-white mb-2 text-xs font-semibold ">
            Enter the Bill Amount
          </div>
          <div className="flex flex-row">
          <style>
        {`
          /* Hide the spinner arrows for Chrome, Safari, Edge, Opera */
          #hide-spinner::-webkit-outer-spin-button,
          #hide-spinner::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Hide the spinner arrows for Firefox */
          #hide-spinner[type=number] {
            -moz-appearance: textfield;
          }
        `}
      </style>
            <input
              type="number"
              // value={wpNumber}
              className="bg-blue-300 w-56 h-10 mr-4 rounded-lg text-white placeholder-white p-3 text-xs font-semibold"
              placeholder="Enter your Name"
              id="hide-spinner"
              onChange={(e) => {
                SetAmount(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start ml-8 mt-4 ">
          <div className="text-white mb-2 text-xs font-semibold ">
            Enter the Referral Code
          </div>
          <div className="flex flex-row">
            <input
              type="text"
              // value={wpNumber}
              className="bg-blue-300 w-56 h-10 mr-4 rounded-lg text-white placeholder-white  p-3 text-xs font-semibold"
              placeholder="Enter your Area"
              onChange={(e) => {
                SetReferralCode(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start ml-8 mt-4 ">
          <div className="text-white mb-2 text-xs font-semibold ">
            lote dfgfd
          </div>
          <div className="flex flex-row">
            <input
              type="text"
              // value={wpNumber}
              className="bg-blue-300 w-56 h-10 mr-4 rounded-lg text-white placeholder-white  p-3 text-xs font-semibold"
              placeholder="Enter your Area"
              onChange={(e) => {
                SetLoremIpsum(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-[120px] mb-[50px]">
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

export default Payment;
