import React from "react";
import AboutMe from "./AboutMe";
import MyProfilePic from "./MyProfilePic";

//AboutMe and Pic side-by-side beyond breakpt 640 sm
function ProfileInfo() {
  return (
    <div className=" sm:flex sm:justify-between sm:items-center mx-auto">
      <div className='sm:w-2/3'>
        <AboutMe />
      </div>

      <div className="sm:w-1/3">
        <MyProfilePic />
      </div>
    </div>
  );
}

export default ProfileInfo;
