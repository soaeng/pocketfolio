import {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, useGLTF, useBounds, Bounds} from '@react-three/drei';

import React from 'react';

export const LoginCanvas = ({outerDivRef}) => {
  return (
    <Canvas
      shadows
      camera={{position: [-30, 50, 30], fov: 20}}
      style={{
        height: '100%',
        position: 'absolute',
        right: 0,
        // zIndex: -2,
        transition: 'all 0.5s',
      }}
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
        regress={true}
        enabled={true}
        autoRotate={true}
        autoRotateSpeed={1}
        enablePan={false}
        enableZoom={false}
      />
      {/* <mesh
        scale={30}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.06, 0]}
        material-color={bgColor}
      >
        <planeGeometry />
      </mesh> */}
      <LandingCanvasInner outerDivRef={outerDivRef} />
    </Canvas>
  );
};

const LandingCanvasInner = ({outerDivRef}) => {
  const ocean = useGLTF('assets/Ocean.glb');
  const island = useGLTF('assets/Island.glb');
  const sky = useGLTF('assets/Sky.glb');
  const nodes_01 = ocean.nodes;
  const nodes_02 = island.nodes;
  const nodes_03 = sky.nodes;
  const materials_01 = ocean.materials;
  const materials_02 = island.materials;
  const materials_03 = sky.materials;

  return (
    <Bounds clip observe margin={0.3} fit>
      <mesh
        castShadow
        geometry={nodes_01['Ocean'].geometry}
        material={materials_01[Object.keys(materials_01)[0]]}
        rotation={[0, 0, 0]}
      />
      <mesh
        castShadow
        geometry={nodes_02['Island'].geometry}
        material={materials_02[Object.keys(materials_02)[0]]}
        rotation={[0, 0, 0]}
      />
      <mesh
        castShadow
        geometry={nodes_03['Sky'].geometry}
        material={materials_03[Object.keys(materials_03)[0]]}
        rotation={[0, 0, 0]}
      />
      {/* <mesh
        ref={landing_02}
        castShadow
        geometry={nodes_02['landing_02'].geometry}
        material={materials_02[Object.keys(materials_02)[0]]}
        rotation={[0, 0, 0]}
      /> */}
    </Bounds>
  );
};

export default LoginCanvas;
