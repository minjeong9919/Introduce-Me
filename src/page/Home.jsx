import { CameraIcon } from "./../component/home/CameraIcon";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="w-full h-lvh overflow-auto bg-zinc-400 pt-16">
      <Typewriter
        options={{
          strings: ["안녕하세요. 프론트엔드 개발자 김민정입니다."],
          autoStart: true,
          loop: true,
          wrapperClassName: "text-5xl ml-l mb-28 tracking-widest",
        }}
      />
      <CameraIcon />
    </div>
  );
};

export default Home;
