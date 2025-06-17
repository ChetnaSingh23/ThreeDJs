import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

function House() {
  return (
    <group>
      {/* Main Building */}
      <mesh position={[0, 5, 0]}>
        <boxGeometry args={[20, 10, 20]} />
        <meshStandardMaterial color="#f5f5dc" />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 11, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[14, 4, 4]} />
        <meshStandardMaterial color="#8b0000" />
      </mesh>

      {/* Entrance Structure */}
      <mesh position={[0, 2.5, 11]}>
        <boxGeometry args={[6, 5, 2]} />
        <meshStandardMaterial color="#deb887" />
      </mesh>

      {/* Door */}
      <mesh position={[0, 1.5, 12.05]}>
        <boxGeometry args={[3, 5, 0.2]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Left Window */}
      <mesh position={[-6, 5.5, 10.9]}>
        <boxGeometry args={[2, 2, 0.1]} />
        <meshStandardMaterial color="#ccc" />
      </mesh>

      {/* Right Window */}
      <mesh position={[6, 5.5, 10.9]}>
        <boxGeometry args={[2, 2, 0.1]} />
        <meshStandardMaterial color="#ccc" />
      </mesh>
    </group>
  );
}

export function ThreeDModelHouseScene() {
  return (
    <Canvas camera={{ position: [30, 20, 30], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 10]} intensity={1} />
      <House />
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#228b22" />
      </mesh>
      {/* Environment */}
      <Environment preset="sunset" />
      <OrbitControls />
    </Canvas>
  );
}
