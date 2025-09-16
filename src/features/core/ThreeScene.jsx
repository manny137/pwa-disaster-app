import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshWobbleMaterial, Float, GradientTexture, Html } from "@react-three/drei";

function AnimatedBlob(){
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.12;
    ref.current.rotation.x += delta * 0.03;
  });

  return (
    <Float rotationIntensity={0.4} floatIntensity={0.6} speed={1.2}>
      <mesh ref={ref} scale={[1.6,1.6,1.6]} position={[0, -0.1, 0]}>
        <icosahedronGeometry args={[1.2, 4]} />
        <MeshWobbleMaterial factor={0.8} speed={1.5} roughness={0.35} metalness={0.1} />
      </mesh>
    </Float>
  );
}

export default function ThreeScene(){
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} />
      <AnimatedBlob />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  );
}