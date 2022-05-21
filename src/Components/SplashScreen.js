import React from "react";
import ss from "../Static/SplashScreen.jpeg";
import { Link } from "react-router-dom";
import { setAuthenticationDefault } from "../Authentication";

const myStyle = {
  backgroundImage: `url(${ss})`,
  height: "100vh",
  fontSize: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function SplashScreen() {
  return (
    <div style={myStyle}>
      <div className="h-96"></div>
      <div className="flex flex-col">
        <div>
          <p className="text-2xl font-bold mt-20 ml-4 flex flex-start  text-white truncate ">
            Start learning on
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold mt-1 ml-4 flex flex-start  text-white truncate ">
            Unacademy
          </p>
        </div>
        <div>
          <p className="text-sm  mt-1 ml-4 flex flex-start  text-white truncate ">
            India's largest learning platform
          </p>
        </div>
      </div>
      <div>
        <Link
          to="/demo"
          type="button"
          className=" flex justify-center  ml-3 mr-3  mt-9 pl-28 pr-28 pt-2 pb-2 rounded-md bg-green-600 text-white text-center text-sm focus:outline-none focus:ring-2 focus:ring-white "
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

export default SplashScreen;
