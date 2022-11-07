import {
  Container,
  Header,
  Name,
  ImgTextDiv,
  ImgBox,
  Img,
  TextBox,
} from './VisitItem.style';

const VisitItem = () => {
  return (
    <Container>
      <Header>
        <Name>User</Name>
      </Header>
      <ImgTextDiv>
        <ImgBox><Img /></ImgBox>
        <TextBox>에베ㅔ베베</TextBox>
      </ImgTextDiv>
    </Container>
  );
};

export default VisitItem;
