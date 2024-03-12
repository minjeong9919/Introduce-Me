import React from "react";

export const Project = ({ isModalVisible, setIsModalVisible }) => {
  return (
    <div
      className="w-full h-fit bg-gray-950 mx-auto p-8 pb-10 rounded-lg relative shadow-2xl shadow-black transition ease duration-500 hover:scale-105"
      onClick={() => setIsModalVisible(!isModalVisible)}
    >
      <div className="bg-amber-900 w-8 h-20 absolute top-[-30px] inset-x-2/4 rounded-xl"></div>
      <div>
        <div className="w-full h-p500 bg-white rounded-lg mb-10">
          <projectContents />
        </div>
        <div className="text-white text-3xl p-4 text-center">프로젝트 설명</div>
      </div>
    </div>
  );
};
