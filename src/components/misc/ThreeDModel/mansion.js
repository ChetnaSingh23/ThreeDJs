import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useTexture } from '@react-three/drei';
import { DoubleDoors } from './doubledoor';
import { Walls } from './walls';

function Floor() {
  const floorTexture = useTexture('models/floor.jpg');
  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.set(4, 4);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial map={floorTexture} />
    </mesh>
  );
}

function Roof() {
  const roofTexture = useTexture('models/roof.jpg');
  roofTexture.wrapS = roofTexture.wrapT = THREE.RepeatWrapping;
  roofTexture.repeat.set(1, 1);

  return (
    <mesh position={[0, 12, 0]} rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow>
      <coneGeometry args={[14, 4, 4]} />
      <meshStandardMaterial map={roofTexture} />
    </mesh>
  );
}

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
  }, [size, camera]);

  return null;
}

function MansionDesign() {
  return (
    <Canvas
      shadows
      camera={{ position: [30, 20, 30], fov: 45 }}
      gl={{ physicallyCorrectLights: true, toneMappingExposure: 1 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />     
      <Environment preset="sunset" />
      <ResponsiveCamera />
      <Floor />
      <Walls />
      <DoubleDoors />
      <Roof />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

export default MansionDesign;
