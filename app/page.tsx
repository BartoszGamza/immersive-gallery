'use client'

import { Canvas } from '@react-three/fiber'
import { MeshReflectorMaterial, Environment, OrbitControls } from '@react-three/drei'
import PostSlide from '@/components/PostSlide'

export default function Home() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 1, 2] }}>
      <OrbitControls />
      <color attach='background' args={['#191920']} />
      <fog attach='fog' args={['#191920', 0, 15]} />
      <group position={[0, -0.5, 0]}>
        <PostSlide />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            mirror={0}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#050505'
            metalness={0.5}
          />
        </mesh>
      </group>
      <Environment preset='city' />
    </Canvas>
  )
}
