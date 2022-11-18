import RoomNav from './RoomNav';
import RoomInfo from './RoomInfo';
import Sidebar from './Sidebar';
import Menu from './Menu';
import RoomCanvas from '../roomCanvas/RoomCanvas';
import {Container, CanvasWrapper, EditBox, Btn} from './Room.style';
import toast, {Toaster} from 'react-hot-toast';
import {useParams} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRoomInfo, updateArranges} from '../../store/roomSlice';
import EditTheme from './EditTheme';
import NoRoom from './NoRoom';

// 마이룸
const Room = () => {
  // url로 받아온 roomSeq

  const params = useParams();
  const roomSeq = parseInt(params.roomSeq);
  const dispatch = useDispatch();
  const user = useSelector(state => state.oauth.user);

  const [sidebar, setSidebar] = useState('');
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(null);
  const [nowIdx, setNowIdx] = useState(0);
  const [nowTheme, setNowTheme] = useState('');
  const [reload, setReload] = useState(false);
  const [capture, setCapture] = useState(false);
  const [nowPort, setNowPort] = useState(null);
  const [arranges, setArranges] = useState(null);
  const prevArranges = useRef();

  const changeSidebar = state => {
    setSidebar(state);
    if (!state) {
      setNowPort(null);
    }
  };

  // edit myroom
  const onEdit = () => {
    setEdit(true);
    setSidebar('edit');
  };

  /** 마이룸 수정 취소 */
  const offEdit = () => {
    setNowTheme(data.room.theme);
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

  // 다시 불러오기
  const handleReload = () => {
    setReload(!reload);
    toast.success('포켓정보가 성공적으로 수정되었습니다.');
  };

  // 방 정보 불러오기
  const getData = async () => {
    const res = await dispatch(getRoomInfo(roomSeq));
    console.log(res.payload);
    if (!res.error) {
      if (
        res.payload.room.privacy === 'O' ||
        (user &&
          res.payload.room.privacy === 'C' &&
          res.payload.owner.userSeq === user.userSeq)
      ) {
        setData(res.payload);
        setArranges(res.payload.arranges);
        setNowTheme(res.payload.room.theme);
      }
    } else {
      setData(null);
      setArranges(null);
      setNowTheme('');
    }
  };

  useEffect(() => {
    getData();
  }, [roomSeq, reload, user]);

  // 포커싱 중인 아이템
  const changeNowIdx = idx => {
    setNowIdx(idx);
  };

  // 포트폴리오 연결 버튼 눌렀을 때, 포트폴리오 수정 모드
  const loadConnect = idx => {
    setNowIdx(idx);
    setSidebar('port');
  };

  // 포트폴리오 연결
  const connectPort = portSeq => {
    setArranges(
      arranges.map((_arrange, _idx) => {
        if (nowIdx === _idx) {
          const arrange = {..._arrange, portSeq};
          return arrange;
        } else {
          return _arrange;
        }
      }),
    );
  };

  // 포트폴리오 연결해제
  const disconnectPort = portSeq => {
    setArranges(
      arranges.map((_arrange, _idx) => {
        if (nowIdx === _idx) {
          const arrange = {
            arrangeSeq: _arrange.arrangeSeq,
            item: _arrange.item,
            location: _arrange.location,
            rotation: _arrange.rotation,
          };
          return arrange;
        } else {
          return _arrange;
        }
      }),
    );
  };

  // 테마변경
  const changeTheme = state => {
    setNowTheme(state);
  };

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

  /** 배치 수정 API put */
  const saveArrange = async e => {
    const body = {
      theme: nowTheme,
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
    if (res) {
      getData();
      setCapture(true);
    }
  };

  // 포트폴리오 상세보기
  const openPortDetail = portSeq => {
    setSidebar('portDetail');
    setNowPort(portSeq);
  };

  // handleCapture
  const offCaptrue = () => {
    setCapture(false);
  };

  return data ? (
    <Container className={sidebar ? 'active' : ''}>
      <RoomNav sidebar={sidebar} edit={edit} />
      <RoomInfo
        sidebar={sidebar}
        edit={edit}
        data={data}
        handleReload={handleReload}
      />
      <CanvasWrapper className={sidebar ? 'active' : ''}>
        {edit && <EditTheme nowTheme={nowTheme} changeTheme={changeTheme} />}
        <RoomCanvas
          edit={edit}
          theme={nowTheme}
          arranges={arranges}
          handleArrange={handleArrange}
          handleDel={handleDel}
          loadConnect={loadConnect}
          changeNowIdx={changeNowIdx}
          openPortDetail={openPortDetail}
          data={data}
          capture={capture}
          offCaptrue={offCaptrue}
          changeSidebar={changeSidebar}
          nowPort={nowPort}
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
            <Btn
              onClick={e => {
                setEdit(false);
                setSidebar('');
                saveArrange(e);
              }}
            >
              저장
            </Btn>
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
        arranges={arranges}
        nowIdx={nowIdx}
        connectPort={connectPort}
        disconnectPort={disconnectPort}
        openPortDetail={openPortDetail}
        nowPort={nowPort}
      />
    </Container>
  ) : (
    <NoRoom/>
  );
};

export default Room;
