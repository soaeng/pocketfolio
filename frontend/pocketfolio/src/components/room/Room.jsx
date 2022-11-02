import RoomNav from './RoomNav';
import RoomInfo from './RoomInfo';
import Sidebar from './Sidebar';
import Menu from './Menu';
import {Container, CanvasWrapper} from './Room.style';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {useParams} from 'react-router-dom';
import {useState} from 'react';

// 마이룸
const Room = () => {
  // url로 받아온 room_id
  const params = useParams();
  const room_id = parseInt(params.room_id);
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <Container className={sidebar ? 'active' : ''}>
      <RoomNav sidebar={sidebar} />
      <RoomInfo sidebar={sidebar} />
      <CanvasWrapper className={sidebar ? 'active' : ''}>
        <Canvas
          camera={{position: [10, 10, 10], fov: 25}}
        >
          <OrbitControls autoRotate={false} />
          <gridHelper />
          <axesHelper />
          <camera position={[10, 10, 10]} />

          <mesh>
            <ambientLight intensity={1} castShadow />
            <directionalLight
              position={[10, 10, 10]}
              intensity={1}
              castShadow
            />
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={0xa3b18a} />
          </mesh>
        </Canvas>
      </CanvasWrapper>

      {sidebar ? null : (
        <Menu
          room_id={room_id}
          openSidebar={openSidebar}
        />
      )}

      <Sidebar sidebar={sidebar} closeSidebar={closeSidebar} />
    </Container>
  );
};

export default Room;
