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
} from './Portfolio.style';
import Card from './Card';
import AddPort from './AddPort';
import PortList from './PortList';

const Portfolio = () => {
  const navigate = useNavigate();

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
            <Text className='myrooms'>나의 소중한 마이룸들</Text>
            <CardList>
              <Card></Card>
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
      </Background>
    </>
  );
};

export default Portfolio;
