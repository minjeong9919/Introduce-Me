import React from "react";
import { Project } from "./../component/Pictures/Project";

export const ProjectPage = () => {
  return (
    <div className="w-full h-lvh bg-zinc-400 overflow-auto px-20 py-20">
      <p className="text-center text-7xl my-8 mb-20">Projects</p>
      <div className="w-4/5 grid grid-cols-3 gap-20 mx-auto">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};
