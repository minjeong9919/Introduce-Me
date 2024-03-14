import React from "react";
import { DetailContents } from "./DetailContents";

export const DetailProject = ({
  isModalVisible,
  setIsModalVisible,
  clickedProjectId,
  contents,
}) => {
  return (
    <div
      className={`w-screen h-screen flex absolute items-center justify-center display- ${
        isModalVisible ? "block" : "hidden"
      }`}
    >
      <div
        className={`w-screen h-screen absolute bg-gray-500 z-20 opacity-50`}
        onClick={() => setIsModalVisible(false)}
      ></div>
      <div className="w-1/2 h-5/6 bg-gray-950 absolute z-30 rounded-3xl overflow-y-hidden p-4">
        <p className="text-white text-4xl text-center my-4">{contents.name}</p>
        <div className="w-full h-per90 bg-white rounded-3xl overflow-y-scroll">
          <DetailContents contents={contents} />
        </div>
      </div>
    </div>
  );
};
