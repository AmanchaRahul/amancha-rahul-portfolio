import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder, MeshDistortMaterial } from '@react-three/drei';

export default function EVAgentModel() {
  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
      
      {/* Electric car representation */}
      <group rotation={[0, Math.PI / 4, 0]}>
        {/* Car body */}
        <Box args={[3, 1, 1.5]} position={[0, 0.5, 0]}>
          <MeshDistortMaterial
            color="#10b981"
            distort={0.1}
            speed={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </Box>
        {/* Roof */}
        <Box args={[1.5, 0.8, 1.4]} position={[0, 1.3, 0]}>
          <MeshDistortMaterial
            color="#059669"
            distort={0.1}
            speed={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </Box>
        {/* Wheels */}
        <Cylinder args={[0.4, 0.4, 0.3, 32]} rotation={[0, 0, Math.PI / 2]} position={[-1, -0.2, 0.8]}>
          <meshStandardMaterial color="#1f2937" />
        </Cylinder>
        <Cylinder args={[0.4, 0.4, 0.3, 32]} rotation={[0, 0, Math.PI / 2]} position={[1, -0.2, 0.8]}>
          <meshStandardMaterial color="#1f2937" />
        </Cylinder>
        <Cylinder args={[0.4, 0.4, 0.3, 32]} rotation={[0, 0, Math.PI / 2]} position={[-1, -0.2, -0.8]}>
          <meshStandardMaterial color="#1f2937" />
        </Cylinder>
        <Cylinder args={[0.4, 0.4, 0.3, 32]} rotation={[0, 0, Math.PI / 2]} position={[1, -0.2, -0.8]}>
          <meshStandardMaterial color="#1f2937" />
        </Cylinder>
      </group>
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
