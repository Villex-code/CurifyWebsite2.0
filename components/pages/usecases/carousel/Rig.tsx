// "use client";
// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useScroll } from "@react-three/drei";
// import { easing } from "maath";
//
// export function Rig(props: any) {
//   const ref = useRef<any>();
//   const scroll = useScroll();
//
//   useFrame((state, delta) => {
//     ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
//     state.events.update();
//     easing.damp3(
//       state.camera.position,
//       [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
//       0.3,
//       delta,
//     );
//     state.camera.lookAt(0, 0, 0);
//   });
//
//   return <group ref={ref} {...props} />;
// }
