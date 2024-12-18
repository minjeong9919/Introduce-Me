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

  return (
    <div id='Container' className='w-screen h-lvh bg-gray400 pt-24'>
      <h1 className='text-6xl ml-l Black Han Sans tracking-widest text-white'>
        {IntroduceText}
      </h1>
      <div id='canvasWrapper' className='w-w800 h-h800 bg-gray400 m-auto'>
        <Canvas
          camera={{
            aspect: 1,
            fov: 100,
            near: 1,
            far: 100,
            position: [0, 2, 4],
          }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[0, 7, -6.6]} intensity={1} />
          <Model position={[0, 0, 0]} />
          <OrbitControls target={[0, 0, 0]} autoRotate={true} />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
