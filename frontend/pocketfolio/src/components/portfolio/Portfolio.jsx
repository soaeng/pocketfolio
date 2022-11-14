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
  DeleteIcon,
  DeleteIconX,
  AddPortIcon,
} from './Portfolio.style';
import Card from './Card';
import AddMyRoom from './AddMyRoom';
import PortList from './PortList';
import {getMyPort, getMyPocket} from '../../store/portSlice';
import {useDispatch} from 'react-redux';
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
  // 포트폴리오 삭제 후 재랜더링 위한 변수
  const [deletedPort, setDeletedPort] = useState(false);

  // 포트폴리오 목록 불러오기
  useEffect(() => {
    dispatch(getMyPocket()).then(res => {
      setPortList(res.payload.data.portfolios);
      setPocketList(res.payload.data.rooms);
    });
  }, [deletedPort]);

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

  const movePortCreate = () => {
    navigate('/port/create');
  };

  return (
    <Background>
      <Nav className="nav"></Nav>
      <Container>
        <CardWrapper className="myroomwrapper">
          <HeaderDiv>
            <Text className="myrooms">나의 소중한 마이룸들</Text>
            <IconDiv onClick={togglePocketDel}>
              {isDelete ? (
                <DeleteIconX></DeleteIconX>
              ) : (
                <DeleteIcon></DeleteIcon>
              )}
            </IconDiv>
          </HeaderDiv>
          <CardList className="roomlists">
            <Card isDelete={isDelete}></Card>
            <div>
              <AddMyRoom></AddMyRoom>
            </div>
          </CardList>
        </CardWrapper>
        <CardWrapper>
          <HeaderDiv>
            <Text className="portfolios">나의 소중한 포트폴리오들</Text>
            <BtnDiv>
              <IconDiv className="addPortIcon" onClick={movePortCreate}>
                <AddPortIcon />
              </IconDiv>
              <IconDiv className="delPortIcon" onClick={togglePortDel}>
                {delPortIcon && portList.length > 0 ? (
                  <DeleteIconX />
                ) : (
                  <DeleteIcon />
                )}
              </IconDiv>
            </BtnDiv>
          </HeaderDiv>
          <CardList className="portlists">
            {portList.length > 0
              ? portList.map((item, idx) => (
                  <div onClick={() => movePortDetail({item})}>
                    <PortList
                      key={idx}
                      item={item}
                      isDeletePort={delPortIcon}
                      deletedPort={deletedPort}
                      setDeletedPort={setDeletedPort}
                    />
                  </div>
                ))
              : null}
          </CardList>
        </CardWrapper>
      </Container>
    </Background>
  );
};

export default Portfolio;
