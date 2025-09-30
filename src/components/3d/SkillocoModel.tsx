import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import { useMemo } from 'react';

export default function SkillocoModel() {
  // Create network nodes
  const nodes = useMemo(() => {
    return [
      { position: [0, 0, 0], color: '#f59e0b' },
      { position: [2, 1, 0], color: '#fb923c' },
      { position: [-2, 1, 0], color: '#fbbf24' },
      { position: [0, -2, 0], color: '#f97316' },
      { position: [1.5, -1, 1], color: '#fcd34d' },
      { position: [-1.5, -1, -1], color: '#fdba74' },
    ];
  }, []);

  // Create connections between nodes
  const connections = useMemo(() => {
    return [
      [nodes[0].position, nodes[1].position],
      [nodes[0].position, nodes[2].position],
      [nodes[0].position, nodes[3].position],
      [nodes[1].position, nodes[4].position],
      [nodes[2].position, nodes[5].position],
      [nodes[3].position, nodes[4].position],
      [nodes[3].position, nodes[5].position],
    ];
  }, [nodes]);

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f59e0b" />
      
      {/* Network nodes */}
      {nodes.map((node, index) => (
        <Sphere key={index} args={[0.3, 32, 32]} position={node.position as [number, number, number]}>
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      ))}
      
      {/* Connections between nodes */}
      {connections.map((connection, index) => (
        <Line
          key={index}
          points={connection as any}
          color="#fbbf24"
          lineWidth={2}
          transparent
          opacity={0.6}
        />
      ))}
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  );
}
