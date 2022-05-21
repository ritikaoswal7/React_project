import React, { useState } from "react";
import angle from "../Static/bracket.png";
import arrow from "../Static/anglebracket.png";
//import OTP from "./OTP";
//import "./style.css";
import SplashScreen from "./SplashScreen";
import { Link } from "react-router-dom";
import { Redirect, useNavigate } from "react-router-dom";
import { setAuthenticationDefault } from "../Authentication";

const RegisterForm = () => {
  const [mobile, setMobile] = useState("");
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState("");
  const checkStatus = (e) => {
    setMobile(e.target.value);
    if (mobile.length == 9) {
      setError("");
      setDisable(false);
    } else {
      setError("Invalid Number");
    }
  };
  const navigate = useNavigate();
  const postData = async (e) => {
    e.preventDefault();
    const res = await fetch("/add_number/" + mobile, {
      method: "POST",
      
      
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      console.log("Data cannot be paapplication/jsonssed");
    } else {
      setAuthenticationDefault();
      navigate("/OTP", { state: { params: mobile } });
    }
  };

  return (
    <div>
      <div>
        <Link to="/">
          <img className="h-5 w-5 ml-3 mt-7" src={angle} />
        </Link>
      </div>
      <div>
        <p className=" flex flex-start text-xl text-black truncate ml-4 mt-4">
          Enter mobile number{" "}
        </p>
      </div>
      <div>
        <p className=" flex flex-start text-sm text-gray-400 truncate ml-4 mt-1">
          We'll send an OTP for verification{" "}
        </p>
      </div>
      <div id="main-registration-container">
        <div id="register">
          <form method="POST">
            <input
              className="border-2 flex justify-center ml-6 rounded-lg mt-5 border-zinc-400 text-gray-400 h-12 w-80 "
              type="text"
              name="mobileno"
              value={mobile}
              onChange={checkStatus}
            />
            <div className="text-rose-400 flex flex-start ml-7">{error}</div>
            <div className="h-96"></div>
            <div className="flex item-start flex-row items-center">
              <p className="text-sm mt-2 ml-32 truncate text-slate-500">
                LOGIN WITH EMAIL
              </p>
              <img className="mt-2 ml-1 h-5 w-5" src={arrow} />
            </div>

            <button
              className=" ml-10 mr-10 flex justify-center mt-5 pl-28 pr-28 pt-2 pb-2 rounded-md bg-zinc-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white button"
              type="submit"
              value="Register"
              disabled={disable}
              onClick={postData}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
