import React from 'react';
import {useNavigate} from 'react-router-dom';

import {
  Page1Container,
  TextContainer,
  ImageContainer,
  Text,
  Text1,
  RoomButton,
} from './carouselPage.style';

const Page1 = () => {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate('/port');
  };

  return (
    <div>
      <Page1Container>
        <TextContainer>
          <Text1>
            설치가 필요없는
            <br />
            포트폴리오 툴
          </Text1>
          <Text>
            언제 어디서나 손쉽게 꾸밀 수 있는
            <br />
            3D 포트폴리오를 만들어보세요
          </Text>
          <RoomButton onClick={buttonClickHandler}>바로 시작하기</RoomButton>
        </TextContainer>
      </Page1Container>
      <ImageContainer src="./assets/images/logo.png" />
    </div>
  );
};

export default Page1;
