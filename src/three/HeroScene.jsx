import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, Stars, MeshTransmissionMaterial } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

function QuantumCore() {
  const coreRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (coreRef.current) {
        coreRef.current.rotation.y = time * 0.2;
        coreRef.current.rotation.x = time * 0.1;
    }
  });

  return (
    <group>
      {/* Central AI Brain / Core - Optimized */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={coreRef} scale={0.9}>
          <torusKnotGeometry args={[1, 0.35, 100, 16]} />
          <MeshTransmissionMaterial 
            resolution={256}
            samples={4}
            thickness={2.5}
            roughness={0.1}
            transmission={0.95}
            ior={1.2}
            color="#a855f7"
          />
        </mesh>
        
        {/* Inner glowing energy */}
        <mesh scale={0.7}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#db2777" transparent opacity={0.3} />
        </mesh>
      </Float>
      
      {/* Dense data particles orbiting the core - Reduced count */}
      <Sparkles count={150} scale={6} size={2.5} speed={0.5} color="#e0aaff" opacity={0.6} />
    </group>
  );
}

export default function HeroScene({ mouse }) {
  const { rotation } = useSpring({
    rotation: [(mouse.normalizedY || 0) * 0.25, (mouse.normalizedX || 0) * 0.25, 0],
    config: { mass: 2, tension: 150, friction: 30 }
  });

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none md:pointer-events-auto">
      {/* Added dpr to limit resolution on high density screens, massive performance boost */}
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: "high-performance" }}>
        
        {/* Environment map to make material extremely beautiful and realistic */}
        <Environment preset="city" />
        
        <ambientLight intensity={0.6} color="#ffffff" />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#a855f7" />
        <directionalLight position={[-10, -5, -5]} intensity={1.5} color="#db2777" />
        
        {/* Deep background galaxy - Reduced count */}
        <Stars radius={100} depth={50} count={2000} factor={3} saturation={0.5} fade speed={1} />
        
        <animated.group rotation={rotation}>
          <QuantumCore />
        </animated.group>
      </Canvas>
    </div>
  );
}
