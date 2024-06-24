import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CiWallet } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import axios from "axios";
import { BASE_URL } from "../config";
import { useLocation, useNavigate } from "react-router-dom";

import AutocompleteComponent from "./AutocompleteComponent";
import { Autocomplete } from '@react-google-maps/api';

const SignIn = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [residentialArea, setResidentialArea] = useState("");
  const [EmailId, setEmailId] = useState("");
  const location = useLocation();
  const [whatsappNo, setWhatsappNo] = useState(location.state);
  const firebaseConfig = {
    apiKey: "AIzaSyC9_uYx_n6JhDwRVYMgMWRLQHicNZh0xeM",
    authDomain: "signindemo-goanny.firebaseapp.com",
    projectId: "signindemo-goanny",
    storageBucket: "signindemo-goanny.appspot.com",
    messagingSenderId: "443941027151",
    appId: "1:443941027151:web:608418598cc3a446d9193a",
    measurementId: "G-7Y3Z6B4EV3",
  };

  const [childData, setChildData] = useState('');
  const [childData2, setChildData2] = useState('');
  const [childData3, setChildData3] = useState('');

  const handleChildData = (data) => {
    setChildData(data);
  };
  const handleChildData2 = (data) => {
    setChildData2(data);
  };
  const handleChildData3 = (data) => {
    setChildData3(data);
  };

  firebase.initializeApp(firebaseConfig);

  const signInWithGoogle = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.addScope(
      "https://www.googleapis.com/auth/user.addresses.read"
    );
    try {
      let btngoogle = document.getElementById("googlebtn")
      let result = await firebase.auth().signInWithPopup(googleProvider);
      setEmailId(result.user.uid);
      btngoogle.style.backgroundColor = "#fb7185"
    } catch (error) {
      console.error("Sign In With Google Error:", error);
    }
  };

  useEffect(() => {

    document.body.style.backgroundImage = "linear-gradient(to bottom, #251A6D, #F79CBC)";

  }, []);

  const handleSubmit = async () => {
    try {

      if (EmailId && nickname && childData) {
        localStorage.setItem("ApiEmailId", EmailId)
        localStorage.setItem("ApiName", nickname)
        localStorage.setItem("ApiResidentialArea", childData)
        localStorage.setItem("geolocationlat", childData2)
        localStorage.setItem("geolocationlon", childData3)
        navigate(`/birthday/${id}`);
      } else {
        alert("Please Fill All Fields");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-[20%] m-auto">
        <div className="mt-10  bg-gradient-to-t from-[#251A6D] to-[#F79CBC]">
          {/* Wallet Section */}
          <div className="bg-fuchsia-300 flex flex-row justify-between px-1 text-white w-28 rounded-lg m-5 float-right py-2">
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

          {/* Name Input Field */}
          <div className="flex flex-col items-center ml-8 mb-4 mt-[150px]">
            <div className="text-white mb-2 font-bold w-60">Your Nick Name</div>
            <div className="flex flex-row">
              <input
                type="text"
                value={nickname}
                className="bg-fuchsia-300 w-60 h-10 mr-4 rounded-lg text-white placeholder-white p-3"
                placeholder="Enter your Name"
                onChange={(e) => {
                  setNickname(e.target.value); // Update nickname state
                }}
              />
            </div>
          </div>

          {/* Residential Area Input Field */}
        

          <div className="flex flex-col items-center ml-8 mt-4 ">
            <div className="text-white mb-2 font-bold w-60">
              Residential Area Name
            </div>
            <div className="flex flex-row">
              <AutocompleteComponent sendDataToParent={handleChildData} 
              sendDataToParent2={handleChildData2} sendDataToParent3={handleChildData3}  />
            </div>
          </div>

          {/* Sign In Buttons */}
          <div className="flex flex-col justify-center items-center mt-4 text-white">
            <p className="mb-2 text-sm">Sign In</p>
            <div className="flex flex-row ">
              <div
                id="googlebtn"
                className="flex m-1 px-3 py-1 text-sm rounded-lg"
                onClick={signInWithGoogle}
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(240, 171, 252, 0.4))',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  paddingLeft:'0.5rem',
                  paddingRight:'0.5rem'
                }}
              >
                {" "}
                <FaGoogle className="m-1" />
                Google
              </div>
              <div className="flex m-1 px-3 py-1 text-sm  rounded-lg"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(240, 171, 252, 0.4))',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  paddingLeft:'0.5rem',
                  paddingRight:'0.5rem'
                }}
              >
                <AiFillFacebook className="m-1" /> Facebook
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center mt-[120px] mb-[50px]">
            <button
              className="h-20 w-20  rounded-full  bg-gradient-to-r from-fuchsia-300 to-fuchsia-500 "
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

export default SignIn;