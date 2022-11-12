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
  DelBox,
  DelIcon,
} from './Profile.style';
import DelUserModal from './DelUserModal';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Nav from '../common/Nav';
import {updateProfile, signOut} from '../../store/oauthSlice';
import toast, {Toaster} from 'react-hot-toast';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 기존 유저 정보
  const user = useSelector(state => state.oauth.user);

  // 변경된 유저 정보
  const [name, setName] = useState(user && user.name ? user.name : null);
  const [profilePic, setProfilePic] = useState(
    user && user.profilePic ? user.profilePic : null,
  );
  const [preview, setPreview] = useState(
    user && user.profilePic
      ? user.profilePic
      : process.env.PUBLIC_URL + '/assets/images/logo3.png',
  );
  const [blogUrl, setBlogUrl] = useState(
    user && user.blogUrl ? user.blogUrl : '',
  );

  const [birth, setBirth] = useState(
    user && user.birth
      ? `${user.birth.year}-${user.birth.month}-${user.birth.day}`
      : '',
  );
  const [describe, setDescribe] = useState(
    user && user.describe ? user.describe : '',
  );

  // 회원탈퇴모달
  const [modal, setModal] = useState(false);

  // 회원탈퇴모달 on/off
  const toggleModal = () => {
    setModal(!modal);
  };

  // 회원정보수정
  async function sendData() {

    // form 생성
    const form = new FormData();
    const json = JSON.stringify({
      name: name ? name : user.name,
      birth: birth ? birth : null,
      describe:
        describe && describe !== user.discribe ? describe : user.discribe,
      blogUrl: blogUrl ? blogUrl : null,
    });

    form.append('user', new Blob([json], {type: 'application/json'}));

    form.append('profilePic', profilePic);


    // 회원정보 수정 axios
    const res = await dispatch(updateProfile(form));
    
    if (res.payload.request.status === 201) {
      toast.success('회원정보가 성공적으로 수정되었습니다.');
    } else {
      toast.error('회원정보 수정에 실패했습니다.')
    }
  }

  // 회원탈퇴
  async function deleteUser() {
    const res = await dispatch(signOut());
    if (res) {
      navigate('/main');
    }
  }

  // 파일 미리보기
  function changeImg(e) {
    setProfilePic(e.target.files[0]);

    const reader = new FileReader();
    
    reader.readAsDataURL(e.target.files[0]);
    return new Promise(resolve => {
      reader.onload = () => {
        setPreview(reader.result);
        resolve();
      };
    });
  }

  useEffect(() => {
    if (user && user.birth) {
      const year = user.birth.year;
      const month =
        user.birth.month < 10 ? `0${user.birth.month}` : user.birth.month;
      const day = user.birth.day < 10 ? `0${user.birth.day}` : user.birth.day;

      setBirth(`${year}-${month}-${day}`);
    }
  }, [user]);

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
              <Img id="preview-image" src={preview} />
            </ImgDiv>
            <ImgInputDiv>
              <ImgInput
                type="file"
                onChange={e => changeImg(e)}
                accept="image/*"
              />
              {profilePic ? (
                <DelBox
                  onClick={() => {
                    setProfilePic(null);
                    setPreview(null);
                  }}
                >
                  <DelIcon />
                </DelBox>
              ) : null}
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
              value={blogUrl}
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
          <SignOutText onClick={toggleModal}>회원탈퇴</SignOutText>
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

      {modal ? (
        <DelUserModal
          modal={modal}
          toggleModal={toggleModal}
          deleteUser={deleteUser}
        />
      ) : null}
    </Container>
  );
};

export default Profile;
