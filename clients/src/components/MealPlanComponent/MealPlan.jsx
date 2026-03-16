import React, { useState } from "react";
import LoginInput from "../Logininput";
import { LogingBg2, Logo_02 } from "../../assets";

function MealPlan() {
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

  const handlesubmitClick = () => {};
  return (
    <div className=" w-screen h-screen relative overflow-hidden flex">
      <img src={LogingBg2} className="w-full h-full object-cover" alt="" />

      <div className="absolute -top-80 -left-44 w-full h-full flex flex-col justify-center items-center p-10 gap-4">
        <div className=" flex items-center">
          <img
            style={{ width: 60, height: 60 }}
            src={Logo_02}
            className="w-8 h-10"
            alt=""
          />
          <p className="text-white font-semibold text-5xl ml">
            Please fill the information
          </p>
        </div>
      </div>

      <div className="absolute top-72 left-4 w-1/4 h-full flex flex-col justify-start items-start gap-8">
        <LoginInput
          placeHolder={"Name"}
          icons
          inputState={userEmail}
          inputStateFunc={setuserEmail}
          type="name"
          isSignUp={isSignUp}
        />
        <LoginInput
          placeHolder={"Age"}
          icons
          inputState={userAge}
          inputStateFunc={setuserAge}
          type="age"
          isSignUp={isSignUp}
        />
        {/* Experience level dropdown */}

        <select
          style={{ width: 385 }}
          value={CurrentEatingHabits}
          onChange={handleCurrentEatingHabitsChange}
          className="border border-gray-300 rounded-md p-3"
        >
          <option value="">Current Eating Habits</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>

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
        {/* Prefer experience location dropdown */}
        <select
          style={{ width: 385 }}
          value={userlocation}
          onChange={handleLocationChange}
          className="border border-gray-300 rounded-md p-3"
        >
          <option value="">Nutrient focus</option>
          <option value="GYM">GYM</option>
          <option value="HOME">HOME</option>
        </select>
      </div>

      {/*GENDER CHEk  */}
      <div className="absolute -top-4 left-96 w-1/4 h-full flex flex-col justify-center items-start p-10">
        <label>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
            style={{
              width: "20px",
              height: "20px",
              marginLeft: 90,
              marginTop: 60,
            }}
          />
          <span
            style={{ marginLeft: "8px", marginRight: "16px", color: "orange" }}
          >
            Male
          </span>
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
            style={{ width: "20px", height: "20px" }}
          />
          <span style={{ marginLeft: "10px", color: "orange" }}>Female</span>
        </label>
      </div>
      <div className="absolute top-32 right-96 w-1/4 h-full flex flex-col justify-center items-start p-10 gap-8 ">
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
          // isSignUp={isSignUp}
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
      <div className="absolute -top-16 right-6 w-1/4 h-full flex flex-col justify-center items-start p-10 gap-8">
        <LoginInput
          placeHolder={"Injury history"}
          icon
          inputState={userInjury}
          inputStateFunc={setuserInjury}
          type="injury"
          isSignUp={isSignUp}
        />
      </div>
      <div className=" absolute bottom-20 right-28">
        <div
          className={`bg-headingColor hover:bg-7EA0E0 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer`}
          onClick={handlesubmitClick}
          onMouseEnter={() => setisSubmitHovered(true)}
          onMouseLeave={() => setisSubmitHovered(false)}
        >
          SUMBIT
        </div>
      </div>
    </div>
  );
}

export default MealPlan;
