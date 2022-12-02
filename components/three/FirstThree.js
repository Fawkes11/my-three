import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrbitControls } from "@react-three/drei";

import InitialGame from "./InitialGame";

export default function FirstThreeFiber() {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
      ]}
    >
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 8],
        }}
      >
        <OrbitControls />
        <InitialGame />
      </Canvas>
    </KeyboardControls>
  );
}
