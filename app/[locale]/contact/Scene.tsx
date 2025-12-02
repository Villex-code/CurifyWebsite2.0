"use client";
import React, { useRef, useReducer, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  CuboidCollider,
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { easing } from "maath";
import * as THREE from "three";
import { Mesh, Material, BufferGeometry, Vector3 } from "three";
import { GLTF } from "three-stdlib";
// import plusModel from "@/public/models/plus.glb";
const plusModel = "/models/plus.glb";

// Disable DRACO loader for this model
useGLTF.preload(plusModel, true);

// Define types for GLTF model
type GLTFResult = GLTF & {
  nodes: {
    connector: THREE.Mesh;
  };
  materials: {
    base: THREE.Material;
  };
};

// Define the accent colors using teal
const accents = ["#14b8a6", "#0f766e", "#134e4a", "#ffffff"];

const shuffle = (accent = 0) => [
  { color: "#14b8a6", roughness: 0.1 },
  { color: "#0f766e", roughness: 0.75 },
  { color: "#0f766e", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

interface ConnectorProps {
  position?: any;
  color?: string;
  roughness?: number;
  accent?: boolean;
  vec?: any;
  scale?: any;
  children?: React.ReactNode;
}

interface ModelProps {
  color?: string;
  roughness?: number;
  children?: React.ReactNode;
}

export default function Scene() {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);

  return (
    <Canvas
      onClick={click}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
      className="h-[400px] w-full rounded-lg"
    >
      <color attach="background" args={["#134e4a"]} />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) => (
          <Connector key={i} {...props} />
        ))}
      </Physics>
      <EffectComposer multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </Canvas>
  );
}

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  ...props
}: ConnectorProps & { r?: typeof THREE.MathUtils.randFloatSpread }) {
  const api = useRef<any>(null);
  const pos = useMemo(() => position || [r(10), r(10), r(10)], [position, r]);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    if (api.current) {
      api.current.applyImpulse(
        vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
      );
    }
  });

  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      <Model {...props} />
      {accent && (
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef<any>(null);

  useFrame(({ mouse, viewport }) => {
    if (ref.current) {
      ref.current.setNextKinematicTranslation(
        vec.set(
          (mouse.x * viewport.width) / 2,
          (mouse.y * viewport.height) / 2,
          0
        )
      );
    }
  });

  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

function Model({
  children,
  color = "white",
  roughness = 0,
  ...props
}: ModelProps) {
  const ref = useRef<THREE.Mesh>(null);
  const { nodes, materials } = useGLTF(
    plusModel,
    true
  ) as unknown as GLTFResult;

  useFrame((state, delta) => {
    if (ref.current?.material && "color" in ref.current.material) {
      easing.dampC(
        (ref.current.material as THREE.MeshStandardMaterial).color,
        color,
        0.2,
        delta
      );
    }
  });

  // Add error handling
  if (!nodes || !nodes.connector) {
    console.warn("Model not loaded correctly");
    return null;
  }

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={10}
      geometry={nodes.connector.geometry}
    >
      <meshStandardMaterial metalness={0.2} roughness={roughness} />
      {children}
    </mesh>
  );
}
