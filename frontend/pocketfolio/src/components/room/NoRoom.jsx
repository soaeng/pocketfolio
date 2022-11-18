import {
  Background, 
  Container, 
  Content,
  ImgDiv,
  CloseImg,
  TextDiv,
  Text,
  IconDiv,
  DoorIcon
} from './NoRoom.style';
import Nav from '../common/Nav';
import LoginCanvas from '../user/LoginCanvas';
const NoRoom = () => {
  return (
    <Background className='back'>
      
      <Content>
        <ImgDiv >
          <CloseImg src={process.env.PUBLIC_URL + '/assets/images/close.png'}></CloseImg>
        </ImgDiv>

        <IconDiv>

          
        </IconDiv>
        <TextDiv>
          <Text>
            비공개 이거나 존재 하지 않는 방입니다.
          </Text>
        </TextDiv>
      </Content>
    </Background>
  );
};

export default NoRoom;
