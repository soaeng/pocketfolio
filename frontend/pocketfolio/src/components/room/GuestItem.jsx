import {useSelector} from 'react-redux';
import {
  Container,
  Header,
  NameDiv,
  IconDiv,
  UnlockIcon,
  LockIcon,
  Name,
  Date,
  ImgTextDiv,
  ImgBox,
  Img,
  TextBox,
  BtnDate,
  BtnBox,
  TextBtn,
  CommentContainer,
  CommentArea,
  CommentBtn,
} from './GuestItem.style';

const GuestItem = ({item, removeGuest, roomDto}) => {
  const user = useSelector(state => state.oauth.user);

  return item.isPublic === 'T' || (item.isPublic === 'F' && (item.userSeq === user.userSeq || roomDto.room.userSeq === user.userSeq)) ? (
    <Container>
      <Header className={item.isPublic === 'T' ? '' : 'secret'}>
        <NameDiv>
          <IconDiv>
            {item.isPublic == 'T' ? <UnlockIcon /> : <LockIcon />}
          </IconDiv>
          <Name>{item.userName} </Name>
        </NameDiv>
        <BtnDate>
          <Date>{item.created.slice(0, 16)}</Date>
          {user && user.userSeq === item.userSeq && (
            <BtnBox>
              <TextBtn type="button">수정</TextBtn> |
              <TextBtn
                type="button"
                onClick={() => removeGuest(item.guestbookSeq)}
              >
                삭제
              </TextBtn>
            </BtnBox>
          )}
        </BtnDate>
      </Header>

      <ImgTextDiv>
        <ImgBox>
          <Img
            src={
              item.profile
                ? item.profile
                : process.env.PUBLIC_URL + '/assets/images/logo3.png'
            }
          />
        </ImgBox>
        <TextBox>{item.content}</TextBox>
      </ImgTextDiv>

      {roomDto.room.userSeq === user.userSeq && (
        <CommentContainer>
          <CommentArea className={item.isPublic === 'T' ? '' : 'secret'} />
          <CommentBtn className={item.isPublic === 'T' ? '' : 'secret'}>
            확인
          </CommentBtn>
        </CommentContainer>
      )}
    </Container>
  ) : null;
};

export default GuestItem;
