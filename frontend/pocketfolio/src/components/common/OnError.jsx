import {useNavigate} from 'react-router-dom';
import {
  Container,
  Box,
  ZeroContainer,
  ImgDiv,
  Img,
  Text,
  ContentBox,
  Content,
  Btn,
  BtnText,
  Icon,
  IconDiv,
  PositionDiv,
} from './OnError.style';

const OnError = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box>
        <Text>4</Text>
        <ZeroContainer>
          <ImgDiv>
            <Img src={process.env.PUBLIC_URL + '/assets/images/snowman.PNG'} />
          </ImgDiv>
        </ZeroContainer>
        <Text>4</Text>
      </Box>
      <ContentBox>
        <Content>찾을 수 없는 페이지입니다.</Content>
        <Content>
          요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요 !!
        </Content>
        <PositionDiv>
          <Btn onClick={() => navigate('/main')}>
            <BtnText>메인으로 이동</BtnText>
            <IconDiv>
              <Icon />
            </IconDiv>
          </Btn>
        </PositionDiv>
      </ContentBox>
    </Container>
  );
};

export default OnError;
