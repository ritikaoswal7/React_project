import React from "react";
import home from "../Static/home.jpeg";
import self_study from "../Static/self_study.png";
import community from "../Static/community.png";
import me from "../Static/Me.jpeg";
import { Link } from "react-router-dom";
import logo from "../Static/logo.jpeg";

const Me = () => {
  return (
    <div>
      <header className="bg-white h-14  inset-x-0 top-0 sticky">
        <div className="flex flex-row  flex-wrap ">
          <div>
            <img className="rounded h-9 w-10 ml-3 mt-3" src={logo} />
          </div>
          <div>
            <p className="text-lg text-black ml-12 mt-4">Complete your profile </p>
          </div>
        </div>
      </header>
      <div className="h-3 w-full bg-slate-200"></div>
      <div className="scroll-smooth">
        <form>
          <p className=" flex flex-start text-sm text-gray-400 truncate ml-6 mt-20">
            Enter First Name
          </p>
          <input
            className="border-2 flex justify-center ml-6 rounded-lg mt-1 border-zinc-400 text-gray-400 h-12 w-80 "
            type="text"
            name="firstname"
          />
          <p className=" flex flex-start text-sm text-gray-400 truncate ml-6 mt-5">
            Enter Last Name
          </p>
          <input
            className="border-2 flex justify-center ml-6 rounded-lg mt-1 border-zinc-400 text-gray-400 h-12 w-80 "
            type="text"
            name="lastname"
          />
          <p className=" flex flex-start text-sm text-gray-400 truncate ml-6 mt-5">
            Enter E-mail
          </p>
          <input
            className="border-2 flex justify-center ml-6 rounded-lg mt-1 border-zinc-400 text-gray-400 h-12 w-80 "
            type="email"
            name="email"
          />
          <button
              className=" ml-12 mr-10 flex justify-center mt-32 pl-28 pr-28 pt-2 pb-2 rounded-md bg-zinc-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white button"
              type="submit"
              value="Register"
              
            >
              Submit
            </button>
        </form>
      </div>
      <footer
        className="bg-white
             h-14
             fixed
             inset-x-0
             bottom-0
             "
      >
        <div className="flex items-center justify-between flex-wrap ">
          <div className="flex-col flex items-center ml-2">
            <Link to="/Home">
              <img className="rounded h-9 w-10  " src={home} />
            </Link>

            <p className="text-sm">Home</p>
          </div>
          <div className="flex-col flex items-center">
            <Link to="/SelfStudy">
              <img className="rounded h-9 w-10 " src={self_study} />
            </Link>
            <p className="text-sm">Self Study</p>
          </div>
          <div className="flex-col flex items-center">
            <img className="rounded h-9 w-10 " src={community} />

            <p className="text-sm">Community</p>
          </div>
          <div className="flex-col flex items-center mr-2">
            <Link to="/Me">
              <img className="rounded h-9 w-10 " src={me} />
            </Link>
            <p className="text-sm ">Me</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Me;
