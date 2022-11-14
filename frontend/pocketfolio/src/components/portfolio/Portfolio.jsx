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
  DeleteBtn,
  DeleteIcon,
  DeleteIconX,
} from './Portfolio.style';
import Card from './Card';
import AddMyRoom from './AddMyRoom';
import PortList from './PortList';
import {getMyPort} from '../../store/portSlice';
import {useDispatch} from 'react-redux';
const Portfolio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 포트폴리오 목록 List
  const [portList, setPortList] = useState('');
  // 마이룸 삭제 아이콘 of/off 변수
  const [isDelete, setIsDelete] = useState(false);
  // 포트폴리오 삭제 아이콘 of/off 변수
  const [delPortIcon, setDelPortIcon] = useState(false);
  // 포트폴리오 삭제 후 재랜더링 위한 변수
  const [deletedPort, setDeletedPort] = useState(false);

  // 포트폴리오 목록 불러오기
  useEffect(() => {
    dispatch(getMyPort()).then(res => {
      setPortList(res.payload.data);
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

  console.log(portList);
  return (
    <Background>
      <Nav className="nav"></Nav>
      <Container>
        <CardWrapper className="myroomwrapper">
          <HeaderDiv>
            <Text className="myrooms">나의 소중한 마이룸들</Text>
            <DeleteBtn onClick={togglePocketDel}>
              {isDelete ? (
                <DeleteIconX></DeleteIconX>
              ) : (
                <DeleteIcon></DeleteIcon>
              )}
            </DeleteBtn>
          </HeaderDiv>
          <CardList className="roomlists">
            <Card isDelete={isDelete}></Card>
            <Card isDelete={isDelete}></Card>
            <div>
              <AddMyRoom></AddMyRoom>
            </div>
          </CardList>
        </CardWrapper>
        <CardWrapper>
          <HeaderDiv>
            <Text className="portfolios">나의 소중한 포트폴리오들</Text>
            <DeleteBtn onClick={togglePortDel}>
              {delPortIcon && portList.length > 0 ? (
                <DeleteIconX></DeleteIconX>
              ) : (
                <DeleteIcon></DeleteIcon>
              )}
            </DeleteBtn>
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
      <BtnDiv></BtnDiv>
    </Background>
  );
};

export default Portfolio;
