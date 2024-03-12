import React from "react";

export const Project = () => {
  return (
    <div className="w-full h-fit bg-gray-950 mx-auto p-8 pb-10 rounded-lg relative">
      <div className="bg-amber-900 w-8 h-20 absolute top-[-30px] inset-x-2/4"></div>
      <div>
        <div className="w-full h-p500 bg-white rounded-lg mb-10">
          프로젝트 이미지
        </div>
        <div className="text-white text-3xl p-4 text-center">프로젝트 설명</div>
      </div>
    </div>
  );
};
