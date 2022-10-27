import React from 'react';
import {useNavigate} from 'react-router-dom';

import {
  Page1Container,
  TextContainer,
  ImageContainer,
  Text,
  RoomButton,
} from './carouselPage.style';

const Page1 = () => {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate('/room');
  };

  return (
    <div>
      <Page1Container>
        <TextContainer>
          <Text>
            설치가 필요없는
            <br />
            포트폴리오 툴
          </Text>
          <Text>
            언제 어디서나 손쉽게 꾸밀 수 있는
            <br />
            3D 포트폴리오를 만들어보세요
          </Text>
          <RoomButton onClick={buttonClickHandler}>바로 시작하기</RoomButton>
          <RoomButton onClick={buttonClickHandler}>바로 시작하기</RoomButton>
        </TextContainer>
      </Page1Container>
      <ImageContainer src="./assets/images/logo.png" />
    </div>
  );
};

export default Page1;
