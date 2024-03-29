import React from "react";

export const Profile = ({ title, content }) => {
  return (
    <div className="h-full bg-gray-200 hover:bg-white">
      <div className="w-auto h-1/5 border p-4 rounded-2xl flex items-center ">
        <h1 className="text-5xl font-black">{title}</h1>
      </div>
      <div className="w-auto h-4/5 border p-4 text-4xl">{content}</div>
    </div>
  );
};
