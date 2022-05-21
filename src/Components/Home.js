import React from "react";
import logo from "../Static/logo.jpeg";
import search from "../Static/search.png";
import home from "../Static/home.jpeg";
import self_study from "../Static/self_study.png";
import community from "../Static/community.png";
import me from "../Static/Me.jpeg";
import un from "../Static/unacademy.jpeg";
import v1 from "../Static/1.mp4";
import v2 from "../Static/2.mp4";
import msg from "../Static/message.jpeg";
import A from "../Static/A+.jpeg";
import tick from "../Static/tick.png";
import angle from "../Static/anglebracket.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../Static/App.css";
import { Link } from "react-router-dom";
//import SelfStudy from ".SelfStudy";
//import Community from "../Static/Community";

<link rel="stylesheet" href="/css/video-react.css" />;

function Home() {
  return (
    <div className="h-screen bg-slate-200 ">
      <header className="bg-white h-14  inset-x-0 top-0 sticky">
        <div className="flex flex-row items-center justify-between flex-wrap space-x-0.5">
          <div>
            <img className="rounded h-9 w-10 ml-7 mt-3" src={logo} />
          </div>
          <div>
            <p className="text-lg text-black mt-3">CAT & Other MBA Entranc...</p>
          </div>
          <div>
            <img className="rounded h-7 w-7 mr-7 mt-3" src={search} />
          </div>
        </div>
      </header>

      <div className="scroll-smooth h-96 bg-white mt-2 w-full flex items-center flex-col ">
        <div>
          <img
            className="w-48 h-48 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            width="500"
            height="1000"
            src={un}
          />
        </div>
        <div>
          <p className="text-lg text-black mt-3">Take our scholarship test today</p>
        </div>
        <div>
          <p className="text-sm text-black mt-3">
            The scholarship applies directly to your subscription
          </p>
        </div>
        <div>
          <button
            type="button"
            className="-mr-1 flex mt-3 pl-28 pr-28 pt-2 pb-2 rounded-md bg-black text-white text-sm focus:outline-none focus:ring-2 focus:ring-white "
          >
            Start the test
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-400  mt-3">
            Attempt 15 quick questions in 15 min
          </p>
        </div>
      </div>

      <div className="scroll-smooth h-7/6 bg-white mt-2 w-full flex flex-col ">
        <div>
          <p className="text-lg text-black ml-4 mt-4">Hi,Ritika!</p>
        </div>
        <div>
          <p className="text-sm text-gray-400 ml-4">Let's start learning</p>
        </div>
        <div>
          <Carousel autoPlay="True" interval={1500}>
            <div>
              <video className="mt-2" src={v1} />
              <p class="text-sm mt-1 text-cyan-500 ">
                {" "}
                STRATERGY & COLLEGE OVERVIEW
              </p>
              <p className="text-lg mt-1 text-black ">
                HOW TO PLAN YOUR CAT PREP? -PART 2
              </p>
              <p className="text-sm text-gray-400 ">Karishma Vanvani</p>
            </div>

            <div>
              <video className="mt-2" src={v2} />
              <p className="text-sm mt-1 text-cyan-500 ">
                {" "}
                STRATERGY & COLLEGE OVERVIEW
              </p>
              <p className="text-lg mt-1 text-black ">
                HOW TO PLAN YOUR CAT PREP? -PART 2
              </p>
              <p className="text-sm text-gray-400 ">Karishma Vanvani</p>
            </div>
          </Carousel>
        </div>
        <div>
          <button
            type="button"
            className=" flex flex-center ml-5  pl-28 pr-28 pt-2 pb-2 rounded-md bg-black text-sm text-white focus:outline-none focus:ring-2 focus:ring-white "
          >
            See all free classes
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-400 ml-5 mt-3">You could also</p>
        </div>

        <div className="flex items-center justify-between flex-wrap ">
          <div className="flex flex-col space-y-4">
            <div className="flex item-start flex-row">
              <img className="mt-1 h-7 w-9" src={msg} />{" "}
              <p className="text-sm mt-2  truncate text-slate-500">Ask a doubt</p>
            </div>
            <div className="flex item-start flex-row">
              <img className=" rounded ml-2 h-6 w-6" src={tick} />{" "}
              <p className="text-sm truncate ml-1 text-slate-500">
                Take a quick quiz
              </p>
            </div>
            <div className="flex item-start flex-row">
              <img className=" rounded ml-2 h-6 w-6" src={A} />
              <p className="text-sm truncate ml-1 text-slate-500">
                Try a mock test
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col space-y-4">
            <img className=" h-5 w-5" src={angle} />
            <img className=" h-5 w-5" src={angle} />
            <img className="  h-5 w-5" src={angle} />
          </div>
        </div>
      </div>
      <div className="scroll-smooth h-2 bg-slate-200 w-full"></div>

      <div className="scroll-smooth h-48 bg-white w-full flex flex-col "></div>

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
            <img className="rounded h-9 w-10  " src={home} />

            <p className="text-sm">Home</p>
          </div>
          <div className="flex-col flex items-center">
            <Link to="/SelfStudy">
              <img className="rounded h-9 w-10 " src={self_study} />
            </Link>
            <p className="text-sm">Self Study</p>
          </div>
          <div className="flex-col flex items-center">
            <Link to="/Community">
            <img className="rounded h-9 w-10 " src={community} />
            </Link>
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
}
export default Home;