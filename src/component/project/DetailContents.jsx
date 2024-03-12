import React from "react";

export const DetailContents = () => {
  const titles = [
    "💡 Introduce",
    "💠 Functions",
    "💻 Stack & Tools",
    "📸 Results",
    "❗Errors",
    "✍️ What I learned",
  ];

  const content = `
    이곳은 추억의 롤링 페이퍼를 만들고 즐길 수 있는 특별한 웹사이트입니다. 여기서는 원하는 유저에게 특별한 메시지와 함께 멋진 배경 이미지를 선택하여 자신만의 롤링 페이퍼를 작성할 수 있습니다. 뿐만 아니라, 
    선택한 유저에게 이모티콘을 전송하여 따뜻한 감정을 공유할 수도 있습니다. 더불어 이모지를 활용하여 작성된 롤링 페이퍼들은 인기 순으로 손쉽게 확인할 수 있습니다. 
    다양한 이모티콘과 멋진 배경 이미지들이 모여 만들어지는 이 공간에서, 감성과 재미를 함께 누릴 수 있습니다.
  `;
  return (
    <p className="p-8">
      <h2 className="text-3xl mb-5">📆 Period: </h2>
      <h2 className="text-3xl mb-5">💻 Tech Used: </h2>
      <h2 className="text-3xl mb-12">🙋‍♀️ Position: </h2>

      {titles.map((title) => (
        <>
          <h1 className="text-5xl mb-5">{title}</h1>
          <p className="text-3xl mb-5 rounded-xl p-2 borderfont-thin mb-16">
            {content}
          </p>
        </>
      ))}
    </p>
  );
};
