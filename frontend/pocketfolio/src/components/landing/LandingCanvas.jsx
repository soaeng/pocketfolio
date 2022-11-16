import {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, useGLTF, useBounds, Bounds} from '@react-three/drei';

import React from 'react';

export const LandingCanvas = ({outerDivRef, page}) => {
  const bgColor = page <= 2 ? '#733ede' : '#d47468';
  return (
    <Canvas
      shadows
      camera={{position: [-30, 30, 30], fov: 20}}
      style={{
        height: '100%',
        position: 'absolute',
        right: 0,
        zIndex: -1,
        backgroundColor: bgColor,
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
      <OrbitControls makeDefault regress={false} enabled={false} />
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
  const landing_01 = useRef();
  const landing_02 = useRef();
  const api = useBounds();
  const glb1 = useGLTF('assets/landing_01.glb');
  const glb2 = useGLTF('assets/landing_02.glb');
  const nodes_01 = glb1.nodes;
  const nodes_02 = glb2.nodes;
  const materials_01 = glb1.materials;
  const materials_02 = glb2.materials;
  const pageHeight = window.innerHeight;

  useFrame((state, delta) => {
    const page = outerDivRef.current.scrollTop / pageHeight;
    if (page <= 1.01) {
      landing_01.current.rotation.y = page * Math.PI * 0.25;
      landing_01.current.scale.x = page + 0.1;
      landing_01.current.visible = true;
      landing_02.current.visible = false;
      // landing_01.current.material.opacity = page;
    } else if (page <= 1.51) {
      landing_01.current.rotation.y = (2 - page) * Math.PI * 0.2;
      landing_01.current.scale.y = -(page - 1.5) * 2;
      landing_01.current.visible = true;
      landing_02.current.visible = false;
    } else if (page <= 2.01) {
      landing_02.current.rotation.y = (2 - page) * Math.PI * 0.25;
      landing_02.current.scale.y = (page - 1.5) * 2;
      landing_01.current.visible = false;
      landing_02.current.visible = true;
    } else if (page <= 3.01) {
      landing_01.current.rotation.y = (2 - page) * Math.PI * 0.25;
    }
  });
  return (
    <Bounds clip observe margin={1.2} fit>
      <mesh
        ref={landing_01}
        castShadow
        geometry={nodes_01['landing_01'].geometry}
        material={materials_01[Object.keys(materials_01)[0]]}
        rotation={[0, 0, 0]}
      />
      <mesh
        ref={landing_02}
        castShadow
        geometry={nodes_02['landing_02'].geometry}
        material={materials_02[Object.keys(materials_02)[0]]}
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

export default LandingCanvas;
