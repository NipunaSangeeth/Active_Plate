import React, { useState } from "react";
import { LogingBg, Logo, Logo_01 } from "../assets";
import { LoginInput } from "../components";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config/firebase.config";
import { validateUserJWTToken } from "../api";
import { useNavigate } from "react-router-dom";
import { setUserDetails } from "../context/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { alertInfo, alertWarning } from "../context/actions/alertActionss";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setisSignUp] = useState(false);
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      firebaseAuth.onAuthStateChanged((cred) => {
        if (cred) {
          cred.getIdToken().then((token) => {
            validateUserJWTToken(token).then((data) => {
              dispatch(setUserDetails(data));
            });
            navigate("/", { replace: true });
          });
        }
      });
    });
  };

  const signUpWithEmailPass = async () => {
    if (userEmail === "" || password === "" || confirm_password === "" ){
      dispatch(alertInfo("Required field should not be empty"));
    }else{
      if(password === confirm_password){
        setUserEmail("");
        setconfirm_password("");
        setpassword("");
        await createUserWithEmailAndPassword(
          firebaseAuth, 
          userEmail, 
          password
          ).then(userCred => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              cred.getIdToken().then((token) => {
                validateUserJWTToken(token).then((data) => {
                  dispatch(setUserDetails(data));
                });
                navigate("/", { replace: true });
              });
            }
          });
        })
      }else{
        dispatch(alertWarning("Password doesn't match"));
      }
    }
  };

  //

  const signInWithEmailAndPass = async () => {
    if (userEmail !== "" && password !== "") {
      await signInWithEmailAndPassword(firebaseAuth, userEmail, password).then(userCred => {
        firebaseAuth.onAuthStateChanged((cred) => {
          if (cred) {
            cred.getIdToken().then((token) => {
              validateUserJWTToken(token).then((data) => {
                dispatch(setUserDetails(data));
              });
              navigate("/", { replace: true });
            });
          }
        });
      })
    }else{
      dispatch(alertWarning("Password doesn't match"));
    }
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/*Background image */}
      <img
        src={LogingBg}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt=""
      />

      {/*Content box */}
      <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-400 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
        {/* Top Logo section */}
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={Logo_01} className="w-16" alt="" />
          <p className="text-headingColor font-semibold text-2xl">
            ACTIVE PLATE
          </p>
        </div>

        {/* Welcome Text*/}
        <p className="text-2xl font-semibold text-primary">Welcome Back</p>
        <p className="text-xl text-primary -mt-6">
          {isSignUp ? "Sign Up" : "Sign In"} with following
        </p>

        {/* Input section */}
        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeHolder={"Email Here"}
            icon={<FaEnvelope className="text-xl text-darkOverlay" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />

          <LoginInput
            placeHolder={"Password Here"}
            icon={<FaLock className="text-xl text-darkOverlay" />}
            inputState={password}
            inputStateFunc={setpassword}
            type="password"
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput
              placeHolder={"Confirm Password Here"}
              icon={<FaLock className="text-xl text-darkOverlay" />}
              inputState={confirm_password}
              inputStateFunc={setconfirm_password}
              type="password"
              isSignUp={isSignUp}
            />
          )}

          {!isSignUp ? (
            <p className="text-primary ">
              Doesn't have an account:{" "}
              <motion.button
                {...buttonClick}
                className=" text-red-600 underline cursor-pointer bg-transparent"
                onClick={() => setisSignUp(true)}
              >
                Create one!
              </motion.button>
            </p>
          ) : (
            <p className="text-primary">
              Already have an account:{" "}
              <motion.button
                {...buttonClick}
                className=" text-red-600 underline cursor-pointer bg-transparent"
                onClick={() => setisSignUp(false)}
              >
                Sign-in here
              </motion.button>
            </p>
          )}

          {/* Button Section*/}
          {isSignUp ? (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-red-600 curser-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150"
              onClick={signUpWithEmailPass}
            >
              Sign Up
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              onClick={signInWithEmailAndPass}
              className="w-full px-4 py-2 rounded-md bg-red-600 curser-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150"
            >
              Sign In
            </motion.button>
          )}
        </div>

        <div className="flex items-center justify-between gap-16">
          <div className="w-24  h-[1px] rounded-md bg-white"></div>
          <p className=" text-white"> or </p>
          <div className="w-24  h-[1px] rounded-md bg-white"></div>
        </div>

        <motion.div
          {...buttonClick}
          className="flex items-center justify-center px-20 py-2 bg-primary backdrop-blur-md curser-pointer rounded-3xl gap-4"
          onClick={loginWithGoogle}
        >
          <FcGoogle className=" text-3xl" />
          <p className=" capitalize text-base text-black">Signin with Google</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
