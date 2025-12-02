"use client";
import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  Image,
  Environment,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { easing } from "maath";
import img1 from "@/public/images/pex1.jpg";
import img2 from "@/public/images/pex2.jpg";
import img3 from "@/public/images/pex3.jpg";
import img4 from "@/public/images/pex4.jpg";
import img5 from "@/public/images/pex5.jpg";
import img6 from "@/public/images/pex6.jpg";
import img7 from "@/public/images/pex7.jpg";

// Define types for custom elements
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      bentPlaneGeometry: any;
      meshSineMaterial: any;
    }
  }
}

// Custom Geometry for bent plane
class BentPlaneGeometry extends THREE.PlaneGeometry {
  constructor(radius: number, ...args: any[]) {
    super(...args);
    const p = this.parameters;
    const hw = p.width * 0.5;
    const a = new THREE.Vector2(-hw, 0);
    const b = new THREE.Vector2(0, radius);
    const c = new THREE.Vector2(hw, 0);
    const ab = new THREE.Vector2().subVectors(a, b);
    const bc = new THREE.Vector2().subVectors(b, c);
    const ac = new THREE.Vector2().subVectors(a, c);
    const r =
      (ab.length() * bc.length() * ac.length()) / (2 * Math.abs(ab.cross(ac)));
    const center = new THREE.Vector2(0, radius - r);
    const baseV = new THREE.Vector2().subVectors(a, center);
    const baseAngle = baseV.angle() - Math.PI * 0.5;
    const arc = baseAngle * 2;
    const uv = this.attributes.uv;
    const pos = this.attributes.position;
    const mainV = new THREE.Vector2();
    for (let i = 0; i < uv.count; i++) {
      const uvRatio = 1 - uv.getX(i);
      const y = pos.getY(i);
      mainV.copy(c).rotateAround(center, arc * uvRatio);
      pos.setXYZ(i, mainV.x, y, -mainV.y);
    }
    pos.needsUpdate = true;
  }
}

// Custom Material for wave effect
class MeshSineMaterial extends THREE.MeshBasicMaterial {
  constructor(parameters = {}) {
    super(parameters);
    this.setValues(parameters);
  }
  onBeforeCompile(shader: any) {
    shader.vertexShader = `
      uniform float time;
      ${shader.vertexShader}
    `.replace(
      "#include <begin_vertex>",
      `vec3 transformed = vec3(position.x, position.y + sin(time + uv.x * PI * 4.0) / 4.0, position.z);`,
    );
  }
}

// Extend Three.js with custom geometries and materials
extend({ MeshSineMaterial, BentPlaneGeometry });

interface CardProps {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

// Card Component
function Card({ url, scale = 1, ...props }: CardProps) {
  const ref = useRef<THREE.Mesh & { material: any }>(null);
  const [hovered, hover] = useState(false);

  useFrame((state, delta) => {
    if (ref.current) {
      easing.damp3(
        ref.current.scale,
        hovered ? 1.15 * scale : scale,
        0.1,
        delta,
      );
      easing.damp(
        ref.current.material,
        "radius",
        hovered ? 0.25 : 0.1,
        0.2,
        delta,
      );
      easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
    }
  });

  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      scale={[scale, scale]}
      onPointerOver={(e) => (e.stopPropagation(), hover(true))}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
}

interface CarouselProps {
  radius?: number;
  count?: number;
  scale?: number;
}

function Carousel({ radius = 1.4, count = 8, scale = 1 }: CarouselProps) {
  const images = [img1.src, img3.src, img2.src, img4.src, img5.src];

  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      url={images[i % images.length]}
      position={[
        Math.sin((i / count) * Math.PI * 2) * radius,
        0,
        Math.cos((i / count) * Math.PI * 2) * radius,
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
      scale={scale}
    />
  ));
}

// Rig Component remains the same
function Rig(props: any) {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (ref.current) {
      state.events?.update?.();
      easing.damp3(
        state.camera.position,
        [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
        0.3,
        delta,
      );
      state.camera.lookAt(0, 0, 0);
    }
  });

  return <group ref={ref} {...props} />;
}

// Main Component
const UsePNMDCarousel = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setScale(0.4);
        } else {
          setScale(1);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen w-full relative">
      {/* Blocking overlay - place it INSIDE the container but above the Canvas */}
      <div
        className="absolute inset-0 z-50"
        style={{
          pointerEvents: "auto", // This is crucial
          touchAction: "auto", // This ensures normal touch behavior
        }}
      />

      <Canvas
        camera={{ position: [0, 0, 100], fov: 15 }}
        style={{
          pointerEvents: "none", // This disables ALL canvas interactions
          touchAction: "none", // This prevents touch events
        }}
      >
        <fog attach="fog" args={["#a79", 8.5, 12]} />
        <Rig rotation={[0, 0, 0.15]}>
          <Carousel scale={scale} />
        </Rig>
      </Canvas>
    </div>
  );
};

export default UsePNMDCarousel;
