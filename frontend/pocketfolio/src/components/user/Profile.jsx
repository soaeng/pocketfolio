import {
  Container,
  Title,
  Form,
  Div,
  ImgContainer,
  ImgDiv,
  Img,
  ImgInput,
  NickBirth,
  Label,
  Input,
  NBBox,
  BlogIntroDiv,
  BIBox,
  TextArea,
  Btnbox,
  Btn,
  ImgInputDiv,
} from './Profile.style';

const Profile = () => {
  return (
    <Container>
      <Title>회원 정보 수정</Title>
      <Form>
        <Div>
          <ImgContainer>
            <ImgDiv>
              <Img
                id="preview-image"
                src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
              />
            </ImgDiv>
            <ImgInputDiv>
              <ImgInput type="file" />
            </ImgInputDiv>
          </ImgContainer>

          <NickBirth>
            <NBBox>
              <Label>닉네임</Label>
              <Input type="text" placeholder="닉네임" />
            </NBBox>
            <NBBox>
              <Label>생년월일</Label>
              <Input type="date" value="2022-01-01" />
            </NBBox>
          </NickBirth>
        </Div>

        <BlogIntroDiv>
          <BIBox>
            <Label>블로그 주소</Label>
            <Input
              type="text"
              placeholder="개인 블로그나 github주소를 입력해주세요"
            />
          </BIBox>
          <BIBox>
            <Label>자기소개</Label>
            <TextArea placeholder="소개를 입력해주세요" />
          </BIBox>
        </BlogIntroDiv>

        <Btnbox>
          <Btn type="reset" className="cancel">
            취소
          </Btn>
          <Btn type="submit" className="save">
            저장
          </Btn>
        </Btnbox>
      </Form>
    </Container>
  );
};

export default Profile;
