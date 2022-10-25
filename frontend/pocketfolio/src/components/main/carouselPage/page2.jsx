import React from 'react';
import {useNavigate} from 'react-router-dom';

import {
  Page2Container,
  TextContainer,
  ImageContainer,
  Text,
  RoomBotton,
} from './carouselPage.style';

const Page2 = () => {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate('/room');
  };

  return (
    <div>
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
          <RoomBotton onClick={buttonClickHandler}>바로 시작하기</RoomBotton>
        </TextContainer>
      </Page2Container>
      <ImageContainer src="./assets/images/logo.png" />
    </div>
  );
};

export default Page2;
