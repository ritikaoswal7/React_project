import React, { useState } from "react";
import angle from "../Static/bracket.png";
import arrow from "../Static/anglebracket.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import demo from "./demo.js";
import OtpInput from "react-otp-input";
import { setAuthentication } from "../Authentication";

const OTP = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  let num = location.state.params;
  const [otp, setotp] = useState("");
  const [error, setError] = useState("");
  const handleChange = (otp) => {
    setotp(otp);
  };
  const change_verification = async () => {
    if (otp == "9999") {
      setError("");
      const res = await fetch("/verification/" + num, {
        method: "POST",
      });
      const data = await res.json();
      if (data.status === 422 || !data) {
        console.log("Data cannot be passed");
      } else {
        setAuthentication();
        navigate("/Home")
      }
    } else {
      setError("Incorrect OTP please verify it");
    }
  };

  return (
    <div>
      <div>
        <Link to="/demo">
          <img className="h-5 w-5 ml-3 mt-7" src={angle} />
        </Link>
      </div>
      <div>
        <p className=" flex flex-start text-xl text-black truncate ml-4 mt-4">
          Verify OTP
        </p>
      </div>
      <div>
        <p className=" flex flex-start text-sm text-gray-400 truncate ml-4 mt-1">
          We've sent it on {num}
        </p>
      </div>
      <div>
        <OtpInput
          className="border-2 flex justify-center ml-8 rounded-lg mt-5 border-zinc-400 text-gray-400 h-12 w-12"
          value={otp}
          onChange={handleChange}
          numInputs={4}
        />
      </div>
      <div>
        <p className=" flex flex-start text-sm text-gray-400 truncate ml-4 mt-3">
          Resend OTP in 55s
        </p>
      </div>
      <div className="h-80">{error}</div>
      <div>
        <p className=" flex flex-start text-sm text-gray-400 truncate ml-4 mt-3">
          Having trouble? Write to us at help@unacademy.com
        </p>
      </div>
      <div>
        <button
          className=" flex justify-center  ml-14 mr-3  mt-7 pl-28 pr-28 pt-2 pb-2 rounded-md bg-zinc-600 text-white text-center text-sm focus:outline-none focus:ring-2 focus:ring-white "
          onClick={change_verification}
        >
          Verify
        </button>
      </div>
    </div>
  );
};
export default OTP;
