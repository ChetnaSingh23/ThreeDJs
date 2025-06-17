import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

export function Walls() {
  const wallTexture = useTexture('models/wall.jpg');
  wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
  wallTexture.repeat.set(2, 2);

  const windowTexture = useTexture('models/window.jpg');
  windowTexture.wrapS = windowTexture.wrapT = THREE.ClampToEdgeWrapping;

  return (
    <group>
      {/* Back Wall */}
      <mesh position={[0, 5, -10]} castShadow receiveShadow>
        <boxGeometry args={[20, 10, 0.5]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* Front Wall with door gap */}
      <group position={[0, 5, 10]}>
        <mesh position={[-6, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[8, 10, 0.5]} />
          <meshStandardMaterial map={wallTexture} />
        </mesh>
        <mesh position={[6.5, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[6, 10, 0.5]} />
          <meshStandardMaterial map={wallTexture} />
        </mesh>

        {/* Window on front wall right side */}
        <mesh position={[6, 2, 1]} rotation={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[3, 3]} />
          <meshStandardMaterial map={windowTexture} transparent />
        </mesh>
      </group>

      {/* Left Wall with window */}
      <mesh position={[-10, 5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 10, 20]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>
      <mesh position={[-10.26, 4, 4]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial map={windowTexture} transparent />
      </mesh>

      {/* Right Wall */}
      <mesh position={[9.4, 5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 10, 20]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>
    </group>
  );
}
