import { useState } from 'react';
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
    navigate('/room')

  }

  return (
    <Background>
      <Container>
        <Header>나의 역사</Header>

        <CardWrapper>
          <Text>나의 소중한 포트폴리오들</Text>
          <CardList>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <div onClick={addPortfolio}>
              <AddPort/>
            </div>
          </CardList>
        </CardWrapper>

        <CardWrapper>
          <Text>나의 소중한 마이룸들</Text>
          <CardList>
            <Card></Card>
            <Card></Card>
            <div onClick={addMyRoom}>
              <AddPort/>
            </div>
          </CardList>
        </CardWrapper>
      </Container>
    </Background>
  );
};

export default Portfolio;
