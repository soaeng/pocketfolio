import {useState} from 'react';
import Nav from '../common/nav';
import {useNavigate} from 'react-router-dom';
import {
  Container,
  Background,
  Header,
  CardWrapper,
  Text,
  CardList,
  BtnDiv,
  DeleteBtn,
} from './Portfolio.style';
import Card from './Card';
import AddPort from './AddPort';
import PortList from './PortList';
import {Body1} from '../../styles/styles.style';

const Portfolio = () => {
  const navigate = useNavigate();

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

  return (
    <>
      <Nav></Nav>
      <Background>
        <Container>
          <Header>나의 역사</Header>
          <CardWrapper>
            <Text className="myrooms">나의 소중한 마이룸들</Text>
            <CardList>
              <Card isDelete={isDelete}></Card>
              <div>
                <AddPort></AddPort>
              </div>
            </CardList>
          </CardWrapper>
          <CardWrapper>
            <Text className="portfolios">나의 소중한 포트폴리오들</Text>
            <PortList></PortList>
            <PortList></PortList>
            <PortList></PortList>
          </CardWrapper>
        </Container>
        <BtnDiv>
          <DeleteBtn>
            {isDelete ? (
              <Body1 onClick={delClick}>완료</Body1>
            ) : (
              <Body1 onClick={delClick}>삭제</Body1>
            )}
          </DeleteBtn>
        </BtnDiv>
      </Background>
    </>
  );
};

export default Portfolio;
