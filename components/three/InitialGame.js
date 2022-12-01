import React from "react";

export default function InitialGame() {
  return (
    <>
      <pointLight position={[10, 10, 10]} />
      <group>
        <mesh
          visible
          userData={{ hello: "world" }}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <sphereGeometry args={[1, 2, 2]} />
          <meshStandardMaterial color="hotpink" transparent />
        </mesh>
      </group>
    </>
  );
}
