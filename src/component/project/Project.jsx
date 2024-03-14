import React from "react";

export const Project = ({
  id,
  contents,
  isModalVisible,
  setIsModalVisible,
}) => {
  const onClickDivHandle = () => {
    setIsModalVisible(!isModalVisible);
    console.log(contents);
  };
  return (
    <div
      className="w-full h-fit bg-gray-950 mx-auto pb-10 rounded-lg relative shadow-2xl shadow-black transition ease duration-500 hover:scale-105"
      onClick={() => onClickDivHandle()}
    >
      <div className="w-full flex justify-center absolute top-[-30px]">
        <div className="bg-amber-900 w-8 h-20 rounded-xl"></div>
      </div>
      <div>
        <div className="w-auto h-p300 bg-white rounded-lg mb-10 m-4">
          {/* <img src={imageArr} className="w-full h-full" /> */}
        </div>
        <div className="text-white text-3xl text-center">프로젝트명</div>
      </div>
    </div>
  );
};
