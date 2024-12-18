import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, useGLTF } from "@react-three/drei";

export function Model(props) {
  const { scene } = useGLTF("/camera_model.glb");

  return (
    <group {...props}>
      <primitive object={scene} />
    </group>
  );
}

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
    <Canvas
      style={{
        width: "90vw",
        height: "100vh",
        border: "1px solid black",
        backgroundColor: "#2C2C2C",
      }}
      camera={{
        aspect: 1,
        fov: 100,
        near: 1,
        far: 100,
        position: [0, 3, 5],
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[0, 7, -6.6]} intensity={1} />
      <Model position={[0, 0, 0]} />
      <OrbitControls target={[0, 0, 0]} />
    </Canvas>
    // <div className='w-full h-lvh bg-zinc-400 pt-24'>
    //   <h1 className='text-6xl ml-l mb-52 Black Han Sans tracking-widest'>
    //     {text}
    //   </h1>
    // {/* <CameraIcon /> */}
    // </div>
  );
};

export default Home;
