import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function AshaModel() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
      
      {/* Heart-shaped representation */}
      <group>
        <Sphere args={[1, 32, 32]} position={[-0.6, 0.3, 0]}>
          <MeshDistortMaterial
            color="#ff6b6b"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
          />
        </Sphere>
        <Sphere args={[1, 32, 32]} position={[0.6, 0.3, 0]}>
          <MeshDistortMaterial
            color="#ff6b6b"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
          />
        </Sphere>
        <Sphere args={[1.2, 32, 32]} position={[0, -0.5, 0]} scale={[1, 1.5, 1]}>
          <MeshDistortMaterial
            color="#ff6b6b"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
          />
        </Sphere>
      </group>
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}
