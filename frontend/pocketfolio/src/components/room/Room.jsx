import RoomNav from './RoomNav';
import RoomInfo from './RoomInfo';
import Menu from './Menu';
import {Container, ThreeCanvas} from './Room.style';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {useParams} from 'react-router-dom';

// 마이룸
const Room = () => {
  // url로 받아온 room_id
  const params = useParams();
  const room_id = parseInt(params.room_id);

  return (
    <Container>
      <RoomNav />
      <RoomInfo />
      <Canvas WebGLShadowMap camera={{position: [10, 10, 10], fov: 25}}>
        <OrbitControls autoRotate={false} />
        <gridHelper />
        <axesHelper />
        <camera position={[10, 10, 10]} />

        <mesh>
          <ambientLight intensity={1} castShadow />
          <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={0xa3b18a} />
        </mesh>
      </Canvas>
      <Menu room_id={room_id}/>
    </Container>
  );
};

export default Room;