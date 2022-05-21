import React from "react";
import search from "../Static/search.png";
import home from "../Static/home.jpeg";
import self_study from "../Static/self_study.png";
import community from "../Static/community.png";
import me from "../Static/Me.jpeg";
import { Link } from "react-router-dom";
import man from "../Static/man.png";
import rounded from "../Static/rounded.png";
import A from "../Static/Aplus.png";
import splash from "../Static/splash.png";
import syllabus from "../Static/syllabus.jpeg";
import angle from "../Static/anglebracket.png";
import studymsg from "../Static/studymsg.png";
import grey from "../Static/grey.png";
import orange from "../Static/orange.png";
import mic from "../Static/mic.jpeg";
import combat from "../Static/combat.jpeg";

const SelfStudy = () => {
  return (
    <div>
      <div className="relative h-20">
        <img className="absolute flex mt-3 ml-9 h-5 w-5" src={search} />
        <input
          className="  border-2 flex justify-center ml-6 rounded-lg mt-5 border-zinc-400 text-gray-400 h-12 w-80 "
          type="text"
          name="search"
          value="          Search for courses and educators"
        />
      </div>
      <div className="h-3 w-full bg-slate-200"></div>
      <div className=" scroll-smooth flex flex-row">
        <div className="w-60">
          <p className="ml-3 mt-3 text-medium text-lg text-black ">
            Ace your preparation
          </p>
          <p className="text-xs mt-2 text-gray-400 ml-3">
            Learn with live classes from top educators,get personalised guidance
            through 1:1 live mentorship and a lot more!
          </p>

          <button className=" flex justify-center  ml-3 mr-3  mt-3  pl-5 pr-5 pt-2 pb-2 rounded-md bg-green-600 text-white text-center text-sm focus:outline-none focus:ring-2 focus:ring-white ">
            Get subscription
          </button>
          <p className="text-xs mt-1 text-gray-400 ml-3">
            Starts from Rs.1,366/mo
          </p>
        </div>
        <div>
          <img className="ml-3" src={man} />
        </div>
      </div>
      <div className="h-3 w-full bg-slate-200"></div>
      <div className="box-border flex flex-row ml-7 rounded-lg mt-3 bg-slate-200 h-20 w-80 p-4 border-4 ...">
        <div>
          <p className="mt-2">Courses & batches</p>
        </div>
        <div>
          <img className="h-12 w-12 rounded-full mb-4 ml-20" src={rounded} />
        </div>
      </div>
      <div className=" scroll-smooth flex flex-row justify-center mt-2 space-x-4">
        <div className="box-border rounded-lg h-20 w-24 bg-slate-200 border-4  flex flex-col  ">
          <div className="flex justify-center">
            <img className="h-7 w-7 mt-2 rounded-full" src={A} />
          </div>
          <div className="flex justify-center mt-2 ">
            <p>Tests</p>
          </div>
        </div>
        <div className="box-border rounded-lg h-20 w-24 bg-slate-200 border-4 flex flex-col">
          <div className="flex justify-center">
            <img className="h-7 w-7 mt-2 rounded-full" src={splash} />
          </div>
          <div className="flex justify-center mt-2 ">
            <p>Practise</p>
          </div>
        </div>
        <div className="box-border rounded-lg h-20 w-24 bg-slate-200 border-4 flex flex-col">
          <div className="flex justify-center">
            <img className="h-7 w-7 mt-2 rounded-full" src={syllabus} />
          </div>
          <div className="flex justify-center mt-2 ">
            <p>syllabus</p>
          </div>
        </div>
      </div>
      <div className="scroll-smooth mt-4 h-60 flex justify-between flex-wrap ">
        <div className="  flex flex-col space-y-4">
          <div className="  flex item-start flex-row">
            <img className="mt-1 ml-2 rounded-full h-6 w-6" src={studymsg} />{" "}
            <p className="text-sm mt-2 ml-3 truncate text-slate-500">
              Doubts & Solutions
            </p>
          </div>
          <div className="flex item-start flex-row">
            <img className=" rounded-full ml-2 h-6 w-6" src={grey} />{" "}
            <p className="text-sm truncate ml-3 text-slate-500">Other courses</p>
          </div>
          <div className="flex item-start flex-row">
            <img className=" rounded-full ml-2 h-6 w-6" src={orange} />
            <p className="text-sm truncate ml-3 text-slate-500">
              Free live courses
            </p>
          </div>
          <div className="flex item-start flex-row">
            <img className=" rounded-full ml-2 h-6 w-6" src={mic} />
            <p className="text-sm truncate ml-3 text-slate-500">
              Open house sessions
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col space-y-4">
          <img className=" mt-2 h-5 w-5" src={angle} />
          <img className=" h-5 w-5" src={angle} />
          <img className="  h-5 w-5" src={angle} />
          <img className="  mt-2 h-5 w-5" src={angle} />
        </div>
      </div>
      <div className="scroll-smooth h-3 w-full bg-slate-200"></div>
      <div className="scroll-smooth h-96 flex flex-col">
        <div>
          <img className=" ml-2 mt-2 h-16 w-20" src={combat} />
          <p className="ml-5 mt-1">CAT</p>
          <p className="ml-5 mt-1 text-sm text-gray-400">
            Next combat on 6 Mar 2022,12:00pm
          </p>
        </div>
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
            <img className="rounded h-9 w-10 " src={self_study} />

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
};
export default SelfStudy;
