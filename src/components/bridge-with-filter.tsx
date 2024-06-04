import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Box3, Color, Object3D, Vector3 } from "three";

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
      scene.children = allChildrenRef.current.filter(c => {
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
      scene={{
        background: new Color(0xd9f7ff),
      }}
      className="aspect-video"
      camera={{
        position: [0, 50, 20],
        rotation: [0, -Math.PI * 0.5, 0],
      }}>
      <ambientLight intensity={4} />
      <Model id={id} />
      <OrbitControls />
    </Canvas>
  );
};

export default BridgeWithFilter;
