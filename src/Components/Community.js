import React from "react";
import com from "../Static/animated.png";
import photo from "../Static/bluephoto.png";
import calender from "../Static/bluecalender.png";
import home from "../Static/home.jpeg";
import self_study from "../Static/self_study.png";
import community from "../Static/community.png";
import me from "../Static/Me.jpeg";
import { Link } from "react-router-dom";




const Community = () => {
  return(
      <div>
  <div>
      <img className="h-50 w-96" src={com} />
  </div>
  <div>
     <p className="text-3xl mt-4 ml-3 truncate text-medium">Educator</p>
     <p className="text-3xl ml-3 truncate text-medium">community</p>
     <p className="text-sm mt-2  ml-3 truncate text-gray-400">Exclusive space where educators share exam tricks,</p>
     <p className="text-sm  ml-3 truncate text-gray-400">additional learning material & more</p>
  </div>
  <div className="flex flex-row mt-12 ml-3">
      <div><img className="h-6 w-6" src={photo}/></div>
      <div className="ml-3 "><p className="text-black truncate">Connect with our top educators</p></div>

  </div>
  <div className="flex flex-row ml-3">
  <div></div>
      <div className="ml-10 mt-1"><p className="text-black truncate">Exam stratergies,tips & tricks</p></div>

  </div>
  <div className="flex flex-row  ml-3">
      <div><img className="h-6 w-7 mt-1 rounded-full" src={calender}/></div>
      <div className="ml-3 mt-1"><p className="text-black truncate">Additional learning material & more</p></div>

  </div>
  <div><button
              className=" flex justify-center  ml-10 mr-3  mt-24 pl-28 pr-28 pt-2 pb-2 rounded-md bg-black text-white text-center text-sm focus:outline-none focus:ring-2 focus:ring-white ">Get started</button></div>
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
export default Community;
