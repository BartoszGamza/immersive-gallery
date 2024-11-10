import * as React from 'react'

import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { DoubleSide, RepeatWrapping } from 'three'

type PostSlideProps = {
  index: number
}

const PostSlide: React.FC<PostSlideProps> = ({ index }) => {
  const texture = useTexture('/images/LastCalmDays.jpg')
  texture.wrapT = RepeatWrapping

  const tick = () => {
    texture.offset.y += 0.001
  }

  useFrame(tick)

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[1, 5.8]} />
      <meshBasicMaterial map={texture} side={DoubleSide} />
    </mesh>
  )
}

export default PostSlide
