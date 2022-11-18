import {
  Background,
  Container,
  Content,
  ImgDiv,
  CloseImg,
  TextDiv,
  Text,
  IconDiv,
  DoorIcon,
  HomeIcon,
  GoMain,
  ToolTip,
  ToolTipText,
} from './NoRoom.style';
import {useNavigate} from 'react-router-dom';
import Nav from '../common/Nav';
import LoginCanvas from '../user/LoginCanvas';

const NoRoom = () => {
  const navigate = useNavigate();

  return (
    <Background className="back">
      <Content>
        <ImgDiv>
          <CloseImg
            src={process.env.PUBLIC_URL + '/assets/images/close.png'}
          ></CloseImg>
        </ImgDiv>

        <TextDiv>
          <Text className="info">비공개 이거나 존재 하지 않는 방입니다.</Text>
          <IconDiv>
            <HomeIcon onClick={() => navigate('/main')}></HomeIcon>

            <ToolTip className="tooltip">
              <ToolTipText>메인화면</ToolTipText>
            </ToolTip>
          </IconDiv>
          {/* <GoMain href={'/main'} >메인으로</GoMain> */}
        </TextDiv>
      </Content>
    </Background>
  );
};

export default NoRoom
