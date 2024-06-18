import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { Box3, Color, Object3D, Vector3 } from "three";

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

function Model({ id }: { id: string }) {
  const { scene } = useGLTF("/full_road_1.glb");
  const allChildrenRef = useRef<Object3D[]>([]);

  useEffect(() => {
    if (scene) {
      allChildrenRef.current = scene.children;
    }
  }, [scene]);

  useEffect(() => {
    if (scene && allChildrenRef.current) {
      scene.children = allChildrenRef.current.filter((c) => {
        if (c.name === `chainage_${Number(id) + 1}`) {
          const boundingBox = new Box3().setFromObject(c);
          const center = new Vector3();
          boundingBox.getCenter(center);

          const xDifference = c.position.x - center.x;
          const yDifference = c.position.y - center.y;
          const zDifference = c.position.z - center.z;

          c.position.set(0, 0, 0);

          c.position.x = xDifference;
          c.position.y = yDifference;
          c.position.z = zDifference;

          return true;
        }
        return false;
      });
    }
  }, [scene, id]);

  return <primitive object={scene} />;
}

const BridgeWithFilter = ({ id }: { id: string }) => {
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
        position: [0, 50, 20],
        rotation: [0, -Math.PI * 0.5, 0],
      }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={1.5} castShadow={true} />
        <directionalLight
          position={[0, 20, 20]}
          intensity={1}
          castShadow={true}
        />
        <Model id={id} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default BridgeWithFilter;
