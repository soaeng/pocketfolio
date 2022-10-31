import React from 'react';
import {useNavigate} from 'react-router-dom';

import {
  MainContainer,
  Page2Container,
  TextContainer,
  ImageContainer,
  Text,
  RoomButton,
} from './carouselPage.style';

const Page2 = () => {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate('/room');
  };

  return (
    <MainContainer>
      <Page2Container>
        <TextContainer>
          <Text>
            설치가 필요없는
            <br />
            포트폴리오 툴2
          </Text>
          <Text>
            언제 어디서나 손쉽게 꾸밀 수 있는
            <br />
            3D 포트폴리오를 만들어보세요2
          </Text>
          <RoomButton onClick={buttonClickHandler}>바로 시작하기</RoomButton>
        </TextContainer>
      </Page2Container>
      <ImageContainer src="./assets/images/logo.png" />
    </MainContainer>
  );
};

export default Page2;
