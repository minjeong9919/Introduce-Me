import React from "react";

export const ProjectPage = () => {
  return (
    <div className="w-full h-lvh bg-zinc-400 overflow-auto">
      <div className="w-4/5 h-fit bg-gray-950 mx-auto p-8 pb-24">
        <p className="text-white text-center text-5xl my-8 mb-12">
          My Projects
        </p>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <div className="h-p800 bg-white">프로젝트 이미지</div>
            <div className="text-white text-3xl p-4">프로젝트 설명</div>
          </div>
          <div>
            <div className="h-p800 bg-white">프로젝트 이미지</div>
            <div className="text-white text-3xl p-4">프로젝트 설명</div>
          </div>
          <div>
            <div className="h-p800 bg-white">프로젝트 이미지</div>
            <div className="text-white text-3xl p-4">프로젝트 설명</div>
          </div>
          <div>
            <div className="h-p800 bg-white">프로젝트 이미지</div>
            <div className="text-white text-3xl p-4">프로젝트 설명</div>
          </div>
          <div>
            <div className="h-p800 bg-white">프로젝트 이미지</div>
            <div className="text-white text-3xl p-4">프로젝트 설명</div>
          </div>
        </div>
      </div>
    </div>
  );
};
