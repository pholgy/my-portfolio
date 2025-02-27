import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere, Line } from '@react-three/drei';
import { motion } from 'framer-motion';

const Node = ({ position, size, color, name, onPointerOver, onPointerOut, onPointerDown }) => {
  const sphereRef = useRef();
  
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.003;
      sphereRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group position={position}>
      <Sphere 
        ref={sphereRef}
        args={[size, 32, 32]} 
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        onPointerDown={onPointerDown}
      >
        <meshStandardMaterial color={color} metalness={0.2} roughness={0.7} />
      </Sphere>
      <Text 
        position={[0, -size - 0.3, 0]} 
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
};

const Edge = ({ start, end, color }) => (
  <Line 
    points={[start, end]} 
    color={color} 
    lineWidth={1} 
    opacity={0.4}
  />
);

const SkillsScene = () => {
  const [hoveredSkill, setHoveredSkill] = React.useState(null);
  
  const skillNodes = [
    // Data Science & AI
    { id: 'python', name: 'Python', position: [-3, 3, 0], size: 0.8, group: 'ds' },
    { id: 'tensorflow', name: 'TensorFlow', position: [-4, 2, 1], size: 0.7, group: 'ds' },
    { id: 'pytorch', name: 'PyTorch', position: [-2, 2, 2], size: 0.7, group: 'ds' },
    { id: 'pandas', name: 'Pandas', position: [-3, 1, -1], size: 0.6, group: 'ds' },
    { id: 'numpy', name: 'NumPy', position: [-4, 1, -2], size: 0.6, group: 'ds' },
    { id: 'r', name: 'R', position: [-2, 0, -2], size: 0.5, group: 'ds' },
    { id: 'scala', name: 'Scala', position: [-3, -1, -3], size: 0.5, group: 'ds' },
    
    // Web Development
    { id: 'sql', name: 'SQL', position: [0, 2, 3], size: 0.6, group: 'web' },
    { id: 'django', name: 'Django', position: [1, 2, 2], size: 0.6, group: 'web' },
    { id: 'react', name: 'React', position: [2, 1, 1], size: 0.6, group: 'web' },
    { id: 'html', name: 'HTML/CSS', position: [3, 0, 2], size: 0.5, group: 'web' },
    { id: 'js', name: 'JavaScript', position: [2, 0, 3], size: 0.6, group: 'web' },
    
    // Mobile Development
    { id: 'flutter', name: 'Flutter', position: [2, -2, -1], size: 0.5, group: 'mobile' },
    { id: 'ionic', name: 'Ionic', position: [1, -3, 0], size: 0.5, group: 'mobile' },
    { id: 'reactnative', name: 'React Native', position: [3, -2, 1], size: 0.6, group: 'mobile' },
  ];
  
  const connections = [
    // Skill relationships 
    { from: 'python', to: 'tensorflow' },
    { from: 'python', to: 'pytorch' },
    { from: 'python', to: 'pandas' },
    { from: 'python', to: 'numpy' },
    { from: 'pandas', to: 'numpy' },
    { from: 'tensorflow', to: 'pytorch' },
    
    { from: 'js', to: 'react' },
    { from: 'html', to: 'js' },
    { from: 'python', to: 'django' },
    { from: 'django', to: 'sql' },
    
    { from: 'js', to: 'reactnative' },
    { from: 'react', to: 'reactnative' },
    { from: 'js', to: 'ionic' }
  ];
  
  const getNodeColor = (group) => {
    const colors = {
      'ds': '#64ffda',
      'web': '#ffcb6b',
      'mobile': '#c792ea'
    };
    return colors[group] || '#ffffff';
  };
  
  const handleNodeHover = (id) => {
    setHoveredSkill(id);
  };
  
  const handleNodeClick = (id) => {
    console.log(`Clicked on ${id}`);
    // Could add more interactive functionality here
  };
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Render nodes */}
      {skillNodes.map((node) => (
        <Node 
          key={node.id}
          position={node.position}
          size={node.size}
          color={getNodeColor(node.group)}
          name={node.name}
          onPointerOver={() => handleNodeHover(node.id)}
          onPointerOut={() => setHoveredSkill(null)}
          onPointerDown={() => handleNodeClick(node.id)}
        />
      ))}
      
      {/* Render edges */}
      {connections.map((connection, index) => {
        const startNode = skillNodes.find(node => node.id === connection.from);
        const endNode = skillNodes.find(node => node.id === connection.to);
        
        if (startNode && endNode) {
          return (
            <Edge 
              key={index}
              start={startNode.position}
              end={endNode.position}
              color={hoveredSkill === startNode.id || hoveredSkill === endNode.id ? '#ffffff' : '#ffffff50'}
            />
          );
        }
        return null;
      })}
    </>
  );
};

const SkillsGraph = () => {
  return (
    <motion.div
      className="w-full h-96 md:h-[600px] rounded-lg bg-gradient-to-br from-gray-800 to-black border border-white/10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <SkillsScene />
      </Canvas>
    </motion.div>
  );
};

export default SkillsGraph;