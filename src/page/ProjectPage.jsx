import React, { useState } from "react";
import { Project } from "./../component/project/Project";
import { DetailProject } from "./../component/project/DetailProject";

export const ProjectPage = () => {
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);

  console.log(isDetailModalVisible);
  return (
    <>
      <DetailProject
        isModalVisible={isDetailModalVisible}
        setIsModalVisible={setIsDetailModalVisible}
      />
      <div className="w-full h-lvh bg-zinc-200 overflow-auto px-20 py-20">
        <p className="text-center text-7xl my-8 mb-20">Projects</p>
        <div className="w-4/5 grid grid-cols-3 gap-20 mx-auto">
          <Project
            isModalVisible={isDetailModalVisible}
            setIsModalVisible={setIsDetailModalVisible}
          />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </>
  );
};
