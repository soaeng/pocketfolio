import React from 'react';
import {
  Container,
  Background,
  Header,
  CardWrapper,
  Text,
  CardList,
} from './Portfolio.style';
import Card from './Card';

const portfolio = () => {
  return (
    <Background>
      <Container>
        <Header>나의 역사</Header>

        <CardWrapper>
          <Text>
            나의 소중한 포트폴리오들
          </Text>
          <CardList>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </CardList>
        </CardWrapper>

        <CardWrapper>
          <Text>
            <p>나의 소중한 마이룸들</p>
          </Text>
          <CardList>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </CardList>
        </CardWrapper>
      </Container>
    </Background>
  );
};

export default portfolio;
