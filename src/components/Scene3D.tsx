import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Icosahedron, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

function getCssVar(name: string, fallback: string): string {
  if (typeof window === 'undefined') return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!groupRef.current) return;
    const x = state.pointer.x * viewport.width * 0.3;
    const y = state.pointer.y * viewport.height * 0.3;
    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      state.pointer.y * 0.2,
      0.05,
    );
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, x, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, y, 0.05);
  });

  const primary = getCssVar('--theme-primary', '#0891b2');
  const secondary = getCssVar('--theme-secondary', '#ec4899');
  const accent = getCssVar('--theme-accent', '#7eecff');

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1.4, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color={primary}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.6}
            emissive={primary}
            emissiveIntensity={0.15}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={3}>
        <Icosahedron args={[0.5, 0]} position={[-3, 1.5, -1]}>
          <meshStandardMaterial color={secondary} wireframe emissive={secondary} emissiveIntensity={0.3} />
        </Icosahedron>
      </Float>

      <Float speed={1.8} rotationIntensity={2} floatIntensity={3}>
        <Octahedron args={[0.4, 0]} position={[3.2, -1.2, -0.5]}>
          <meshStandardMaterial color={accent} metalness={0.8} roughness={0.2} emissive={primary} emissiveIntensity={0.1} />
        </Octahedron>
      </Float>

      <Float speed={2.5} rotationIntensity={3} floatIntensity={2}>
        <Torus args={[0.35, 0.12, 16, 100]} position={[-2.5, -1.8, 0.5]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color={secondary} metalness={0.6} roughness={0.3} emissive={secondary} emissiveIntensity={0.15} />
        </Torus>
      </Float>

      <Float speed={2.2} rotationIntensity={2} floatIntensity={2}>
        <Icosahedron args={[0.3, 0]} position={[2.5, 2, 0.8]}>
          <meshStandardMaterial color={accent} wireframe emissive={primary} emissiveIntensity={0.25} />
        </Icosahedron>
      </Float>
    </group>
  );
}

function Particles({ count = 150 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);
  const accent = getCssVar('--theme-accent', '#7eecff');

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0003;
      meshRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color={accent} transparent opacity={0.4} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export default function Scene3D({ reduced = false }: { reduced?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, reduced ? 1 : 2]}
      gl={{ antialias: !reduced, alpha: true, powerPreference: 'high-performance' }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, 3]} intensity={0.5} />
      <pointLight position={[0, 0, 4]} intensity={0.8} distance={10} />
      <FloatingShapes />
      {!reduced && <Particles count={150} />}
    </Canvas>
  );
}
