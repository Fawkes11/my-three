import { Physics, Debug, RigidBody } from "@react-three/rapier";
import Lights from "./Lights";
import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

THREE.ColorManagement.legacyMode = false;

const boxGeometry = new THREE.BoxGeometry(1,1,1);



const floor1Material = new THREE.MeshStandardMaterial({
  color: "limegreen",
  metalness: 0,
  roughness: 0,
});
const floor2Material = new THREE.MeshStandardMaterial({
  color: "greenyellow",
  metalness: 0,
  roughness: 0,
});
const obstacleMaterial = new THREE.MeshStandardMaterial({
  color: "#ff0000",
  metalness: 0,
  roughness: 1,
});
const wallMaterial = new THREE.MeshStandardMaterial({
  color: "#887777",
  metalness: 0,
  roughness: 0,
});

function InitialBlock({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </group>
  );
}

function BlockObstacle({ position = [0, 0, 0] }) {
  const obstacle = useRef();
  const [speed] = useState(() => (Math.random() +0.2 * Math.random() < 0.5 ? -1 : 1))



  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const rotation = new THREE.Quaternion();
    rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
    obstacle.current.setNextKinematicRotation(rotation);
  });

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
      <RigidBody
        ref={obstacle}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={ 0.2 }
        friction={ 0 }>
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3.5, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
}

function BlockLimbo({ position = [0, 0, 0] }) {
    const obstacle = useRef();
    const [speed] = useState(() => (Math.random() +0.2 * Math.random() < 0.5 ? -1 : 1))
  
    useFrame((state) => {
      const time = state.clock.getElapsedTime();


      const y = Math.sin(time)
      obstacle.current.setNextKinematicTranslation({x: 0, y: y, z:0})

    });
  
    return (
      <group position={position}>
        <mesh
          geometry={boxGeometry}
          material={floor2Material}
          position={[0, -0.1, 0]}
          scale={[4, 0.2, 4]}
          receiveShadow
        />
        <RigidBody
          ref={obstacle}
          type="kinematicPosition"
          position={[0, 0.3, 0]}
          restitution={ 0.2 }
          friction={ 0 }>
          <mesh
            geometry={boxGeometry}
            material={obstacleMaterial}
            scale={[3.5, 0.3, 0.3]}
            castShadow
            receiveShadow
          />
        </RigidBody>
      </group>
    );
  }



export default function InitialGame() {
  return (
    <>
      <Physics>
        <Debug />
        <Lights />
        <InitialBlock position={[0, 0, 8]} />
        <BlockObstacle  position={[0, 0, 4]} />
        <BlockLimbo position={[0, 0, 0]} />
      </Physics>
    </>
  );
}
