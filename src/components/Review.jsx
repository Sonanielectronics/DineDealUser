import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CiWallet } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';
import r1 from "../assets/images/rate1.png";
import r2 from "../assets/images/rate2.png";
import r3 from "../assets/images/rate3.png";
import r4 from "../assets/images/rate4.png";
import r5 from "../assets/images/rate5.png";

import { BASE_URL } from "../main";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Review = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [ambienceProgress, setAmbienceProgress] = useState(0);
  const [FoodProgress, setFoodProgress] = useState(0);
  const [servicingProgress, setservicingProgress] = useState(0);
  const [costingProgress, setCostingProgress] = useState(0);
  const [dotPosition, setDotPosition] = useState(0);
  const [employeeName, setEmployeeName] = useState([]);
  const [employee, setEmployee] = useState("");
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSelectChange = (event) => {
    setEmployee(event.target.value);
  };

  const emojis = [
    r1, // 😊
    r2, // 😄
    r3, // 😍
    r4, // 🤩
    r5 // 😎
  ]; // Example emojis

  const handleClick = (index, heading) => {

    const widthPercentage = (index + 1) * (100 / emojis.length);

    if (heading == "ambienceProgress") {

      setAmbienceProgress(widthPercentage);
      setDotPosition(widthPercentage);

    } else if (heading == "FoodProgress") {

      setFoodProgress(widthPercentage);
      setDotPosition(widthPercentage);

    } else if (heading == "servicingProgress") {

      setservicingProgress(widthPercentage);
      setDotPosition(widthPercentage);

    } else {

      setCostingProgress(widthPercentage);
      setDotPosition(widthPercentage);

    }

  };

  const handleSubmit = () => {

    var ambience;
    if (ambienceProgress == 0) {
      ambience = 0;
    } else if (ambienceProgress == 20) {
      ambience = 1;
    } else if (ambienceProgress == 40) {
      ambience = 2;
    } else if (ambienceProgress == 60) {
      ambience = 3;
    } else if (ambienceProgress == 80) {
      ambience = 4;
    } else {
      ambience = 5;
    }

    var food;
    if (FoodProgress == 0) {
      food = 0;
    } else if (FoodProgress == 20) {
      food = 1;
    } else if (FoodProgress == 40) {
      food = 2;
    } else if (FoodProgress == 60) {
      food = 3;
    } else if (FoodProgress == 80) {
      food = 4;
    } else {
      food = 5;
    }

    var costing;
    if (costingProgress == 0) {
      costing = 0;
    } else if (costingProgress == 20) {
      costing = 1;
    } else if (costingProgress == 40) {
      costing = 2;
    } else if (costingProgress == 60) {
      costing = 3;
    } else if (costingProgress == 80) {
      costing = 4;
    } else {
      costing = 5;
    }

    var servicing;
    if (servicingProgress == 0) {
      servicing = 0;
    } else if (servicingProgress == 20) {
      servicing = 1;
    } else if (servicingProgress == 40) {
      servicing = 2;
    } else if (servicingProgress == 60) {
      servicing = 3;
    } else if (servicingProgress == 80) {
      servicing = 4;
    } else {
      servicing = 5;
    }

    if (ambience == 0 || food == 0 || costing == 0 || servicing == 0 || text == "" || employee == "") {
      alert("Please Fill all Data");
    } else {

      let ApiEndPoint;
      let requestData3 = {}

      if (typeof localStorage.Profession != 'undefined') {

        ApiEndPoint = "updateProfile";

        const birtday = localStorage.ApiBirthday;
        const date = new Date(birtday);

        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();

        var monthArr = [];
        if (month < 10) {
          monthArr.push(`0${month}`);
        } else {
          monthArr.push(month);
        }

        var dayArr = [];
        if (day < 10) {
          dayArr.push(`0${day}`);
        } else {
          dayArr.push(day);
        }

        const birthday = `1999-${monthArr[0]}-${dayArr[0]}T00:00:00.000+00:00`;

        const anniversary = localStorage.ApiAnniversary;
        const date2 = new Date(anniversary);

        const month2 = date2.getUTCMonth() + 1;
        const day2 = date2.getUTCDate();

        var monthArr2 = [];
        if (month2 < 10) {
          monthArr2.push(`0${month2}`);
        } else {
          monthArr2.push(month2);
        }

        var dayArr2 = [];
        if (day2 < 10) {
          dayArr2.push(`0${day2}`);
        } else {
          dayArr2.push(day2);
        }

        const anniversary2 = `1999-${monthArr2[0]}-${dayArr2[0]}T00:00:00.000+00:00`;

        requestData3 = {
          restaurantID: "66386f69c4871a2a547d30d5",
          whatsappNumber: localStorage.ApiWhatsappNumber,
          googleSignInToken: localStorage.ApiEmailId,
          name: localStorage.ApiName,
          area: {
            address: localStorage.ApiResidentialArea,
            latLng: {
              lat: localStorage.Latitude,
              lng: localStorage.Longitude,
            },
          },
          relationShipStatus: localStorage.ApiRelationStatus,
          gender: localStorage.ApiGender,
          haveFoodDeliveryApp: localStorage.ApiHaveFoodDeliveryApp,
          anniversary: anniversary2,
          ageGroup: localStorage.ApiAgeGroup,
          dateOfBirth: birthday,
          profession: localStorage.Profession,
        };

      } else if (typeof localStorage.ApiHaveFoodDeliveryApp != 'undefined') {

        ApiEndPoint = "updateProfile";

        const birtday = localStorage.ApiBirthday;
        const date = new Date(birtday);

        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();

        var monthArr = [];
        if (month < 10) {
          monthArr.push(`0${month}`);
        } else {
          monthArr.push(month);
        }

        var dayArr = [];
        if (day < 10) {
          dayArr.push(`0${day}`);
        } else {
          dayArr.push(day);
        }

        const birthday = `1999-${monthArr[0]}-${dayArr[0]}T00:00:00.000+00:00`;

        const anniversary = localStorage.ApiAnniversary;
        const date2 = new Date(anniversary);

        const month2 = date2.getUTCMonth() + 1;
        const day2 = date2.getUTCDate();

        var monthArr2 = [];
        if (month2 < 10) {
          monthArr2.push(`0${month2}`);
        } else {
          monthArr2.push(month2);
        }

        var dayArr2 = [];
        if (day2 < 10) {
          dayArr2.push(`0${day2}`);
        } else {
          dayArr2.push(day2);
        }

        const anniversary2 = `1999-${monthArr2[0]}-${dayArr2[0]}T00:00:00.000+00:00`;

        requestData3 = {
          restaurantID: "66386f69c4871a2a547d30d5",
          whatsappNumber: localStorage.ApiWhatsappNumber,
          googleSignInToken: localStorage.ApiEmailId,
          name: localStorage.ApiName,
          area: {
            address: localStorage.ApiResidentialArea,
            latLng: {
              lat: localStorage.Latitude,
              lng: localStorage.Longitude,
            },
          },
          relationShipStatus: localStorage.ApiRelationStatus,
          gender: localStorage.ApiGender,
          haveFoodDeliveryApp: localStorage.ApiHaveFoodDeliveryApp,
          anniversary: anniversary2,
          ageGroup: localStorage.ApiAgeGroup,
          dateOfBirth: birthday,
          profession: localStorage.Profession,
        };

      } else if (typeof localStorage.ApiRelationStatus != 'undefined') {

        ApiEndPoint = "updateProfile";

        const birtday = localStorage.ApiBirthday;
        const date = new Date(birtday);

        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();

        var monthArr = [];
        if (month < 10) {
          monthArr.push(`0${month}`);
        } else {
          monthArr.push(month);
        }

        var dayArr = [];
        if (day < 10) {
          dayArr.push(`0${day}`);
        } else {
          dayArr.push(day);
        }

        const birthday = `1999-${monthArr[0]}-${dayArr[0]}T00:00:00.000+00:00`;

        const ApiRelationStatus = localStorage.ApiRelationStatus;
        const ApiDate = localStorage.ApiDate;
        const ApiMonth = localStorage.ApiMonth;

        var OfficialApiDate = [];
        if (ApiDate < 10) {
          OfficialApiDate.push(`0${ApiDate}`);
        } else {
          OfficialApiDate.push(ApiDate);
        }

        var OfficialApiMonth = [];
        if (ApiMonth < 10) {
          OfficialApiMonth.push(`0${ApiMonth}`);
        } else {
          OfficialApiMonth.push(ApiMonth);
        }

        const OfficialApiMonthArr = [];
        if (OfficialApiMonth[0] !== undefined) {
          OfficialApiMonthArr.push(
            `1999-${OfficialApiMonth[0]}-${OfficialApiDate[0]}T00:00:00.000+00:00`
          );
        }

        const ApiAgeGroup = localStorage.ApiAgeGroup;

        requestData3 = {
          restaurantID: "66386f69c4871a2a547d30d5",
          whatsappNumber: localStorage.ApiWhatsappNumber,
          googleSignInToken: localStorage.ApiEmailId,
          name: localStorage.ApiName,
          area: {
            address: localStorage.ApiResidentialArea,
            latLng: {
              lat: localStorage.Latitude,
              lng: localStorage.Longitude,
            },
          },
          relationShipStatus: ApiRelationStatus,
          gender: localStorage.ApiGender,
          anniversary: OfficialApiMonthArr[0],
          ageGroup: ApiAgeGroup,
          dateOfBirth: birthday,
        };

      } else {

        ApiEndPoint = "register";

        const ApiWhatsappNumber = localStorage.ApiWhatsappNumber;
        const ApiEmailId = localStorage.ApiEmailId;
        const ApiName = localStorage.ApiName;
        const ApiResidentialArea = localStorage.ApiResidentialArea;
        const ApiBirthDate = localStorage.ApiBirthDate;
        const ApiBirthMonth = localStorage.ApiBirthMonth;

        var OfficialApiBirthDate;
        if (ApiBirthDate < 10) {
          OfficialApiBirthDate = `0${ApiBirthDate}`;
        } else {
          OfficialApiBirthDate = ApiBirthDate;
        }

        var OfficialApiBirthMonth;
        if (ApiBirthMonth < 10) {
          OfficialApiBirthMonth = `0${ApiBirthMonth}`;
        } else {
          OfficialApiBirthMonth = ApiBirthMonth;
        }

        const ApiBirthday = `1999-${OfficialApiBirthMonth}-${OfficialApiBirthDate}T01:00:00.000+00:00`;

        const ApiGender = localStorage.ApiGender;

        requestData3 = {
          restaurantID: "66386f69c4871a2a547d30d5",
          whatsappNumber: ApiWhatsappNumber,
          googleSignInToken: ApiEmailId,
          name: ApiName,
          area: {
            address: ApiResidentialArea,
            latLng: {
              lat: "18.523242938544893",
              lng: "73.86157082895691",
            },
          },
          gender: ApiGender,
          dateOfBirth: ApiBirthday,
        };

      }

      fetch(`${BASE_URL}/api/customer/${ApiEndPoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData3),
      })
        .then((response) => response.json())
        .then((responseData) => {
      
          if(responseData.data.token){
            localStorage.setItem("Token", responseData.data.token);
          }
          
          const requestData = {
            "ambience": ambience,
            "food": food,
            "costing": costing
          }

          let token = localStorage.Token;

          fetch(`${BASE_URL}/api/customer/addRestaurantReviews/${id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(requestData),
          })
            .then((response) => response.json())
            .then((responseData) => {

              const requestData2 = {
                "service": servicing,
                "restaurantId": id,
                "comment": text
              }

              fetch(`${BASE_URL}/api/customer/addEmployeeReviews/${employee}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(requestData2),
              })
                .then((response) => response.json())
                .then((responseData) => {
                  localStorage.clear(); 
                  navigate("/payment");
                })
                .catch((error) => {
                  console.error("API call error:", error);
                });

            })
            .catch((error) => {
              console.error("API call error:", error);
            });


        })
        .catch((error) => {
          console.error("API call error:", error);
        });

    }

  };

  const containerStyle = {
    overflowY: "scroll" /* Enable scrolling */,
    msOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,
    paddingLeft: "0px",
    paddingRight: "0px"
  };

  const ratingArr = [
    {
      "heading": "Ambience",
      "usestate": "ambienceProgress",
      "width": ambienceProgress
    },
    {
      "heading": "Food",
      "usestate": "FoodProgress",
      "width": FoodProgress
    },
    {
      "heading": "Service",
      "usestate": "servicingProgress",
      "width": servicingProgress
    },
    {
      "heading": "Costing",
      "usestate": "costingProgress",
      "width": costingProgress
    }
  ];

  useEffect(() => {

    document.body.style.backgroundImage = "linear-gradient(to bottom, #251A6D, #F79CBC)";

    const fetchUserData = async () => {

      try {
        const response = await axios.get(`${BASE_URL}/api/restaurants/getEmployees/${id}`);
        setEmployeeName(response.data.data)
      } catch (err) {
        console.log("Error ", err);
      }

    };

    fetchUserData();

  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center w-[20%] m-auto">
      <div className="mt-10 bg-gradient-to-t from-[#251A6D] to-[#F79CBC] px-3">
        <div className="flex flex-row justify-between ">
          <div className="mt-5  bg-pink-300 rounded-2xl h-8 w-8 text-white mx-3 font-extrabold flex justify-center items-center">
            <IoIosArrowBack />
          </div>
          <div className=" bg-pink-300 flex flex-row  ml-24 justify-between px-1 text-white w-28 rounded-lg m-2 float-right py-2">
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
        <div className=" ">
          <div className="text-lg mx-5 text-white font-bold text-center mt-5">
            Please review your dine-in experience
          </div>
          {/* <div className="flex flex-row px-3">
           </div> */}

          <div className="p-5 mt-0 sm:h-80 md:h-96 overflow-y-auto overflow-x-hidden" style={containerStyle}>
            <style>
              {`
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
    `}
            </style>

            {ratingArr.map((name, index) => (

              <div class="max-w-sm mt-2 p-4 bg-fuchsia-300 border border-rose-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h6 className=' text-white font-bold'>{name.heading}</h6>
                <div className="flex flex-col items-center">
                  <div className="relative w-64 h-2 bg-gray-200 rounded-full mb-2">

                    <div className="absolute h-2 bg-rose-300 rounded-full" style={{ width: `${name.width}%` }}>

                    </div>
                    {/* <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2">
             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div> */}
                  </div>
                  <div className="w-64 flex justify-between">
                    {emojis.map((emoji, index) => (
                      <span
                        key={index}
                        role="img"
                        aria-label="emoji"
                        onClick={() => handleClick(index, name.usestate)}
                        style={{ cursor: 'pointer' }}
                      >
                        <img src={emoji} alt={`Emoji ${index + 1}`} style={{ width: '20px', height: '20px' }} />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col items-start ml-4 mt-4" style={{ paddingLeft: "0px", marginLeft: "0px", width: "100%" }}>
              <div className="text-white mb-2 text-sm font-semibold">
                Name of Employee
              </div>
              <div className="flex flex-row" style={{ width: "100%" }}>
                {/* <input
                  type="text"
                  className="bg-fuchsia-300 w-46 h-10 mr-4 rounded-lg text-white placeholder-white  p-3"
                  style={{ marginRight: "0px", width: "100%" }}
                  onChange={(e) => {
                    setWpNumber(e.target.value);
                  }}
                /> */}
                <select
                  className="bg-fuchsia-300 w-46 h-12 mr-4 rounded-lg text-white placeholder-white  p-3"
                  style={{ marginRight: "0px", width: "100%" }}
                  onChange={handleSelectChange} // Event handler for change
                >
                  <option value="">Name of Employee</option>
                  {employeeName.map((name, index) => (
                    <option value={name._id} >{name.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col items-start ml-4 mt-4" style={{ paddingLeft: "0px", marginLeft: "0px", width: "100%" }}>
              <div className="text-white text-sm mb-2 font-semibold">
                Comments
              </div>
              <div className="flex flex-row" style={{ width: "100%" }}>
                <textarea
                  class="resize-none bg-fuchsia-300 rounded-lg w-56 h-48 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" style={{ marginRight: "0px", width: "100%" }}
                  value={text} // Set the current state as the value
                  onChange={handleTextChange} // Update the state on change
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[20px] mb-[30px]">
          <button
            className="h-20 w-20 bg-red-600 rounded-full  bg-gradient-to-r from-blue-300 to-blue-500"
            onClick={handleSubmit}
          >
            <FaArrowRight className="text-white text-3xl ml-6 font-bold flex justify-center items-center" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Review;