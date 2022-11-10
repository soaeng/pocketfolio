import React, {useState, useEffect, useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import {
  useGLTF,
  OrbitControls,
  softShadows,
  PivotControls,
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
  useCursor,
  meshBounds,
  Bounds,
  useBounds,
} from '@react-three/drei';

softShadows();

const RoomCanvas = ({}) => {
  const cntRef = useRef();
  return (
    <Canvas
      shadows
      raycaster={{params: {Line: {threshold: 0.15}}}}
      camera={{position: [-20, 20, 20], fov: 20}}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[1.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-5, 5, 5, -5, 1, 50]}
          far={100}
        />
      </directionalLight>
      <OrbitControls
        makeDefault
        screenSpacePanning={true}
        regress={false}
        ref={cntRef}
      />
      <mesh>
        <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial attach="material" color={0xa3b18a} />
      </mesh>
    </Canvas>
  );
};

export default RoomCanvas;
