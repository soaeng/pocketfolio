import {
  Container,
  Title,
  Form,
  Div,
  ImgDiv,
  Img,
  NickBirth,
  NBLabel,
  NBInput,
  NBBox,
} from './profile.style';

const Profile = () => {
  return (
    <Container>
      <Title>회원 정보 수정</Title>
      <Form>
        <Div>
          <ImgDiv>
            <Img
              type="image"
              src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
            />
          </ImgDiv>

          <NickBirth>
            <NBBox>
              <NBLabel>닉네임</NBLabel>
              <NBInput type="text" placeholder="닉네임" />
            </NBBox>
            <NBBox>
              <NBLabel>생년월일</NBLabel>
              <NBInput type="date" placeholder="2022-10-24" />
            </NBBox>
          </NickBirth>
        </Div>
      </Form>
    </Container>
  );
};

export default Profile;
