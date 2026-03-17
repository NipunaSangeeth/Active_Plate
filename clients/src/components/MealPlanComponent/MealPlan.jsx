import React, { useState } from "react";
import LoginInput from "../Logininput";
import { LogingBg2, Logo_01, Logo_02 } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { alertSuccess, alertWarning, alertNull } from "../../context/actions/alertActionss";
import { db } from "../../config/firebase.config";
import { collection, addDoc } from "firebase/firestore";

function MealPlan() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [userEmail, setuserEmail] = useState("");
  const [isSignUp, setisSignUp] = useState(false);

  const [gender, setGender] = useState("");

  const [userAge, setuserAge] = useState("");

  const [CurrentEatingHabits, setCurrentEatingHabits] = useState("");

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
  const [isSubmitHovered, setisSubmitHovered] = useState(false); // SUMBIT button

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCurrentEatingHabitsChange = (event) => {
    setCurrentEatingHabits(event.target.value);
  };

  const handleLocationChange = (event) => {
    setuserlocation(event.target.value);
  };

  /**
   * Submit Meal Plan data to Firestore "mealPlans" Collection
   * Performs basic validation before saving asynchronously.
   */
  const handlesubmitClick = async () => {
    // Validate ALL fields are filled
    if (!gender || !userAge || !CurrentEatingHabits || !userIllnesses || !userFitness || !userlocation || !userMotivation || !userTime || !userStress || !userInjury || !userHealth || !userContact || !userSleep_Pattern) {
      dispatch(alertWarning("Please fill in all details before submitting."));
      setTimeout(() => dispatch(alertNull()), 4000);
      return;
    }

    try {
      await addDoc(collection(db, "mealPlans"), {
        gender,
        userAge,
        CurrentEatingHabits,
        userIllnesses, // Meal preference
        userFitness, // Allergies
        userlocation, // Nutrient focus
        userInjury, // Injury history
        userMotivation, // Cooking abilities
        userHealth, // Hydration
        userContact, // Sugar and Salt intake
        userSleep_Pattern, // Medical consideration
        userTime, // Supplement type
        userStress, // Emergency Contact
        submittedAt: new Date()
      });
      dispatch(alertSuccess("Meal Plan submitted successfully!"));
      setTimeout(() => {
        dispatch(alertNull());
        navigate("/report", { 
          state: { 
            serviceType: "MealPlan", 
            formData: { gender, userAge, CurrentEatingHabits, userIllnesses, userFitness, userlocation, userMotivation, userTime, userStress, userInjury, userHealth, userContact, userSleep_Pattern } 
          } 
        });
      }, 2000);
    } catch (error) {
      console.error("Error saving document: ", error);
      dispatch(alertWarning("Failed to submit. Please try again."));
      setTimeout(() => dispatch(alertNull()), 4000);
    }
  };
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
             <div className="w-11 h-11 rounded-full bg-black/90 flex items-center justify-center text-white text-xl shadow-lg cursor-pointer overflow-hidden">
               {user?.photoURL ? (
                 <img src={user.photoURL} alt="pro-pic" className="w-full h-full object-cover" />
               ) : (
                 "👤"
               )}
             </div>
             <span className="text-black font-extrabold text-xl tracking-tight">
               Hi, {user?.displayName || "User"}
             </span>
          </div>

          {/* Large Circular Logo top right */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-black to-zinc-900 p-2 border-4 border-gray-200 shadow-2xl flex items-center justify-center -mt-3">
             <img src={Logo_01} className="w-full h-full object-contain" alt="Logo" />
          </div>
        </div>

        {/* Center Title floating overlay curve section */}
        <div className="self-start flex items-center gap-4 ml-4 md:ml-[12%] mt-0 md:-mt-4">
           <span className="text-4xl text-black"><img src={Logo_02} className="w-16 h-16" alt="" /></span>
           <p className="text-white font-bold italic text-3xl md:text-5xl tracking-wide">
             Please fill the information
           </p>
        </div>

      </div>

      {/* 🟢 Bottom Form inputs layer absolute flex positioning spacing offsets */}
      <div className="z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 px-12 md:px-16 mt-24 md:mt-40 mb-16 mx-auto">
        
        {/* 🟡 Column 1: Left */}
        <div className="flex flex-col gap-6 w-full md:-ml-28 md:max-w-[420px]">
          <LoginInput
            placeHolder={"Name"}
            icons
            inputState={userEmail}
            inputStateFunc={setuserEmail}
            type="name"
            isSignUp={isSignUp}
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
                isSignUp={isSignUp}
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
              value={CurrentEatingHabits}
              onChange={handleCurrentEatingHabitsChange}
              className="w-full py-4 px-6 rounded-full bg-[#dfdfdf] text-gray-700 font-semibold text-lg outline-none appearance-none shadow-sm cursor-pointer"
            >
              <option value="">Current Eating Habits</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-black font-black text-xl pointer-events-none">V</div>
          </div>

          <LoginInput
            placeHolder={"Meal preference"}
            icons
            inputState={userIllnesses}
            inputStateFunc={setuserIllnesses}
            type="illnesse"
            isSignUp={isSignUp}
          />
          <LoginInput
            placeHolder={"Allergies"}
            icons
            inputState={userFitness}
            inputStateFunc={setuserFitness}
            type="fitness"
            isSignUp={isSignUp}
          />
          
          {/* Dropdown 2 */}
          <div className="relative w-full">
            <select
              value={userlocation}
              onChange={handleLocationChange}
              className="w-full py-4 px-6 rounded-full bg-[#dfdfdf] text-gray-700 font-semibold text-lg outline-none appearance-none shadow-sm cursor-pointer"
            >
              <option value="">Nutrient focus</option>
              <option value="GYM">GYM</option>
              <option value="HOME">HOME</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-black font-black text-xl pointer-events-none">V</div>
          </div>
          
          {/* Injury history placed here based on wireframe symmetrical requirements or right side setup layout */}
          <LoginInput
            placeHolder={"Injury history"}
            icons
            inputState={userInjury}
            inputStateFunc={setuserInjury}
            type="injury"
            isSignUp={isSignUp}
          />
        </div>

        {/* 🔵 Column 2: Right */}
        <div className="flex flex-col gap-6 w-full md:ml-28 md:max-w-[420px] gap-y-10">
          <LoginInput
            placeHolder={"Cooking abilities"}
            icon
            inputState={userMotivation}
            inputStateFunc={setuserMotivation}
            type="motivation"
            isSignUp={isSignUp}
          />
          <LoginInput
            placeHolder={"Hydration"}
            icon
            inputState={userHealth}
            inputStateFunc={setuserHealth}
            type="health"
            isSignUp={isSignUp}
          />
          <LoginInput
            placeHolder={"Sugar and Salt intake"}
            icon
            inputState={userContact}
            inputStateFunc={setuserContact}
            type="contact"
            isSignUp={isSignUp}
          />
          <LoginInput
            placeHolder={"Medical consideration"}
            icon
            inputState={userSleep_Pattern}
            inputStateFunc={setuserSleep_Pattern}
            type="Sleep"
            isSignUp={isSignUp}
          />
          <LoginInput
            placeHolder={"Supplement type"}
            icon
            inputState={userTime}
            inputStateFunc={setuserTime}
            type="time"
          />
          <LoginInput
            placeHolder={"Emergency Contact"}
            icon
            inputState={userStress}
            inputStateFunc={setuserStress}
            type="stress"
            isSignUp={isSignUp}
          />
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

export default MealPlan;
