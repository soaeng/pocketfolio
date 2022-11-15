import RoomNav from './RoomNav';
import RoomInfo from './RoomInfo';
import Sidebar from './Sidebar';
import Menu from './Menu';
import RoomCanvas from '../roomCanvas/RoomCanvas';
import {Container, CanvasWrapper, EditBox, Btn} from './Room.style';
import toast, {Toaster} from 'react-hot-toast';
import {useParams} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {getRoomInfo, updateArranges} from '../../store/roomSlice';

// 마이룸
const Room = () => {
  // url로 받아온 roomSeq
  const params = useParams();
  const roomSeq = parseInt(params.roomSeq);
  const dispatch = useDispatch();

  const [sidebar, setSidebar] = useState('');
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(null);
  const [arranges, setArranges] = useState(null);
  const prevArranges = useRef();

  const changeSidebar = state => {
    setSidebar(state);
  };

  // edit myroom
  const onEdit = () => {
    setEdit(true);
    setSidebar('edit');
  };

  const offEdit = () => {
    setArranges(prevArranges.current);
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

  // 방 정보 불러오기
  const getData = async () => {
    const {payload} = await dispatch(getRoomInfo(roomSeq));
    setData(payload);
    setArranges(payload.arranges);
  };

  useEffect(() => {
    getData();
  }, [roomSeq]);

  // 수정 버튼 눌렀을 시 이전 arranges 저장
  useEffect(() => {
    prevArranges.current = arranges;
  }, [edit]);

  // 아이템 배치
  const appendArrange = arrange => {
    setArranges([...arranges, arrange]);
  };
  // 배치 수정
  const handleArrange = (arrange, idx) => {
    setArranges(
      arranges.map((_arrange, _idx) => {
        if (idx === _idx) {
          return arrange;
        } else {
          return _arrange;
        }
      }),
    );
  };
  // 배치 삭제
  const handleDel = idx => {
    setArranges(arranges.filter((_arrange, _idx) => idx !== _idx));
  };

  // 배치 수정 API put
  const saveArrange = async e => {
    setEdit(false);
    setSidebar('');
    const body = {
      theme: data.room.theme,
      arranges: arranges.map(arrange => {
        return {
          arrangeSeq: arrange.arrangeSeq,
          itemSeq: arrange.item.itemSeq,
          location: arrange.location,
          rotation: arrange.rotation,
          portSeq: arrange.portSeq,
        };
      }),
    };
    const res = await dispatch(updateArranges({roomSeq, body}));
    console.log(res);
  };

  return (
    data && (
      <Container className={sidebar ? 'active' : ''}>
        <RoomNav sidebar={sidebar} edit={edit} />
        <RoomInfo sidebar={sidebar} edit={edit} data={data} />
        <CanvasWrapper className={sidebar ? 'active' : ''}>
          <RoomCanvas
            edit={edit}
            theme={data.room.theme}
            arranges={arranges}
            handleArrange={handleArrange}
            handleDel={handleDel}
          />
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
              <Btn onClick={saveArrange}>저장</Btn>
              <Btn onClick={offEdit}>취소</Btn>
            </EditBox>
          ) : null}
        </CanvasWrapper>

        {sidebar || edit ? null : (
          <Menu
            roomSeq={roomSeq}
            changeSidebar={changeSidebar}
            copyURL={copyURL}
            onEdit={onEdit}
            data={data}
          />
        )}

        <Sidebar
          sidebar={sidebar}
          changeSidebar={changeSidebar}
          edit={edit}
          roomSeq={roomSeq}
          data={data}
          appendArrange={appendArrange}
        />
      </Container>
    )
  );
};

export default Room;
