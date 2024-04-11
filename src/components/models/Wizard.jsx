"use client";
import React, { useRef } from "react";
import { throttle } from "lodash";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Wizard(props) {
  const { nodes, materials } = useGLTF('/models/scene-transformed.glb')
 
  const modelRef = useRef();
  
  // Throttle the mousemove event handler to only update every 50 milliseconds
  const throttledMouseMove = throttle((event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    modelRef.current.position.x = x * 10; 
    modelRef.current.position.y = y * 10; 
  }, 50);
  const handleMouseMove = (event) => {
    throttledMouseMove(event);
  };

  // Add mousemove event listener
  document.addEventListener('mousemove', handleMouseMove);

  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[0,-3.5,0]}
    scale={[2.5,2.5,2.5]}
    rotation={[0,0,150]}>
      <mesh 
        name="Object_2"
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Scene_-_Root']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/scene-transformed.glb')