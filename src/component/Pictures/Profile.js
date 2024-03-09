import React from "react";

export const Profile = ({ title, content }) => {
  return (
    <>
      <div className="w-auto h-1/3 border p-4 rounded-2xl flex items-center">
        <h1 className="text-5xl font-black">{title}</h1>
      </div>
      <div className="w-auto h-2/3 border p-4 text-3xl">{content}</div>
    </>
  );
};
