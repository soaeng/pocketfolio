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


const Portfolio = () => {
  const navigate = useNavigate();

  const addPortfolio = () => {
    navigate('/main');
  };

  const addMyRoom = () => {
    navigate('/room');
  };

  return (
    <>
      <Nav></Nav>
      <Background>
        <Container>
          <Header>나의 역사</Header>

          <CardWrapper>
          <Text>나의 소중한 마이룸들</Text>
            <CardList>
              <Card></Card>
              <Card></Card>
              <Card></Card>

  
            </CardList>
          </CardWrapper>

          <CardWrapper>
            <div>제목</div>

          </CardWrapper>
        </Container>
      </Background>
    </>
  );
};

export default Portfolio;
