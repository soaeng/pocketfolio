import RoomNav from './RoomNav';
import RoomInfo from './RoomInfo';
import Sidebar from './Sidebar';
import Menu from './Menu';
import RoomCanvas from '../roomCanvas/RoomCanvas';
import {Container, CanvasWrapper, EditBox, Btn} from './Room.style';
import toast, {Toaster} from 'react-hot-toast';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { getGuestList } from '../../store/guestSlice';

// 마이룸
const Room = () => {
  // url로 받아온 roomSeq
  const params = useParams();
  const roomSeq = parseInt(params.roomSeq);
  const dispatch = useDispatch();

  const [sidebar, setSidebar] = useState('');
  const [edit, setEdit] = useState(false);

  const changeSidebar = state => {
    setSidebar(state);
  };

  const onEdit = () => {
    setEdit(true);
  };

  const offEdit = () => {
    setEdit(false);
    setSidebar('');
  };

  // copy to clipboard
  const copyURL = () => {
    window.navigator.clipboard.writeText(
      `https://k7e101.p.ssafy.io/room/${roomSeq}`,
    );
    toast.success('URL이 복사되었습니다.');
  };

  const guestList = async () => {
    const res = await dispatch(getGuestList(roomSeq));
  };

  useEffect(() => {
    if (sidebar === 'guest') guestList();
    console.log(sidebar);
  }, [sidebar]);

  return (
    <Container className={sidebar ? 'active' : ''}>
      <RoomNav sidebar={sidebar} edit={edit} />
      <RoomInfo sidebar={sidebar} edit={edit} />
      <CanvasWrapper className={sidebar ? 'active' : ''}>
        <RoomCanvas />
        <Toaster
          position="bottom-left"
          containerStyle={{
            position: 'absolute',
          }}
          toastOptions={{
            duration: 3000,
            style: {
              background: '#fff',
              color: '#333333',
              fontSize: '0.85rem',
            },
          }}
        />
        {edit ? (
          <EditBox>
            <Btn>저장</Btn>
            <Btn onClick={offEdit}>취소</Btn>
          </EditBox>
        ) : null}
      </CanvasWrapper>

      {sidebar | edit ? null : (
        <Menu
          roomSeq={roomSeq}
          changeSidebar={changeSidebar}
          copyURL={copyURL}
          onEdit={onEdit}
        />
      )}

      <Sidebar
        sidebar={sidebar}
        changeSidebar={changeSidebar}
        edit={edit}
        roomSeq={roomSeq}
      />
    </Container>
  );
};

export default Room;
