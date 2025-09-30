import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, MeshDistortMaterial } from '@react-three/drei';

export default function DripsmithModel() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a78bfa" />
      
      {/* T-shirt representation */}
      <group rotation={[0, Math.PI / 6, 0]}>
        {/* Body */}
        <Box args={[2.5, 2, 0.2]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#a78bfa"
            distort={0.2}
            speed={1}
            roughness={0.3}
          />
        </Box>
        {/* Left sleeve */}
        <Box args={[1, 1, 0.2]} position={[-1.5, 0.5, 0]} rotation={[0, 0, 0.5]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            distort={0.2}
            speed={1}
            roughness={0.3}
          />
        </Box>
        {/* Right sleeve */}
        <Box args={[1, 1, 0.2]} position={[1.5, 0.5, 0]} rotation={[0, 0, -0.5]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            distort={0.2}
            speed={1}
            roughness={0.3}
          />
        </Box>
      </group>
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  );
}
