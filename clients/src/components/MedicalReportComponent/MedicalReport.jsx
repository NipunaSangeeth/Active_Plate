import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInOut } from "../../animations";
import { FaHeartbeat, FaUserAlt, FaRunning, FaNotesMedical } from "react-icons/fa";
import { LogingBg2 } from "../../assets";

// Mock Data Profiles representing (Good, Warning, Danger)
const mockReports = {
  MealPlan: [
    {
      status: "NORMAL",
      statusColor: "text-green-500",
      health: { sugar: "Normal", cholesterol: "Good maintenance", bp: "Normal", hr: "Slightly low", bmi: "Normal" },
      fitness: { experience: "Beginner", goal: "Be more active", location: "Home", sleep: "No fix pattern", schedule: "Non", motivation: "Keeping up with work", stress: "Slightly stressed", injury: "Back injury in early 20s" },
      recommendations: { dietary: "Stick to a low carb and high protein diet with fiber.", stress: "Need to have a fix sleeping pattern. Spend time with family.", sleep: "Avoid staying up late and taking naps." },
      conclusion: "Your health is in NORMAL condition, but improvements can be made."
    },
    {
      status: "RISKY",
      statusColor: "text-red-500",
      health: { sugar: "High", cholesterol: "High", bp: "Borderline", hr: "High", bmi: "Slightly on the upper side" },
      fitness: { experience: "Intermediate", goal: "Weight loss", location: "Gym", sleep: "Slept poorly", schedule: "Regular", motivation: "Improving fitness", stress: "High", injury: "None" },
      recommendations: { dietary: "Lower sugar intake drastically. Increase green vegetables.", stress: "Meditation and breathing exercises.", sleep: "Reduce screen time 1 hour before sleeping." },
      conclusion: "Your health is in a slightly RISKY condition. We recommend consulting a doctor."
    }
  ],
  ExerciseOnly: [
    {
      status: "GOOD",
      statusColor: "text-green-600",
      health: { sugar: "Normal", cholesterol: "Normal", bp: "Normal", hr: "Normal", bmi: "Perfect" },
      fitness: { experience: "Advanced", goal: "Build muscle", location: "Gym", sleep: "8 Hours", schedule: "High intensity", motivation: "Self-driven", stress: "Low", injury: "None" },
      recommendations: { dietary: "Maintain current caloric intake. Focus on protein.", stress: "Good balance maintained.", sleep: "Regularly sleep 8 hours." },
      conclusion: "You are in EXCELLENT shape! Keep up the great work with your custom regime."
    }
  ],
  TheCombined: [
    {
      status: "BORDERLINE",
      statusColor: "text-yellow-500",
      health: { sugar: "Normal", cholesterol: "Marginal", bp: "Slightly High", hr: "Normal", bmi: "Overweight" },
      fitness: { experience: "Beginner", goal: "Overall wellbeing", location: "Home & Gym", sleep: "Insomnia occasionally", schedule: "Irregular", motivation: "Moderate", stress: "High", injury: "Knee pain" },
      recommendations: { dietary: "Reduce sodium and processed food. More cardio inputs.", stress: "Identify stress triggers.", sleep: "Melatonin or herbal teas for relaxation." },
      conclusion: "Your health is in a BORDERLINE state. Minor lifestyle updates will make a big difference."
    }
  ]
};

function MedicalReport() {
  const location = useLocation();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const formData = location.state?.formData || {};
  const serviceType = location.state?.serviceType || "MealPlan";

  useEffect(() => {
    const list = mockReports[serviceType] || mockReports["MealPlan"];
    const randomIndex = Math.floor(Math.random() * list.length);
    setReport(list[randomIndex]);
  }, [serviceType]);

  if (!report) return <div className="text-white text-center mt-20">Generating Report...</div>;

  return (
    <div className="w-screen min-h-screen relative overflow-x-hidden overflow-y-auto flex flex-col bg-slate-100 font-sans text-gray-800">
      {/* Absolute Background (Optional or keep solid gray like screenshot) */}
      <img src={LogingBg2} className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-10" alt="" />

      {/* 🟦 Top Header Bar */}
      <div className="w-full bg-sky-500 p-4 flex items-center justify-start gap-4 z-10 shadow-md">
        <div className="bg-white p-2 rounded-lg text-sky-500 text-2xl">
          <FaNotesMedical />
        </div>
        <h1 className="text-2xl font-semibold text-white">Personal Medical Report</h1>
      </div>

      <div className="max-w-4xl w-[95%] mx-auto bg-white my-6 rounded-xl shadow-xl p-8 flex flex-col gap-6 z-10">
        
        {/* 👤 Section 1: Patient Information */}
        <div className="border-b pb-4">
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-700 mb-3">
            <FaUserAlt className="text-sky-500" />
            <h2>Patient Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-md text-gray-600">
            <p>• <strong>Name:</strong> {formData.userName || location.state?.userName || "Michael Phelps"}</p>
            <p>• <strong>Emergency Contact:</strong> {formData.userContact || "+1 202 555 0156"}</p>
            <p>• <strong>Age:</strong> {formData.userAge || "38"}</p>
            <p>• <strong>Health History:</strong> {formData.userIllnesses || report.fitness.injury}</p>
          </div>
        </div>

        {/* ❤️ Section 2: Health Assessment */}
        <div className="border-b pb-4">
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-700 mb-3">
            <FaHeartbeat className="text-red-500" />
            <h2>Health Assessment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-md text-gray-600">
            <p>• <strong>Sugar Level:</strong> {report.health.sugar}</p>
            <p>• <strong>Heart Rate:</strong> {report.health.hr}</p>
            <p>• <strong>Cholesterol Level:</strong> {report.health.cholesterol}</p>
            <p>• <strong>BMI (Body Mass Index):</strong> {report.health.bmi}</p>
            <p>• <strong>Blood Pressure:</strong> {report.health.bp}</p>
          </div>
        </div>

        {/* 🏃‍♂️ Section 3: Fitness Assessment */}
        <div className="border-b pb-4">
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-700 mb-3">
            <FaRunning className="text-green-500" />
            <h2>Fitness Assessment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-md text-gray-600">
            <p>• <strong>Experience Level:</strong> {report.fitness.experience}</p>
            <p>• <strong>Exercise Schedule:</strong> {report.fitness.schedule}</p>
            <p>• <strong>Fitness Goal:</strong> {report.fitness.goal}</p>
            <p>• <strong>Motivation:</strong> {report.fitness.motivation}</p>
            <p>• <strong>Preferred Exercise Location:</strong> {report.fitness.location}</p>
            <p>• <strong>Stress Levels:</strong> {report.fitness.stress}</p>
            <p>• <strong>Sleep Patterns:</strong> {report.fitness.sleep}</p>
            <p>• <strong>Injury History:</strong> {report.fitness.injury}</p>
          </div>
        </div>

        {/* 📋 Section 4: Recommendations */}
        <div className="border-b pb-4">
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-700 mb-3">
            <FaNotesMedical className="text-orange-500" />
            <h2>Recommendations</h2>
          </div>
          <div className="flex flex-col gap-3 text-md text-gray-600">
            <p>• <strong>Dietary Recommendations:</strong> {report.recommendations.dietary}</p>
            <p>• <strong>Stress Management Tips:</strong> {report.recommendations.stress}</p>
            <p>• <strong>Sleep Improvement Tips:</strong> {report.recommendations.sleep}</p>
          </div>
        </div>

        {/* 🏁 Section 5: Conclusion */}
        <div className="flex flex-col items-center justify-center gap-4 mt-6">
          <div className="text-center">
            <p className="text-xl font-medium text-gray-700">
              Your health is in <span className={`font-bold uppercase ${report.statusColor}`}>{report.status}</span> condition.
            </p>
            <p className="text-md text-gray-500">{report.conclusion}</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-slate-300 rounded-full text-gray-800 text-lg font-semibold shadow-md hover:bg-slate-400 transition-all duration-200"
            onClick={() => navigate("/", { replace: true })}
          >
            Start your Plan
          </motion.button>
        </div>

      </div>
    </div>
  );
}

export default MedicalReport;

