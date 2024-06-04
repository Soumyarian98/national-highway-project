import { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { CatmullRomCurve3, Color, Vector3 } from "three";
import gsap from "gsap";
import { Button } from "./ui/button";

const cameraMovement = [
  [0, 2.5, 0],
  [78.70751953125, 9.771011352539062, -1.9351749420166016],
  [211.38674926757812, 17.042022705078125, -12.792436599731445],
  [300.50921630859375, 17.68490982055664, -21.242721557617188],
  [400.7994384765625, 11.898933410644531, -30.48273468017578],
  [720.9961547851562, 11.898933410644531, -65.40180969238281],
  [1051.5169677734375, 19.6497802734375, -101.23345947265625],
  [1136.6522216796875, 19.6497802734375, -111.154541015625],
  [1354.7611083984375, 11.613700866699219, -134.1590576171875],
  [1468.7578125, 11.613700866699219, -147.90423583984375],
  [1700.4481201171875, 19.647567749023438, -173.01644897460938],
  [1763.662109375, 19.647567749023438, -180.705810546875],
];

function Annotation({ children, ...props }: any) {
  return (
    <Html
      {...props}
      transform
      occlude="blending"
      geometry={<planeGeometry args={[10, 7.1, 10]} />}>
      <div className="annotation" onClick={() => console.log(".")}>
        {children}
      </div>
    </Html>
  );
}

function Model({ setSelectedId }: any) {
  const { camera } = useThree();
  const [points, setPoints] = useState<Vector3[]>([]);
  const currentPointRef = useRef(0);
  let animationRef = useRef<any>();

  const { scene } = useGLTF("/full_road.glb");
  let curve = new CatmullRomCurve3(points, false);

  const handleVerticalMovement = (direction: 1 | -1) => {
    const allPoints = curve.getSpacedPoints(100);
    const max = allPoints.length;
    const currentPoint = currentPointRef.current;
    const nextPoint = currentPoint + direction;
    if (nextPoint > max - 1 && direction === 1) {
      currentPointRef.current = max;
    }
    if (nextPoint - 1 < 0 && direction === -1) {
      currentPointRef.current = 0;
    }
    const nextPosition = curve.getPointAt(nextPoint / max);
    currentPointRef.current = nextPoint;

    animationRef.current?.kill();
    animationRef.current = gsap.to(camera.position, {
      x: nextPosition.x,
      y: nextPosition.y,
      z: nextPosition.z,
      duration: 1,
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
      } else if (e.key === "ArrowLeft") {
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        handleVerticalMovement(1);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        handleVerticalMovement(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [points]);

  useEffect(() => {
    if (scene) {
      console.log(scene);
      const coords = cameraMovement.map((c: any) => {
        return new Vector3(c[0], c[1], c[2]);
      });
      // scene.children = scene.children.filter(c => {
      //   if (Number(c.name)) return false;
      //   return true;
      // });
      setPoints(coords);
    }
  }, [scene]);

  const getAnnotationPosition = (position: Vector3) => {
    return [position.x + 6, position.y + 1, position.z];
  };

  return (
    <>
      {points.length > 0 && (
        <>
          {/* <mesh position={[0, 0, 0]}>
            <boxGeometry args={[10, 10, 10]} />
            <meshStandardMaterial color="red" />
          </mesh> */}
          <Annotation
            position={getAnnotationPosition(points[2])}
            rotation={[0, -Math.PI / 2, 0]}>
            <h1 className="text-3xl font-bold">Chainage (18+900)</h1>
            <div className="mt-6">
              <Button size="lg" onClick={() => setSelectedId("2")}>
                View Details
              </Button>
            </div>
          </Annotation>
          {/* <CatmullRomLine points={points} color="red" lineWidth={1} /> */}
        </>
      )}
      <primitive object={scene} />
    </>
  );
}

const BridgeViewer = ({ setSelectedId }: any) => {
  return (
    <Canvas
      scene={{
        background: new Color(0xd9f7ff),
      }}
      className="aspect-video"
      camera={{
        position: [0, 6, 0],
        rotation: [0, -Math.PI * 0.5, 0],
      }}>
      <ambientLight intensity={4} />
      <Model setSelectedId={setSelectedId} />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default BridgeViewer;
