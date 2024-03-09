import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CameraIcon = () => {
  const navigation = useNavigate();

  const menuButtons = [
    { id: 1, name: "Profile", route: "profile" },
    { id: 2, name: "Career", route: "crofile" },
    { id: 3, name: "Project", route: "project" },
    { id: 4, name: "Skill", route: "skill" },
  ];

  const Button = ({ buttonName, route, size = "small" }) => {
    const [isMenuButtonHover, setIsMenuButtonHover] = useState(false);
    const defaultWidth = size === "big" ? "w-40" : "w-20";
    const defaultHeight = size === "big" ? "h-40" : "h-20";

    return (
      <button
        className={`${defaultHeight} ${
          isMenuButtonHover ? "hover:w-full" : defaultWidth
        } rounded-full bg-gray-300 p-4 ${size === "big" && "mt-8"}`}
        onMouseEnter={() => setIsMenuButtonHover(true)}
        onMouseLeave={() => setIsMenuButtonHover(false)}
        onClick={() => navigation(`/${route}`)}
      >
        {size === "big" ? (
          <div className="h-full w-full rounded-full bg-gray-950 flex items-center justify-center">
            <span className="text-3xl font-black text-white">
              {isMenuButtonHover && buttonName}
            </span>
          </div>
        ) : (
          <span className="text-3xl font-black">
            {isMenuButtonHover && buttonName}
          </span>
        )}
      </button>
    );
  };

  return (
    <>
      <div className="relative h-p160 w-w400 rounded-2xl bg-gray-950 ml-xl px-24 py-12">
        <div className="relative  h-p80 w-full z-40 rounded-2xl bg-gray-300"></div>
        <div className="absolute h-p800 w-w1360 rounded-100px bg-gray-950 top-20 left-[-10rem] p-20 flex flex-row">
          <div className="h-full w-full rounded-3xl bg-gray-300 mr-12"></div>
          <div className="h-full w-3/12 rounded-3xl flex flex-col gap-8">
            {menuButtons.map((button) => (
              <Button
                key={button.id}
                buttonName={button.name}
                route={button.route}
              />
            ))}
            <Button buttonName="Capture Me!" size="big" />
          </div>
        </div>
      </div>
    </>
  );
};
