import {useEffect} from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getGuestList, postGuest, delGuest} from '../../store/guestSlice';
import GuestItem from './GuestItem';
import {
  Container,
  Title,
  ImgTextDiv,
  WriteForm,
  TextArea,
  ImgBox,
  Img,
  BottomBox,
  LockIconDiv,
  LockIcon,
  UnlockIcon,
  LockText,
  Btn,
  ScrollDiv,
  ItemContainer,
} from './GuestList.style';

const GuestList = ({roomSeq, roomDto}) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.oauth.user);

  const [data, setData] = useState([]);

  // 방명록 작성
  const [isPublic, setIsPublic] = useState(true);
  const [content, setContent] = useState('');

  // 방명록 목록 조회
  async function getData() {
    const {payload} = await dispatch(getGuestList(roomSeq));
    setData(payload.reverse());
  }

  // 방명록 작성
  async function writeGuest() {
    if (content.trim()) {
      const res = await dispatch(
        postGuest({
          roomSeq,
          data: {
            content,
            isPublic: isPublic ? 'T' : 'F',
          },
        }),
      );

      // 작성 폼 초기화
      if (res) {
        setContent('');
        setIsPublic(true);
        getData();
      }
    }
  }

  // 방명록 삭제
  async function removeGuest(bookSeq) {
    const res = await dispatch(delGuest(bookSeq));
    if (res) getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Title>방명록</Title>
      {user && (
        <WriteForm
          onSubmit={e => {
            e.preventDefault();
            writeGuest();
          }}
        >
          <ImgTextDiv>
            <ImgBox>
              <Img
                src={
                  user.profilePic
                    ? user.profilePic
                    : process.env.PUBLIC_URL + '/assets/images/logo3.png'
                }
              />
            </ImgBox>
            <TextArea
              placeholder="방명록을 작성해주세요"
              value={content}
              onChange={e => {
                setContent(e.target.value);
              }}
            />
          </ImgTextDiv>

          <BottomBox>
            <LockIconDiv onClick={() => setIsPublic(!isPublic)}>
              {isPublic ? <UnlockIcon /> : <LockIcon />}
              <LockText>{isPublic ? '공개글' : '비밀글'}</LockText>
            </LockIconDiv>
            <Btn type="submit">확인</Btn>
          </BottomBox>
        </WriteForm>
      )}

      <ScrollDiv className={user ? '' : 'full'}>
        <ItemContainer>
          {data.map((item, idx) => (
            <GuestItem
              item={item}
              removeGuest={removeGuest}
              key={idx}
              roomDto={roomDto}
              getData={getData}
            />
          ))}
        </ItemContainer>
      </ScrollDiv>
    </Container>
  );
};

export default GuestList;
