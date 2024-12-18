import React from "react";
import { Profile } from "./../component/Pictures/Profile";
import { profileContents } from "../constants/profileContents";

export const ProfilePage = () => {
  return (
    <div className='w-full h-lvh bg-zinc-400 py-14 overflow-auto'>
      <div className='w-w1360 h-full bg-gray-950 mx-auto p-4 pb-40 grid grid-rows-2 grid-cols-2 gap-4'>
        {profileContents.map((profileContent) => (
          <div key={profileContent.id} className='w-full bg-white'>
            <Profile
              title={profileContent.title}
              content={profileContent.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
