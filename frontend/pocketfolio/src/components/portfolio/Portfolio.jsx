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

  const [isDelete, setIsDelete] = useState(false);

  const delClick = () => {
    setIsDelete(!isDelete);
  };

  const addPortfolio = () => {
    navigate('/main');
  };

  const moveMyRoom = () => {
    navigate('/room/1');
  };

  useEffect(() => {
    dispatch(getMyPort())
    .then((res) => {
      console.log(res.payload.data);
    });
  }, []);

  return (
    <Background>
      <Nav className="nav"></Nav>
      <Container>
        <CardWrapper className="myroomwrapper">
          <HeaderDiv>
            <Text className="myrooms">나의 소중한 마이룸들</Text>
            <DeleteBtn onClick={delClick}>
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
          <Text className="portfolios">나의 소중한 포트폴리오들</Text>
          <CardList>
            <PortList></PortList>
            <PortList></PortList>
            <PortList></PortList>
            <PortList></PortList>
          </CardList>
        </CardWrapper>
      </Container>
      <BtnDiv></BtnDiv>
    </Background>
  );
};

export default Portfolio;
