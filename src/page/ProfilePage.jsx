import React from "react";
import { Profile } from "./../component/profile/Profile";
import { profileContents } from "../constants/profileContents";

export const ProfilePage = () => {
  const flexItems = Array.from({ length: 20 }, (val, idx) => idx);

  return (
    <div className="w-full h-lvh bg-zinc-200 overflow-auto">
      <p className="text-center text-5xl mt-20 mb-12">Profile</p>
      <div className="w-full h-fit bg-gray-950 px-16 py-4">
        <div className="flex flex-row gap-8">
          {flexItems.map((item) => (
            <div className="w-20 h-4 bg-white" key={item}></div>
          ))}
        </div>
        <div className="flex flex-row gap-12 my-16">
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
            <div className="w-20 h-4 bg-white" key={item}></div>
          ))}
        </div>
      </div>
    </div>
  );
};
