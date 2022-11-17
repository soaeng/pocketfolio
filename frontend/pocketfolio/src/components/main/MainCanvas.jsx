import {Canvas} from '@react-three/fiber';
import {useRef} from 'react';
import Theme from '../main/MainTheme';
import Items from '../roomCanvas/Items';


const MainCanvas = ({mainRoom, color}) => {
  const cntRef = useRef();
  const boundaryRef = useRef();

  return (
    <Canvas
      shadows
      camera={{position: [-30, 30, 30], fov: 20}}
    >
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

      <Theme boundaryRef={boundaryRef} name={mainRoom.theme}>
        <Items
          cntRef={cntRef}
          boundaryRef={boundaryRef}
          arranges={mainRoom.arranges}
        />
      </Theme>
    </Canvas>
  );
};

export default MainCanvas;
