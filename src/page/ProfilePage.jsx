import React from "react";
import { Profile } from "./../component/profile/Profile";
import { profileContents } from "../constants/profileContents";

export const ProfilePage = () => {
  const flexItems = Array.from({ length: 30 }, (val, idx) => idx);

  return (
    <div className="w-full h-lvh bg-zinc-400 py-14 overflow-auto">
      <p className="text-center text-7xl my-8 mb-32">Profile</p>
      <div className="w-full h-fit bg-gray-950 px-10 py-10">
        <div className="flex flex-row gap-8">
          {flexItems.map((item) => (
            <div className="w-20 h-8 bg-white" key={item}></div>
          ))}
        </div>
        <div className="flex flex-row gap-12 my-20">
          {profileContents.map((profileContent) => (
            <div key={profileContent.id} className="w-full bg-white">
              <Profile
                title={profileContent.title}
                content={profileContent.content}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-8 ">
          {flexItems.map((item) => (
            <div className="w-20 h-8 bg-white" key={item}></div>
          ))}
        </div>
      </div>
    </div>
  );
};
