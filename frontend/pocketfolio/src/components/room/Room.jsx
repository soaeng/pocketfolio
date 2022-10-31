import RoomNav from './RoomNav';
import {Container, ThreeCanvas} from './Room.style';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {useParams} from 'react-router-dom';

const Room = () => {
  const params = useParams();
  const room_id = parseInt(params.room_id);

  return (
    <Container>
      <RoomNav />

      <Canvas>
        <OrbitControls autoRotate={false} />
        <gridHelper />
        <axesHelper />

        <mesh>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={0xa3b18a} />
        </mesh>

      </Canvas>
    </Container>
  );
};

export default Room;