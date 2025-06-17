import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function DoubleDoors() {
  // Track open state for both doors separately
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  const leftDoorRef = useRef();
  const rightDoorRef = useRef();

  useFrame(() => {
    if (leftDoorRef.current) {
      const targetRot = leftOpen ? -Math.PI / 2 : 0;
      leftDoorRef.current.rotation.y += (targetRot - leftDoorRef.current.rotation.y) * 0.1;
    }
    if (rightDoorRef.current) {
      const targetRot = rightOpen ? Math.PI / 2 : 0;
      rightDoorRef.current.rotation.y += (targetRot - rightDoorRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <group position={[0, 4.5, 10.25]}>
      {/* Left Door - hinge on right edge */}
      <mesh
        ref={leftDoorRef}
        position={[-1, 0, 0]}  // shift left door left by half width (3 / 2)
        castShadow
        onClick={() => setLeftOpen(!leftOpen)}
      >
        <boxGeometry args={[3, 9, 0.2]} /> {/* width 3, height 9 */}
        <meshStandardMaterial color={leftOpen ? 'green' : 'brown'} />
      </mesh>

      {/* Right Door - hinge on left edge */}
      <mesh
        ref={rightDoorRef}
        position={[2, 0, 0]} // shift right door right by half width
        castShadow
        onClick={() => setRightOpen(!rightOpen)}
      >
        <boxGeometry args={[3, 9, 0.2]} />
        <meshStandardMaterial color={rightOpen ? 'green' : 'brown'} />
      </mesh>
    </group>
  );
}
