import React from "react";

export const Profile = ({ title, content }) => {
  return (
    <div className="h-full bg-gray-300 transition ease duration-500 hover:bg-white z-10">
      <div className="w-auto h-1/5 border p-4 rounded-2xl flex items-center ">
        <h1 className="text-2xl font-black">{title}</h1>
      </div>
      <div className="w-auto h-4/5 border p-4 text-xl">{content}</div>
    </div>
  );
};
