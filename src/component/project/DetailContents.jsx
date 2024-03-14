import React from "react";
import { StackBadge } from "./StackBadge";

export const DetailContents = ({ contents }) => {
  const titles = {
    "💡 Introduce": contents.introduce,
    "💠 Functions": contents.introduce,
    "💻 Stack & Tools": contents.introduce,
    "📸 Results": contents.introduce,
    "❗Errors": contents.introduce,
    "✍️ What I learned": contents.introduce,
  };

  return (
    <div className="p-8">
      <p className="text-lg mb-1">📆 Period: </p>
      <div className="text-lg mb-1 flex felx-row gap-2">
        💻 Tech Used: <StackBadge />
      </div>
      <p className="text-lg mb-8">🙋‍♀️ Position: </p>

      {Object.entries(titles).map(([key, value]) => (
        <div key={key}>
          <p className="text-3xl mb-1">{key}</p>
          <p className="text-xl mb-5 rounded-xl p-2 borderfont-thin mb-8">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
};
