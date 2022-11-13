import React, {useState, useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import {
  OrbitControls,
  softShadows,
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
} from '@react-three/drei';
import RoomTheme from './theme/RoomTheme';
import Items from './Items';
import Capture from '../room/Capture';

softShadows();
const range = 2;
const _datas = [
  {
    name: 'Husky',
    position: [
      Math.random() * range * 2 - range,
      0,
      Math.random() * range * 2 - range,
    ],
    rotateY: Math.random() * Math.PI * 2,
  },
  {
    name: 'Husky',
    position: [
      Math.random() * range * 2 - range,
      0,
      Math.random() * range * 2 - range,
    ],
    rotateY: Math.random() * Math.PI * 2,
  },
];

const RoomCanvas = ({edit}) => {
  const cntRef = useRef();
  const boundaryRef = useRef();
  const [cntEnabled, setCntEnabled] = useState(true);
  const [datas, setDatas] = useState(_datas);

  return (
    <Canvas
      shadows
      // raycaster={{params: {Line: {threshold: 0.15}}}}
      camera={{position: [-30, 30, 30], fov: 20}}
    >
      {/* <Capture /> */}
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
        enabled={cntEnabled}
      />
      <RoomTheme boundaryRef={boundaryRef} name="Room_1">
        <Items
          cntRef={cntRef}
          boundaryRef={boundaryRef}
          datas={datas}
          edit={edit}
          setCntEnabled={setCntEnabled}
          setDatas={setDatas}
        />
      </RoomTheme>

      {edit && (
        <GizmoHelper alignment="top-right" margin={[100, 100]}>
          <group scale={0.85}>
            <GizmoViewcube />
          </group>
          <group
            scale={1.75}
            position={[30, -30, -30]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <GizmoViewport
              labelColor="white"
              axisHeadScale={0.525}
              hideNegativeAxes
            />
          </group>
        </GizmoHelper>
      )}

      <OrbitControls
        makeDefault
        screenSpacePanning={true}
        regress={false}
        ref={cntRef}
        minPolarAngle={0.05}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
};

export default RoomCanvas;
