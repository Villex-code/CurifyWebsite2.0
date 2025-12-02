// "use client";
// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useTexture } from "@react-three/drei";
// import * as THREE from "three";
//
// export function Banner(props: any) {
//   const ref = useRef<any>();
//   const texture = useTexture("/images/pex1.jpg"); // Use any texture you want
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//
//   useFrame((state, delta) => {
//     if (ref.current?.material) {
//       ref.current.material.time.value += Math.abs(delta) * 4;
//       ref.current.material.map.offset.x += delta / 2;
//     }
//   });
//
//   return (
//     <mesh ref={ref} {...props}>
//       <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
//       <meshSineMaterial
//         map={texture}
//         map-anisotropy={16}
//         map-repeat={[30, 1]}
//         side={THREE.DoubleSide}
//         toneMapped={false}
//       />
//     </mesh>
//   );
// }
