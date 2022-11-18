import {useState, useEffect} from 'react';
import Nav from '../common/Nav';
import {useNavigate} from 'react-router-dom';
import {
  Container,
  Background,
  Header,
  HeaderDiv,
  CardWrapper,
  Text,
  CardList,
  BtnDiv,
  IconDiv,
  TrashIcon,
  TrashIconX,
  AddPortIcon,
  AddPocketIcon,
  DelIcon,
  Table,
  Tbody,
  Th,
  Td,
  Tr,
} from './Portfolio.style';
import Card from './Card';
import AddPocket from './AddPocket';
import {getMyPocket} from '../../store/portSlice';
import {createRoom} from '../../store/roomSlice';
import {useDispatch} from 'react-redux';
import DeleteModal from './DeleteModal';
import {deletePort} from '../../store/portSlice';
import toast, {Toaster} from 'react-hot-toast';

const Portfolio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 포트폴리오 목록 List
  const [portList, setPortList] = useState([]);
  // 포켓 목록 List
  const [pocketList, setPocketList] = useState([]);
  // 마이룸 삭제 아이콘 of/off 변수
  const [isDelete, setIsDelete] = useState(false);
  // 포트폴리오 삭제 아이콘 of/off 변수
  const [delPortIcon, setDelPortIcon] = useState(false);
  // 포트폴리오 삭제, 포켓 생성 후 재랜더링 위한 변수
  const [reLander, setReLander] = useState(false);
  // 삭제 모달 개폐 변수
  const [isOpen, setIsOpen] = useState(false);

  // 포켓 생성 모달 개폐 변수
  const [openPockMod, setOpenPockMod] = useState(false);

  // 포트폴리오 목록 불러오기
  useEffect(() => {
    dispatch(getMyPocket()).then(res => {
      setPortList(res.payload.data.portfolios);
      setPocketList(res.payload.data.rooms);
    });
  }, [reLander]);

  // 마이룸 삭제 아이콘 토글
  const togglePocketDel = () => {
    setIsDelete(!isDelete);
  };

  // 포트폴리오 삭제 아이콘 토글
  const togglePortDel = () => {
    if (portList.length > 0) {
      setDelPortIcon(!delPortIcon);
    }
  };

  // 포트폴리오 상세 페이지 이동
  const movePortDetail = ({item}) => {
    navigate(`/port/${item.portSeq}`);
  };

  // 포트폴리오 작성 페이지 이동
  const movePortCreate = () => {
    navigate('/port/create');
  };

  // 해당 포트폴리오 삭제
  const deletePortHandle = seq => {
    dispatch(deletePort(seq)).then(res => {
      setReLander(!reLander);
      setIsOpen(false);
      toast.success('포트폴리오가 삭제 되었습니다.');
    });
  };

  return (
    <Background>
      <Nav className="nav"></Nav>
      <Toaster
        position="top-center"
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
      <Container>
        <CardWrapper className="myroomwrapper">
          <HeaderDiv>
            <Text className="myrooms">소듕한 포켓들</Text>
            <BtnDiv>
              <IconDiv className="addPocketIcon">
                <AddPocketIcon onClick={()=>setOpenPockMod(true)}></AddPocketIcon>
                <AddPocket
                  open={openPockMod}
                  close={()=>setOpenPockMod(false)}
                  reLander={reLander}
                  setReLander={setReLander}
                  // save={createPocket}
                ></AddPocket>
              </IconDiv>
              <IconDiv className="delPocketIcon" onClick={togglePocketDel}>
                {isDelete ? <TrashIconX /> : <TrashIcon />}
              </IconDiv>
            </BtnDiv>
          </HeaderDiv>
          <CardList className="roomlists">
            {pocketList.length > 0
              ? pocketList.map((item, idx) => (
                  <Card key={idx} pocketData={item} isDelete={isDelete} reLander={reLander} setReLander={setReLander}></Card>
                ))
              : null}
          </CardList>
        </CardWrapper>
        <CardWrapper>
          <HeaderDiv>
            <Text className="portfolios">소중한 포트폴리오들</Text>
            <BtnDiv>
              <IconDiv className="addPortIcon" onClick={movePortCreate}>
                <AddPortIcon />
              </IconDiv>
              <IconDiv className="delPortIcon" onClick={togglePortDel}>
                {delPortIcon && portList.length > 0 ? (
                  <TrashIconX />
                ) : (
                  <TrashIcon />
                )}
              </IconDiv>
            </BtnDiv>
          </HeaderDiv>
          <CardList className="portlists">
            <Table>
              <Tbody>
                <Tr>
                  <Th className="no">No.</Th>
                  <Th className="title">포트폴리오 제목</Th>
                  <Th className="del"> 삭제</Th>
                </Tr>
              </Tbody>
              {portList.length > 0
                ? portList.map((item, idx) => (
                    <Tbody>
                      <Tr
                        className="portlist"
                        key={idx}
                        onClick={() => movePortDetail({item})}
                      >
                        <Td className={(idx + 1) % 2 ? 'odd' : 'even'}>
                          {idx + 1}.
                        </Td>
                        <Td className={(idx + 1) % 2 ? 'odd ' : 'even'}>
                          {item.name}
                        </Td>
                        <Td className={(idx + 1) % 2 ? 'odd ' : 'even'}>
                          <DelIcon
                            onClick={event => {
                              event.stopPropagation();
                              // 모달 띄우기
                              setIsOpen(true);
                            }}
                            className={delPortIcon ? 'on' : 'off'}
                          ></DelIcon>
                        </Td>
                        {isOpen && (
                          <DeleteModal
                            onClose={() => setIsOpen(false)}
                            text={'포트폴리오를'}
                            seq={item.portSeq}
                            deleteFunc={deletePortHandle}
                          ></DeleteModal>
                        )}
                      </Tr>
                    </Tbody>
                  ))
                : null}
            </Table>
          </CardList>
        </CardWrapper>
      </Container>
    </Background>
  );
};

export default Portfolio;
