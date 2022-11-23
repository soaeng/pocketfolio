import {
  Background,
  Content,
  ImgDiv,
  CloseImg,
  Text,
} from './NoRoom.style';
import RoomNav from './RoomNav';

const NoRoom = () => {

  return (
    <Background className="back">
      <RoomNav />
      <Content>
        <ImgDiv>
          <CloseImg src={process.env.PUBLIC_URL + '/assets/images/close.png'} />
        </ImgDiv>
        <Text>비공개 이거나 존재 하지 않는 방입니다.</Text>
      </Content>
    </Background>
  );
};

export default NoRoom;
