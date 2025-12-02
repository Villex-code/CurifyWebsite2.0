// "use client";
// import { useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Image } from "@react-three/drei";
// import * as THREE from "three";
// import { easing } from "maath";
//
// export function Card({ url, ...props }: { url: string; [key: string]: any }) {
//   const ref = useRef<any>();
//   const [hovered, hover] = useState(false);
//
//   const pointerOver = (e: any) => {
//     e.stopPropagation();
//     hover(true);
//   };
//
//   const pointerOut = () => hover(false);
//
//   useFrame((state, delta) => {
//     easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
//     easing.damp(
//       ref.current.material,
//       "radius",
//       hovered ? 0.25 : 0.1,
//       0.2,
//       delta,
//     );
//     easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
//   });
//
//   return (
//     <Image
//       ref={ref}
//       url={url}
//       transparent
//       side={THREE.DoubleSide}
//       onPointerOver={pointerOver}
//       onPointerOut={pointerOut}
//       {...props}
//     >
//       <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
//     </Image>
//   );
// }
