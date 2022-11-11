import {
  Container,
  Header,
  Name,
  ImgTextDiv,
  ImgBox,
  Img,
  TextBox,
} from './GuestItem.style';

const GuestItem = () => {
  return (
    <Container>
      <Header>
        <Name>User</Name>
      </Header>
      <ImgTextDiv>
        <ImgBox>
          <Img />
        </ImgBox>
        <TextBox>에베ㅔ베베</TextBox>
      </ImgTextDiv>
    </Container>
  );
};

export default GuestItem;
