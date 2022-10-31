import RoomNav from './RoomNav';
import {useParams} from 'react-router-dom';

const RoomEdit = () => {
  const params = useParams();
  const room_id = parseInt(params.room_id);

  return <>RoomEdit</>;
};

export default RoomEdit;
