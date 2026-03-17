import React, { useState } from "react";
import { LogingBg2, Logo_01, Logo_02 } from "../../assets";
import LoginInput from "../Logininput";
import { useNavigate } from "react-router-dom";

function ExerciseOnly() {
  const navigate = useNavigate();
  const [userEmail, setuserEmail] = useState("");
  const [gender, setGender] = useState("");
  const [userAge, setuserAge] = useState("");
  const [userExperience, setuserExperience] = useState("");
  const [userIllnesses, setuserIllnesses] = useState("");
  const [userFitness, setuserFitness] = useState("");
  const [userlocation, setuserlocation] = useState("");
  const [userMotivation, setuserMotivation] = useState("");
  const [userTime, setuserTime] = useState("");
  const [userStress, setuserStress] = useState("");
  const [userInjury, setuserInjury] = useState("");
  const [userHealth, setuserHealth] = useState("");
  const [userContact, setuserContact] = useState("");
  const [userSleep_Pattern, setuserSleep_Pattern] = useState("");
  const [isSubmitHovered, setisSubmitHovered] = useState(false);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setuserExperience(event.target.value);
  };

  const handleLocationChange = (event) => {
    setuserlocation(event.target.value);
  };

  const handlesubmitClick = () => {};
  return (
    <div className="w-screen min-h-screen relative overflow-x-hidden overflow-y-auto flex flex-col bg-black">
      {/* Absolute Background image */}
      <img src={LogingBg2} className="w-full h-full object-cover absolute top-0 left-0 z-0" alt="" />

      {/* 🟠 Top Header Content overlay */}
      <div className="z-10 w-full flex flex-col p-8 px-12 md:px-16">
        
        {/* Top bar layer */}
        <div className="flex justify-between items-start w-full">
          {/* Static Greeting floating top left */}
          <div className="flex items-center gap-3">
             <div className="w-11 h-11 rounded-full bg-black/90 flex items-center justify-center text-white text-xl shadow-lg cursor-pointer">
               👤
             </div>
             <span className="text-black font-extrabold text-xl tracking-tight">Hi,User</span>
          </div>

          {/* Large Circular Logo top right */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-black to-zinc-900 p-2 border-4 border-gray-200 shadow-2xl flex items-center justify-center -mt-3">
             <img src={Logo_01} className="w-full h-full object-contain" alt="Logo" />
          </div>
        </div>

        {/* Center Title floating overlay curve section */}
        <div className="self-start flex items-center gap-4 ml-4 md:ml-[12%] mt-0 md:-mt-4">
           <span className="text-4xl text-black">
             <img src={Logo_02} className="w-16 h-16" alt="" />
           </span>
           <p className="text-white font-bold italic text-3xl md:text-5xl tracking-wide">
             Please fill the information
           </p>
        </div>

      </div>

      {/* 🟢 Bottom Form inputs layer absolute flex positioning spacing offsets */}
      <div className="z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 px-12 md:px-16 mt-32 md:mt-48 mb-16 mx-auto">
        
        {/* 🟡 Column 1: Left */}
        <div className="flex flex-col gap-6 w-full md:-ml-28 md:max-w-[420px] gap-y-12">
          <LoginInput
            placeHolder={"Name"}
            icons
            inputState={userEmail}
            inputStateFunc={setuserEmail}
            type="name"
          />
          
          {/* Combining Age & Gender on same Row */}
          <div className="flex items-center gap-24 w-full">
            <div className="w-[140px]">
              <LoginInput
                placeHolder={"Age"}
                icons
                inputState={userAge}
                inputStateFunc={setuserAge}
                type="age"
              />
            </div>
            <div className="flex items-center gap-3 font-semibold text-lg text-orange-600">
               <span>Male</span>
               <input
                 type="radio"
                 value="male"
                 checked={gender === "male"}
                 onChange={handleGenderChange}
                 className="w-5 h-5 accent-orange-600 bg-white"
               />
               <span className="ml-2">Female</span>
               <input
                 type="radio"
                 value="female"
                 checked={gender === "female"}
                 onChange={handleGenderChange}
                 className="w-5 h-5 accent-orange-600 bg-white"
               />
            </div>
          </div>

          {/* Dropdown 1 */}
          <div className="relative w-full">
            <select
              value={userExperience}
              onChange={handleExperienceChange}
              className="w-full py-4 px-6 rounded-full bg-[#dfdfdf] text-gray-700 font-semibold text-lg outline-none appearance-none shadow-sm cursor-pointer"
            >
               <option value="">Select Experience Level</option>
Reflecting values back accurately.               <option value="beginner">Beginner</option>
               <option value="Intermediate">Intermediate</option>
               <option value="Advanced">Advanced</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 font-black text-xl pointer-events-none">V</div>
          </div>

          <LoginInput placeHolder={"Illnesses"} icon inputState={userIllnesses} inputStateFunc={setuserIllnesses} type="illnesse" />
          <LoginInput placeHolder={"Fitness goal"} icon inputState={userFitness} inputStateFunc={setuserFitness} type="fitness" />
          
          {/* Dropdown 2 */}
          <div className="relative w-full">
            <select
              value={userlocation}
              onChange={handleLocationChange}
              className="w-full py-4 px-6 rounded-full bg-[#dfdfdf] text-gray-700 font-semibold text-lg outline-none appearance-none shadow-sm cursor-pointer"
            >
               <option value="">Select Prefer Experience Location</option>
Reflecting values back accurately.               <option value="GYM">GYM</option>
               <option value="Home">Home</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 font-black text-xl pointer-events-none">V</div>
          </div>
        </div>

        {/* 🔵 Column 2: Right */}
        <div className="flex flex-col gap-6 w-full md:ml-28 md:max-w-[420px] gap-y-12">
          {/* Row 1: Motivation & Time */}
          <div className="grid grid-cols-[2fr_1fr] gap-4 w-full">
            <LoginInput placeHolder={"Motivation"} icon inputState={userMotivation} inputStateFunc={setuserMotivation} type="motivation" />
            <LoginInput placeHolder={"Time"} icon inputState={userTime} inputStateFunc={setuserTime} type="time" />
          </div>

          {/* Row 2: Health history & Stress levels */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <LoginInput placeHolder={"Health history"} icon inputState={userHealth} inputStateFunc={setuserHealth} type="health" />
            <LoginInput placeHolder={"Stress levels"} icon inputState={userStress} inputStateFunc={setuserStress} type="stress" />
          </div>

          {/* Row 3: Emergency Contact & Injury history */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <LoginInput placeHolder={"Emergency Contact"} icon inputState={userContact} inputStateFunc={setuserContact} type="contact" />
            <LoginInput placeHolder={"Injury history"} icon inputState={userInjury} inputStateFunc={setuserInjury} type="injury" />
          </div>
          <LoginInput placeHolder={"Sleep patterns"} icon inputState={userSleep_Pattern} inputStateFunc={setuserSleep_Pattern} type="Sleep" />
        </div>

      </div>

      {/* 🟠 Submit & Back Button Absolute bottoms row offsets bounds */}
      <div className="z-10 flex justify-between px-12 md:px-24 mb-16 w-full">
         <div
           className={`bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-12 rounded-xl shadow-2xl cursor-pointer transition-all duration-150 transform hover:scale-105`}
           onClick={() => navigate(-1)}
         >
           Back
         </div>

         <div
           className={`bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-12 rounded-xl shadow-2xl cursor-pointer transition-all duration-150 transform hover:scale-105`}
           onClick={handlesubmitClick}
           onMouseEnter={() => setisSubmitHovered(true)}
           onMouseLeave={() => setisSubmitHovered(false)}
         >
           Submit
         </div>
      </div>
    </div>
  );
}

export default ExerciseOnly;
