import {Canvas} from '@react-three/fiber';
import {useRef} from 'react';
import {Bounds, useGLTF} from '@react-three/drei';
import Theme from '../main/MainTheme';
import Items from '../roomCanvas/Items';

const MainCanvas = ({mainRoom}) => {
  const cntRef = useRef();
  const boundaryRef = useRef();

  return (
    <Canvas shadows camera={{position: [-30, 30, 30], fov: 20}}>
      <ambientLight intensity={0.5} />
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

      {mainRoom && (
        <Theme boundaryRef={boundaryRef} name={mainRoom.theme}>
          <Items
            cntRef={cntRef}
            boundaryRef={boundaryRef}
            arranges={mainRoom.arranges}
          />
        </Theme>
      )}
      {!mainRoom && <LandingCanvasInner />}
    </Canvas>
  );
};

const LandingCanvasInner = () => {
  const landing_01 = useRef();
  const glb1 = useGLTF('assets/landing_01.glb');
  const nodes_01 = glb1.nodes;
  const materials_01 = glb1.materials;

  return (
    <Bounds clip observe margin={1.2} fit>
      <mesh
        ref={landing_01}
        castShadow
        geometry={nodes_01['landing_01'].geometry}
        material={materials_01[Object.keys(materials_01)[0]]}
        rotation={[0, 0, 0]}
      />
    </Bounds>
  );
};


export default MainCanvas;
