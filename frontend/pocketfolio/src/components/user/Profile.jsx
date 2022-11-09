import {
  Container,
  NavContainer,
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
  BtnContainer,
  SignOutText,
} from './Profile.style';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import Nav from '../common/Nav';
import {updateProfile, signOut} from '../../store/oauthSlice';
import toast, {Toaster} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.oauth.user);
  const [name, setName] = useState(user.name);
  const [profilePic, setProfilePic] = useState(
    user.profilePic ? user.profilePic : null,
  );
  const [blogURL, setBlogUrl] = useState(user.blogUrl ? user.blogUrl : '');
  const [birth, setBirth] = useState(user.birth ? user.birth : '');
  const [describe, setDescribe] = useState(user.describe);

  async function sendData() {
    const form = new FormData();
    const json = JSON.stringify({
      name: name ? name : user.name,
      birth: birth ? birth : null,
      describe:
        describe !== user.discribe && describe ? describe : user.discribe,
    });

    form.append('user', new Blob([json], {type: 'application/json'}));

    form.append('profilePic', profilePic);

    const res = await dispatch(updateProfile(form));
    if (res.payload.request.status === 201)
      toast.success('회원정보가 성공적으로 수정되었습니다.');
  }

  async function deleteUser() {
    const res = await dispatch(signOut());
    if (res) {
      navigate('/main');
    }
  }

  return (
    <Container>
      <NavContainer>
        <Nav />
      </NavContainer>

      <Title>회원 정보 수정</Title>
      <Form
        onSubmit={e => {
          e.preventDefault();
          sendData();
        }}
      >
        <Div>
          <ImgContainer>
            <ImgDiv>
              <Img
                id="preview-image"
                src={
                  profilePic
                    ? profilePic
                    : process.env.PUBLIC_URL + '/assets/images/logo.png'
                }
              />
            </ImgDiv>
            <ImgInputDiv>
              <ImgInput
                type="file"
                onChange={e => setProfilePic(e.target.files[0])}
                accept="image/*"
              />
            </ImgInputDiv>
          </ImgContainer>

          <NickBirth>
            <NBBox>
              <Label>닉네임</Label>
              <Input
                type="text"
                placeholder="닉네임"
                value={name}
                onChange={e => {
                  if (e.target.value.trim().length <= 12)
                    setName(e.target.value.trim());
                }}
              />
            </NBBox>
            <NBBox>
              <Label>생년월일</Label>
              <Input
                type="date"
                value={birth}
                onChange={e => setBirth(e.target.value)}
              />
            </NBBox>
          </NickBirth>
        </Div>

        <BlogIntroDiv>
          <BIBox>
            <Label>블로그 주소</Label>
            <Input
              type="text"
              placeholder="개인 블로그나 github주소를 입력해주세요"
              value={blogURL}
              onChange={e => setBlogUrl(e.target.value.trim())}
            />
          </BIBox>
          <BIBox>
            <Label>자기소개</Label>
            <TextArea
              placeholder="소개를 입력해주세요 (200자 이내)"
              value={describe}
              onChange={e => {
                if (e.target.value.length <= 200) setDescribe(e.target.value);
              }}
            />
          </BIBox>
        </BlogIntroDiv>

        <BtnContainer>
          <SignOutText onClick={deleteUser}>회원탈퇴</SignOutText>
          <Btnbox>
            <Btn type="reset" className="cancel">
              취소
            </Btn>
            <Btn type="submit" className="save">
              저장
            </Btn>
          </Btnbox>
        </BtnContainer>
      </Form>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#333333',
            fontSize: '0.85rem',
          },
        }}
      />
    </Container>
  );
};

export default Profile;
