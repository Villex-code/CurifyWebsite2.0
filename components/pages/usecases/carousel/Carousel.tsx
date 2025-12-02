// "use client";
// import React from "react";
// import { Card } from "./Card";
//
// export function Carousel({ radius = 1.4, count = 8 }) {
//   const images = [
//     "/images/pex1.jpg",
//     "/images/pex2.jpg",
//     "/images/pex3.jpg",
//     "/images/pex4.jpg",
//   ];
//
//   return Array.from({ length: count }, (_, i) => (
//     <Card
//       key={i}
//       url={images[i % images.length]}
//       position={[
//         Math.sin((i / count) * Math.PI * 2) * radius,
//         0,
//         Math.cos((i / count) * Math.PI * 2) * radius,
//       ]}
//       rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
//     />
//   ));
// }
