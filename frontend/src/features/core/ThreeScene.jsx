import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function ShadedSphere(){
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.12;
      ref.current.rotation.x += delta * 0.03;
    }
  });
  return (
    <Float rotationIntensity={0.4} floatIntensity={0.6} speed={1.2}>
      <mesh ref={ref} scale={[1.6,1.6,1.6]} position={[0, -0.1, 0]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial color="#2AB3A6" roughness={0.55} metalness={0.08} emissive="#1a1f2e" emissiveIntensity={0.1} />
      </mesh>
    </Float>
  );
}

export default function ThreeScene(){
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ width: '100%', height: '100%' }} onCreated={({ gl }) => { gl.setClearColor(0x000000, 0); }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
      <ShadedSphere />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  );
}