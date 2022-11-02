import RoomNav from '../room/RoomNav';
import {useParams} from 'react-router-dom';

// 마이룸 수정
const RoomEdit = () => {

  // url로 받아온 room_id
  const params = useParams();
  const room_id = parseInt(params.room_id);

  return <>RoomEdit</>;
};

export default RoomEdit;
