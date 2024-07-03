import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { Color } from "three";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="aspect-video whitespace-nowrap w-full h-full rounded-md px-4 flex justify-center items-center text-primary rounded-br-md bg-white">
        Loading - {progress.toFixed(0)} %
      </div>
    </Html>
  );
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);

  return <primitive object={scene} />;
}

const BridgeSectionViewer = ({
  url,
  cameraPosition,
}: {
  url: string;
  cameraPosition: [number, number, number];
}) => {
  return (
    <Canvas
      gl={{
        // @ts-ignore
        shadowMap: {
          enabled: true,
          autoUpdate: true,
          // type: PCFShadowMap,
          // needsUpdate: true,
        },
      }}
      scene={{
        background: new Color(0xd9f7ff),
      }}
      className="aspect-video"
      camera={{
        position: cameraPosition,
        // rotation: [0, -Math.PI * 0.5, 0],
      }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={2} castShadow={true} />
        <directionalLight
          position={[0, 20, 20]}
          intensity={1}
          castShadow={true}
        />
        <Model url={url} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default BridgeSectionViewer;
