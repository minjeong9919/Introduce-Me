import React, { useState } from "react";
import { Project } from "./../component/project/Project";
import { DetailProject } from "./../component/project/DetailProject";
import { projectContents } from "./../constants/projectContents";

export const ProjectPage = () => {
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [clickedProject, setClickedProject] = useState(null);
  const [clickedProjectContents, setClickedProjectContents] = useState({});

  return (
    <>
      <DetailProject
        isModalVisible={isDetailModalVisible}
        setIsModalVisible={setIsDetailModalVisible}
        clickedProjectId={clickedProject}
        contents={clickedProjectContents}
      />
      <div className="w-full h-lvh bg-zinc-200 overflow-auto py-20">
        <p className="text-center text-5xl mb-12">Project</p>
        <div className="w-4/5 grid grid-cols-3 gap-20 mx-auto">
          {projectContents.map((content) => (
            <Project
              key={content.id}
              id={content.id}
              contents={content}
              isModalVisible={isDetailModalVisible}
              setIsModalVisible={setIsDetailModalVisible}
              setClickedProject={setClickedProject}
              setClickedProjectContents={setClickedProjectContents}
            />
          ))}
        </div>
      </div>
    </>
  );
};
