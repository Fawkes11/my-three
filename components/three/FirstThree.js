import { Canvas } from "@react-three/fiber";

export default function FirstThree() {
  return (
    <Canvas>
      <mesh position={ [0,0,-5]} rotation-x={0.5}>
        <boxGeometry />
        <meshBasicMaterial color="red"/>
      </mesh>
    </Canvas>
  );
}
