import { useEffect, useState } from "react";
import { CameraIcon } from "./../component/home/CameraIcon";
// import Typewriter from "typewriter-effect";

const Home = () => {
  const IntroduceText = "안녕하세요. 프론트엔드 개발자 김민정입니다.";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + IntroduceText[count]);
      setCount(count + 1);
    }, 100);
    if (count === IntroduceText.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="w-full h-lvh bg-zinc-400 pt-20">
      <h1 className="text-5xl ml-l mb-20 Black Han Sans tracking-widest">
        {text}
      </h1>
      <CameraIcon />
    </div>
  );
};

export default Home;
